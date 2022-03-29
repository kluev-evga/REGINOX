import { createSelector } from 'reselect';


export const appStatus = state => state.app.status;
export const appIsHomePage = state => state.app.isHomePage;
export const appIsPopUp = state => state.app.isPopUp;


export const menuLoaded = state => state.menu.loaded;
export const menuError = state => state.menu.error;
export const menuLinks = state => state.menu.links;
export const menuCategories = state => state.menu.categories;
export const isMainMenu = state => state.menu.isMainMenu;
export const menuIsOpen = state => state.menu.isOpen;
const menuTitlesByUrl = createSelector(
    menuLinks,
    (links) => links.reduce((acc, item) => {
        acc[item.url] = item.title;
        return acc;
    },{})
);
export const menuTitleByUrl = (state) => (url) => menuTitlesByUrl(state)[url];
export const menuLinksList = createSelector(
    menuLinks,
    (links) => links.reduce((acc, item) => {
        acc[item.url] = true;
        return acc;
    }, {})
);




export const homeLoading = state => state.home.loading;
export const homeLoaded = state => state.home.loaded;
export const homeError = state => state.home.error;
export const homeSlider = state => state.home.slider;
export const homeAddressBar = state => state.home.addressBar;
export const homePopularProducts = state => state.home.popularProducts;


export const catalogsLoading = state => state.catalogs.loading;
export const catalogsLoaded = state => state.catalogs.loaded;
export const catalogsError = state => state.catalogs.error;
export const catalogs = state => state.catalogs.entities;
export const catalogsTotal = state => state.catalogs.total;


export const sertificates = state => state.sertificates.entities;
export const sertificatesLoading = state => state.sertificates.loading;
export const sertificatesLoaded = state => state.sertificates.loaded;
export const sertificatesError = state => state.sertificates.error;
export const sertificatesItem = (state, {id}) => sertificates(state)[id];
export const selectSertificatesList = createSelector(sertificates, Object.keys);
export const sertificatesSlide = state => state.sertificates.sliderSlide;
export const sertificatesScroll = state => state.sertificates.scroll;


export const brands = state => state.brands.entities;
export const brandsLoading = state => state.brands.loading;
export const brandsLoaded = state => state.brands.loaded;
export const brandsError = state => state.brands.error;












/////////---------------????????????????????????????????????
export const articlesItem = (state, {id}) => state.articles.entities[id];
export const articlesItemLoading = (state, page) => state.articles.loading[page];
export const articlesItemLoaded = (state, page) => state.articles.loaded[page];
export const articlesError = state => state.articles.error;
export const articlesTotal = state => state.articles.total;
export const articlesPages = state => state.articles.pages;
export const articlesCurrentPage = state => state.articles.currentPage;
export const articlesSelectedIsLoaded = state => state.articles.loaded[articlesCurrentPage(state)];
export const articlesList = state => articlesPages(state)[articlesCurrentPage(state)];
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


export const productsLoading = state => url => state.products.loading?.[url];
export const productsLoaded = state => url => state.products.loaded?.[url];
export const product = (state, url, id) => state.products.products[url][id];


export const filters = state => url => state.filters.filters[url];
const fltr = (state, url) => state.filters.filters[url];
export const selectNormalizedFilters = createSelector(
    fltr,
    (filters) => filters.slice(1).reduce((acc, {searchGroup, products}) => {
        acc[searchGroup] = {};
        for (let [key, value] of Object.entries(products)) acc[searchGroup][key] = value;
        return acc
    }, {})
);
export const isFiltering = state => state.filters.isFiltering;
export const filteredProducts = state => state.filters.products;
export const sortBy = state => state.filters.sortBy;