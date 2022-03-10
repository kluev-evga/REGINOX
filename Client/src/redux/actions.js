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