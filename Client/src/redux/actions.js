import {
    REQUEST,
    SUCCESS,
    FAILURE,
    OPEN_MAIN_MENU,
    OPEN_FILTERS_MENU,
    CLOSE_MENU,
    LOAD_CATALOG,
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
    PRODUCTS_IS_FILTERED,
} from './types';

import {
    sertificatesLoading,
    sertificatesLoaded,
    brandsLoading,
    brandsLoaded,
    catalogsLoading,
    selectCatalogsSize,
    articlesItemLoading,
    articlesItemLoaded,
    articleLoading,
    articleLoaded,
    productsLoading,
    productsLoaded,
    products,
    filters
} from './selectors';


export const loadHome = () => async (dispatch) => {
    dispatch({ type: LOAD_HOME + REQUEST });

    try {
        const req = await fetch('/home');
        const data = await req.json();

        dispatch({ type: LOAD_HOME + SUCCESS, data });
    } catch (error) {
        dispatch({ type: LOAD_HOME + FAILURE, error });
    }
};

export const loadCatalog = () => async (dispatch) => {
    dispatch({ type: LOAD_CATALOG + REQUEST });

    try {
        const req = await fetch('/catalog');
        const data = await req.json();

        dispatch({ type: LOAD_CATALOG + SUCCESS, data });
    } catch (error) {
        dispatch({ type: LOAD_CATALOG + FAILURE, error });
    }
};

export const openMainMenu = () => ({type: OPEN_MAIN_MENU});
export const openFiltersMenu = () => ({type: OPEN_FILTERS_MENU});
export const closeMenu = () => ({type: CLOSE_MENU});

export const setSertificatesSlide = (slide) => ({type: SET_SERTIFICATES_SLIDER_SLIDE, data: slide});
export const setSertificatesScroll = (value) => ({type: SET_SERTIFICATES_SCROLL, data: value});

export const loadCatalogs = (pageSize) => async (dispatch, getState) => {
    const state = getState();
    const loading = catalogsLoading(state);
    const current = selectCatalogsSize(state);
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

export const loadSertificates = () => async (dispatch, getState) => {
    const state = getState();
    const loading = sertificatesLoading(state);
    const loaded = sertificatesLoaded(state);
    if (loading || loaded) return;

    dispatch({ type: LOAD_SERTIFICATES + REQUEST });

    try {
        const req = await fetch('/sertificates');
        const data = await req.json();
        dispatch({ type: LOAD_SERTIFICATES + SUCCESS, data });
    } catch (error) {
        dispatch({ type: LOAD_SERTIFICATES + FAILURE, error });
    }
};

export const loadBrands = () => async (dispatch, getState) => {
    const state = getState();
    const loading = brandsLoading(state);
    const loaded = brandsLoaded(state);
    if (loading || loaded) return;

    dispatch({ type: LOAD_BRANDS + REQUEST });

    try {
        const req = await fetch('/brands');
        const data = await req.json();
        dispatch({ type: LOAD_BRANDS + SUCCESS, data });
    } catch (error) {
        dispatch({ type: LOAD_BRANDS + FAILURE, error });
    }
};

export const loadArticles = (page) => async (dispatch, getState) => {
    const state = getState();
    const loading = articlesItemLoading(state, page);
    const loaded = articlesItemLoaded(state, page);
    if (loading || loaded) return;

    dispatch({ type: LOAD_ARTICLES + REQUEST, page });

    try {
        const req = await fetch(`/articles?page=${page}`);
        const data = await req.json();
        dispatch({ type: LOAD_ARTICLES + SUCCESS, data, page });
    } catch (error) {
        dispatch({ type: LOAD_ARTICLES + FAILURE, error });
    }
};

export const selectArticlesPage = (page) => ({type: SELECT_ARTICLES_PAGE, page});

export const loadArticle = (match) => async (dispatch, getState) => {
    const state = getState();
    const loading = articleLoading(state, {match});
    const loaded = articleLoaded(state, {match});
    if (loading || loaded) return;

    const article = match.params.article;

    dispatch({ type: LOAD_ARTICLE + REQUEST, article });

    try {
        const req = await fetch(`/article?article=${article}`);
        const data = await req.json();
        (data.valid)
            ? dispatch({ type: LOAD_ARTICLE + SUCCESS, data, article })
            : dispatch({ type: LOAD_ARTICLE + FAILURE, error: 'invalidURL', article });
    } catch (error) {
        dispatch({ type: LOAD_ARTICLE + FAILURE, error });
    }
};


export const loadProducts = (url) => async (dispatch, getState) => {
    const state = getState();
    const loading = productsLoading(state)(url);
    const loaded = productsLoaded(state)(url);
    if (loading || loaded) return;


    dispatch({ type: LOAD_PRODUCTS + REQUEST, url });

    try {
        // const req = await fetch(`/products?id=${id}`);
        const req = await fetch(`/products/${url}`);
        // console.log(req);
        // response.status 404 - --- push...

        const data = await req.json();
        dispatch({ type: LOAD_PRODUCTS + SUCCESS, data, url })
    } catch (error) {
        dispatch({ type: LOAD_PRODUCTS + FAILURE, error, url });
    }
};





const filterByCategory = (productsArr, url, categoryUrl, state) => {
    if (categoryUrl === 'all') return productsArr;
    const categoryFilters = filters(state)(url)[0].products[categoryUrl];
    return productsArr.filter(({id}) => id in categoryFilters);
};


export const filterProducts = (url, categoryUrl) => async (dispatch, getState) => {
    const state = getState();
    const productsArr = products(state)(url);

    let byCategory = [];

    if (url) {
        byCategory = filterByCategory(productsArr, url, categoryUrl, state)
    }


    dispatch({type: PRODUCTS_IS_FILTERED, data:byCategory, url})

}