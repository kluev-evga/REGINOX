import {
    REQUEST,
    SUCCESS,
    FAILURE,
    SET_APP_STATUS,
    SET_APP_HOME_PAGE,
    SET_APP_IS_POP_UP,
    SET_APP_TILES,
    UNSET_APP_TILES,
    OPEN_MAIN_MENU,
    OPEN_FILTERS_MENU,
    CLOSE_MENU,
    LOAD_MENU,
    LOAD_HOME,
    LOAD_CATALOGS,
    LOAD_SERTIFICATES,
    SET_SERTIFICATES_SLIDER_SLIDE,
    SET_SERTIFICATES_SCROLL,
    LOAD_BRANDS,
    LOAD_ARTICLES,
    SELECT_ARTICLES_PAGE,
    LOAD_ARTICLE,
    LOAD_PRODUCTS,
    LOAD_PRODUCT,
    LOAD_CART,
    LOAD_SIMILAR_RPODUCTS,
    LOAD_PROMO_ITEMS,
    LOAD_NEW_ITEMS,
    TOGGLE_PRODUCTS_IS_FILTERING,
    PRODUCTS_IS_FILTERING,
    PRODUCTS_IS_FILTERED,
    SETLECT_PRODUCTS_SORT_BY,
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    SET_QUERY_STRING,
    LOAD_REVIEWS,
} from './types';

import {
    sertificatesLoading,
    sertificatesLoaded,
    brandsLoading,
    brandsLoaded,
    articlesItemLoading,
    articlesItemLoaded,
    articleLoading,
    articleLoaded,
    productsLoading,
    productsLoaded,
    selectNormalizedFilters,
    productItemLoading,
    productItemLoaded
} from './selectors';


export const setAppStatus = (status) => ({type: SET_APP_STATUS, status});
export const setAppIsHomePage = (status) => ({type: SET_APP_HOME_PAGE, status});
export const setAppIsPopUp = (status) => ({type: SET_APP_IS_POP_UP, status});
export const openMainMenu = () => ({type: OPEN_MAIN_MENU});
export const openFiltersMenu = () => ({type: OPEN_FILTERS_MENU});
export const closeMenu = () => ({type: CLOSE_MENU});
export const setSertificatesSlide = (slide) => ({type: SET_SERTIFICATES_SLIDER_SLIDE, data: slide});
export const setSertificatesScroll = (value) => ({type: SET_SERTIFICATES_SCROLL, data: value});
export const selectArticlesPage = (page) => ({type: SELECT_ARTICLES_PAGE, page});
export const changeCartItemCount = (id, count) => ({type: ADD_ITEM_TO_CART, id, count});
export const removeItemFromCart = (id) => ({type: REMOVE_ITEM_FROM_CART, id});
export const setQueryString = (url, queryString) => ({type: SET_QUERY_STRING, url, queryString});
export const setAppTiles = () => ({type: SET_APP_TILES});
export const unsetAppTiles = () => ({type: UNSET_APP_TILES});
export const toggleProductsIsFiltering = (url, status) => ({type: TOGGLE_PRODUCTS_IS_FILTERING, url, status});


export const loadMenu = (noScroll) => async (dispatch, getState) => {
    window.scrollTo({top: 0, behavior: noScroll ? 'auto':'smooth'});
    const state = getState();
    const loaded = state.menu.loaded;
    const loading = state.menu.loading;
    if (loading || loaded) return null;

    dispatch({ type: LOAD_MENU + REQUEST });

    try {
        const req = await fetch('/menu');
        const data = await req.json();
        dispatch({ type: LOAD_MENU + SUCCESS, data });
    } catch (error) {
        dispatch({ type: LOAD_MENU + FAILURE, error });
        return Promise.reject(error);
    }
};


export const loadBrands = () => async (dispatch, getState) => {
    const state = getState();
    const loading = brandsLoading(state);
    const loaded = brandsLoaded(state);
    if (loading || loaded) return null;
    
    dispatch({ type: LOAD_BRANDS + REQUEST });

    Promise.all([fetch('/brands'), loadMenu()(dispatch, getState)])
    .then(([res]) => res.json())
    .then((data) => dispatch({ type: LOAD_BRANDS + SUCCESS, data }))
    .catch(error => {
        dispatch({ type: LOAD_BRANDS + FAILURE, error });
        return Promise.reject(error);
    });
};


export const loadSertificates = () => async (dispatch, getState) => {
    const state = getState();
    const loading = sertificatesLoading(state);
    const loaded = sertificatesLoaded(state);
    if (loading || loaded) return;

    dispatch({ type: LOAD_SERTIFICATES + REQUEST });

    Promise.all([fetch('/sertificates'), loadBrands()(dispatch, getState)])
    .then(([res]) => res.json())
    .then((data) => dispatch({ type: LOAD_SERTIFICATES + SUCCESS, data }))
    .catch(error => dispatch({ type: LOAD_SERTIFICATES + FAILURE, error }));
};


export const loadArticles = (page) => async (dispatch, getState) => {
    const state = getState();
    const loading = articlesItemLoading(state, page);
    const loaded = articlesItemLoaded(state, page);
    if (loading || loaded) return;
    const menu =  state.menu.loaded;

    dispatch({ type: LOAD_ARTICLES + REQUEST, page });

    Promise.all([fetch(`/articles?page=${page}`), !menu && loadMenu()(dispatch, getState)])
    .then(([res]) => res.json())
    .then((data) => dispatch({ type: LOAD_ARTICLES + SUCCESS, data, page }))
    .catch(error => dispatch({ type: LOAD_ARTICLES + FAILURE, error }));
};


export const loadHome = () => (dispatch, getState) => {
    window.scrollTo({top: 0, behavior: 'auto'});
    const state = getState();
    const loading = state.home.loading;
    const loaded = state.home.loaded;
    if (loading || loaded) return;
    
    dispatch({ type: LOAD_HOME + REQUEST });

    Promise.all([fetch('/home'), loadMenu()(dispatch, getState)])
        .then(([res]) => res.json())
        .then((data) => dispatch({ type: LOAD_HOME + SUCCESS, data }))
        .catch(error => dispatch({ type: LOAD_HOME + FAILURE, error }));
};


export const loadCatalogs = (pageSize) => async (dispatch, getState) => {
    const state = getState();
    const loading = state.catalogs.loading;
    const current = state.catalogs.entities.length;
    if (loading || pageSize <= current) return;

    dispatch({ type: LOAD_CATALOGS + REQUEST });

    try {
        const req = await fetch(`/catalogs?size=${pageSize}&current=${current}`);
        const data = await req.json();
        dispatch({ type: LOAD_CATALOGS + SUCCESS, data });
    } catch (error) {
        dispatch({ type: LOAD_CATALOGS + FAILURE, error });
    }
};


export const loadArticle = (match, history) => async (dispatch, getState) => {
    const state = getState();
    const loading = articleLoading(state, {match});
    const loaded = articleLoaded(state, {match});
    if (loading || loaded) return;

    const article = match.params.article;

    dispatch({ type: LOAD_ARTICLE + REQUEST, article });
    Promise.all([fetch(`/articles/${article}`), loadMenu()(dispatch, getState)])
        .then(([res], reject ) => {
            if (res.status === 404) {
                history.replace(`/articles/${article}/not-found`);
                reject();
            } else {return res.json()}
        })
        .then((data) => dispatch({ type: LOAD_ARTICLE + SUCCESS, data, article }))
        .catch(error => dispatch({ type: LOAD_ARTICLE + FAILURE, error }));
};


export const loadProducts = (url) => async (dispatch, getState) => {
    const state = getState();
    const loading = productsLoading(state)(url);
    const loaded = productsLoaded(state)(url);
    if (loading || loaded) return;

    const menu =  state.menu.loaded;
    dispatch({ type: LOAD_PRODUCTS + REQUEST, url });

    Promise.all([fetch(`/products/${url}`), !menu && loadMenu()(dispatch, getState)])
        .then(([res]) => res.json())
        .then((data) => dispatch({ type: LOAD_PRODUCTS + SUCCESS, data, url }))
        .catch(error => dispatch({ type: LOAD_PRODUCTS + FAILURE, error, url }));
};


export const loadProductItem = (url, productUrl) => async (dispatch, getState) => {
    const state = getState();
    const loading = productItemLoading(state)(productUrl);
    const loaded = productItemLoaded(state)(productUrl);
    if (loading || loaded) return;

    const menu =  state.menu.loaded;
    dispatch({ type: LOAD_PRODUCT + REQUEST, productUrl });

    Promise.all([fetch(`/product/${url}/${productUrl}`), !menu && loadMenu()(dispatch, getState)])
        .then(([res]) => res.json())
        .then((data) => dispatch({ type: LOAD_PRODUCT + SUCCESS, data, productUrl }))
        .catch(error => dispatch({ type: LOAD_PRODUCT + FAILURE, error, productUrl }));
};


export const loadReviews = (url, productUrl, currentSize = 0) => async (dispatch, getState) => {
    const state = getState();
    const loading = state.reviews.loading[productUrl];
    // const loaded = state.reviews.loaded[productUrl];
    if (loading) return;

    dispatch({ type: LOAD_REVIEWS + REQUEST, productUrl });

    try {
        const req = await fetch(`/reviews/${url}/${productUrl}?size=${currentSize}`);
        const data = await req.json();
        dispatch({ type: LOAD_REVIEWS + SUCCESS, data, productUrl });
    } catch (error) {
        dispatch({ type: LOAD_REVIEWS + FAILURE, error });
    }
};


export const loadCart = items => async (dispatch, getState) => {
    const state = getState();
    const menu =  state.menu.loaded;

    dispatch({ type: LOAD_CART + REQUEST });

    Promise.all([fetch(`/cart?items=${items}`), !menu && loadMenu()(dispatch, getState)])
        .then(([res]) => res.json())
        .then((data) => dispatch({ type: LOAD_CART + SUCCESS, data }))
        .catch(error => dispatch({ type: LOAD_CART + FAILURE, error }));
};


export const loadSimilarProducts = () => async dispatch => {
    dispatch({ type: LOAD_SIMILAR_RPODUCTS + REQUEST });

    try {
        const req = await fetch('/similar-products');
        const data = await req.json();
        dispatch({ type: LOAD_SIMILAR_RPODUCTS + SUCCESS, data });
    } catch (error) {
        dispatch({ type: LOAD_SIMILAR_RPODUCTS + FAILURE, error });
    }
};


export const loadPromoItems = () => async (dispatch, getState) => {
    const state = getState();
    const loading = state.promo.loading;
    const loaded = state.promo.loaded;
    if (loading || loaded) return;

    const menu =  state.menu.loaded;

    dispatch({ type: LOAD_PROMO_ITEMS + REQUEST });

    Promise.all([fetch('/promo'), !menu && loadMenu()(dispatch, getState)])
        .then(([res]) => res.json())
        .then((data) => dispatch({ type: LOAD_PROMO_ITEMS + SUCCESS, data }))
        .catch(error => dispatch({ type: LOAD_PROMO_ITEMS + FAILURE, error }));
};

export const loadNewItems = () => async (dispatch, getState) => {
    const state = getState();
    const loading = state.newItems.loading;
    const loaded = state.newItems.loaded;
    if (loading || loaded) return;

    const menu =  state.menu.loaded;
    dispatch({ type: LOAD_NEW_ITEMS + REQUEST });

    Promise.all([fetch('/new'), !menu && loadMenu()(dispatch, getState)])
        .then(([res]) => res.json())
        .then((data) => dispatch({ type: LOAD_NEW_ITEMS + SUCCESS, data }))
        .catch(error => dispatch({ type: LOAD_NEW_ITEMS + FAILURE, error }));
};


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
const sortFromCheap = (arr, prd) => arr.sort((a, b) => (prd[a]['p'] - prd[b]['p']));
const sortFromExpensive = (arr, prd) => arr.sort((a, b) => (prd[b]['p'] - prd[a]['p']));
const sortRating = (arr, prd) => arr.sort((a, b) => (prd[b]['r'] - prd[a]['r']));

const sortProducts = (sortBy, arr, prd) => {
    switch (sortBy.value) {
        case 'from cheap': return sortFromCheap(arr, prd);
        case 'from expensive': return sortFromExpensive(arr, prd);
        default: return sortRating(arr, prd);
    };
};

//////////////////////////////////////////////////////////////////////////////////////
export const setSortBy = (sortBy, url) => async (dispatch, getState) => {
    const state = getState();
    const arr = [...state.filters.products[url]];
    const prd = state.products.products[url];

    dispatch({type: SETLECT_PRODUCTS_SORT_BY, sortBy});
    dispatch({type: PRODUCTS_IS_FILTERING, url});

    const products = await sortProducts(sortBy, arr, prd);

    dispatch({type: PRODUCTS_IS_FILTERED, data:products, url});
};

//////////////////////////////////////////////////////////////////////////////////////
const filteredProducts = (productsbyCategory, selected, normalizedFilters) => {
    // массив массивов для сортировки:
    const sortArr = Object.keys(selected).reduce((acc, key) => {
        const arr = selected[key].map(item => normalizedFilters[key][item]);
        const obj = Object.assign({}, ...arr);
        acc.push(obj);
        return acc;
    }, []);

    // сортировка:
    return sortArr.reduce((acc, obj) => {
        return acc.filter(item => item in obj);
    }, productsbyCategory);
};

export const filterProducts = (url, categoryUrl, selected) => (dispatch, getState) => {
    const state = getState();
    const filters = state.filters.filters[url];
    const categoryFilters = filters[0];
    const normalizedFilters = selectNormalizedFilters(state, url);

    dispatch({type: PRODUCTS_IS_FILTERING, url});

    new Promise((resolve) => {
        const productsbyCategory = categoryFilters.products[categoryUrl];
        // setTimeout(()=> resolve(productsbyCategory), 0);
        resolve(productsbyCategory);
    })
    .then(productsbyCategory => {
        const productsFiltered = (!Object.keys(selected).length)
            ? productsbyCategory
            : filteredProducts(productsbyCategory, selected, normalizedFilters);

        return productsFiltered;
    })
    .then(productsFiltered => {
        const sortBy = state.filters.sortBy;
        const prd = state.products.products[url];
        const sortedProducts = sortProducts(sortBy, productsFiltered, prd);
        return sortedProducts;
    })
    .then(sortedProducts => {
        dispatch({type: PRODUCTS_IS_FILTERED, data:sortedProducts, url });
    })
};