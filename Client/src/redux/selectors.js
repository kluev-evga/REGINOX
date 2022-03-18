import { createSelector } from 'reselect';


export const catalogLoading = (state) => state.catalog.loading;
export const catalogError = (state) => state.catalog.error;
export const catalogLinks = (state) => state.catalog.links;
export const catalogCategories = (state) => state.catalog.categories;
const catalogLiksByUrl = createSelector(
    catalogLinks,
    (links) => links.reduce((acc, item) => {
        acc[item.url] = item
        return acc;
    },{})
);
export const catalogTitleByUrl = (state, props) => catalogLiksByUrl(state)[props.match.params.product].title;


export const catalogs = (state) => state.catalogs.entities;
export const catalogsLoading = (state) => state.catalogs.loading;
export const catalogsError = (state) => state.catalogs.error;
export const catalogsTotal = (state) => state.catalogs.total;
export const selectCatalogsSize = createSelector(
    catalogs,
    (catalogsObj) => Object.keys(catalogsObj).length
);
export const selectCatalogs = createSelector(
    catalogs,
    Object.values
);


const home = (state) => state.home.entities;
export const homeLoading = (state) => state.home.loading;
export const homeError = (state) => state.home.error;
export const selectSlider = createSelector(home, (home) => home.slider);
export const selectAddressBar = createSelector(home, (home) => home.addressBar);


export const isMainMenu = (state) => state.menu.isMainMenu;
export const menuIsOpen = (state) => state.menu.isOpen;


export const sertificates = (state) => state.sertificates.entities;
export const sertificatesLoading = (state) => state.sertificates.loading;
export const sertificatesLoaded = (state) => state.sertificates.loaded;
export const sertificatesError = (state) => state.sertificates.error;
export const sertificatesItem = (state, {id}) => sertificates(state)[id];
export const sertificatesItemMatched = (state, props) => sertificates(state)[props.match.params.sertificateId];
export const selectSertificatesList = createSelector(
    sertificates,
    Object.keys
);
export const sertificatesSlide = (state) => state.sertificates.sliderSlide;
export const sertificatesScroll = (state) => state.sertificates.scroll;


export const brands = (state) => state.brands.entities;
export const brandsLoading = (state) => state.brands.loading;
export const brandsLoaded = (state) => state.brands.loaded;
export const brandsError = (state) => state.brands.error;


export const articlesItem = (state, {id}) => state.articles.entities[id];
export const articlesItemLoading = (state, page) => state.articles.loading[page];
export const articlesItemLoaded = (state, page) => state.articles.loaded[page];
export const articlesError = (state) => state.articles.error;
export const articlesTotal = (state) => state.articles.total;
export const articlesPages = (state) => state.articles.pages;
export const articlesCurrentPage = (state) => state.articles.currentPage;
export const articlesSelectedIsLoaded = (state) => state.articles.loaded[articlesCurrentPage(state)];
export const articlesList = (state) => articlesPages(state)[articlesCurrentPage(state)];
export const selectArticlesTotalPages = createSelector(
    articlesTotal,
    (total) => Math.ceil(total / 5)
);
export const selectArticlesPages = createSelector(
    selectArticlesTotalPages,
    (total) => [...Array(total)].map((_, i) => i+1)
);


export const article = (state, {match}) => state.article.entities[match.params.article];
export const articleLoading = (state, {match}) => state.article.loading[match.params.article];
export const articleLoaded = (state, {match}) => !!state.article.loaded[match.params.article];
export const articleError = (state, {match}) => state.article.error?.[match.params.article];


export const productsLoading = (state) => (url) => state.products.loading?.[url];
export const productsLoaded = (state) => (url) => state.products.loaded?.[url];
export const product = (state, url, id) => state.products.products[url][id];


export const filters = (state) => (url) => state.filters.filters[url];
const fltr = (state, url) => state.filters.filters[url];
export const selectNormalizedFilters = createSelector(
    fltr,
    (filters) => filters.slice(1).reduce((acc, {searchGroup, products}) => {
        acc[searchGroup] = {};
        for (let [key, value] of Object.entries(products)) acc[searchGroup][key] = value;
        return acc
    }, {})
);
export const isfiltered = (state, url) => state.filters.isFiltered[url];
export const filteredProducts = (state, url) => state.filters.products[url];