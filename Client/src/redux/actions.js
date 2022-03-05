import {
    REQUEST,
    SUCCESS,
    FAILURE,
    LOAD_CATALOG,
    LOAD_HOME,
    LOAD_CATALOGS,
    OPEN_MAIN_MENU,
    OPEN_FILTERS_MENU,
    CLOSE_MENU
} from './types';


export const openMainMenu = () => ({type: OPEN_MAIN_MENU});
export const openFiltersMenu = () => ({type: OPEN_FILTERS_MENU});
export const closeMenu = () => ({type: CLOSE_MENU});

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

export const loadCatalogs = () => async (dispatch) => {
    dispatch({ type: LOAD_CATALOGS + REQUEST });

    try {
        const req = await fetch('/catalogs');
        const data = await req.json();

        dispatch({ type: LOAD_CATALOGS + SUCCESS, data });
    } catch (error) {
        dispatch({ type: LOAD_CATALOGS + FAILURE, error });
    }
};

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