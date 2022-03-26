import {
    REQUEST,
    SUCCESS,
    FAILURE,
    SET_APP_STATUS,
    SET_APP_HOME_PAGE,
    SET_APP_IS_POP_UP,
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
    PRODUCTS_IS_FILTERING,
    PRODUCTS_IS_FILTERED,
    SETLECT_PRODUCTS_SORT_BY,
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

//     dispatch({ type: LOAD_PRODUCTS + REQUEST, url });

//     try {
//         // const req = await fetch(`/products?id=${id}`);////////////////////????????????????????????????????????????????
//         const req = await fetch(`/products/${url}`);
//         // console.log(req);
//         // response.status 404 - --- push...

//         const data = await req.json();
//         dispatch({ type: LOAD_PRODUCTS + SUCCESS, data, url })
//     } catch (error) {
//         dispatch({ type: LOAD_PRODUCTS + FAILURE, error, url });
//     }
// };



//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
const sortProducts = (sortBy, arr, prd) => {
    switch (sortBy.value) {
        case 'from cheap': return sortFromCheap(arr, prd);
        case 'from expensive': return sortFromExpensive(arr, prd);
        default: return sortRating(arr, prd);
    };
};

const sortFromCheap = (arr, prd) => arr.sort((a, b) => (prd[a]['p'] - prd[b]['p']));
const sortFromExpensive = (arr, prd) => arr.sort((a, b) => (prd[b]['p'] - prd[a]['p']));
const sortRating = (arr, prd) => arr.sort((a, b) => (prd[b]['r'] - prd[a]['r']));

//////////////////////////////////////////////////////////////////////////////////////
export const setSortBy = (sortBy, url) => async (dispatch, getState) => {
    const state = getState();
    const arr = [...state.filters.products];
    const prd = state.products.products[url];

    dispatch({type: SETLECT_PRODUCTS_SORT_BY, sortBy});
    dispatch({type: PRODUCTS_IS_FILTERING});

    const products = await sortProducts(sortBy, arr, prd);

    dispatch({type: PRODUCTS_IS_FILTERED, data:products});
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

export const filterProducts = (url, categoryUrl, selected) => async (dispatch, getState) => {
    const state = getState();
    const filters = state.filters.filters[url];
    const categoryFilters = filters[0];
    const normalizedFilters = selectNormalizedFilters(state, url);

    dispatch({type: PRODUCTS_IS_FILTERING});

    setTimeout( async () => {
        const productsbyCategory = await categoryFilters.products[categoryUrl];

        const productsFiltered = await (!Object.keys(selected).length)
            ? productsbyCategory
            : filteredProducts(productsbyCategory, selected, normalizedFilters);

        const sortBy = state.filters.sortBy;
        const prd = state.products.products[url];
        const sortedProducts = await sortProducts(sortBy, productsFiltered, prd);

        // let arr = [];//                       замедлитель
        // for (let i=0; i<3500000; i++) {
        //     // console.log(i);
        //     const a = Math.random();
        //     arr.push(a);
        // }
        // const aaa = await arr.reverse();
        // console.log(aaa);
    
        dispatch({type: PRODUCTS_IS_FILTERED, data:sortedProducts});
    }, 50);
};


