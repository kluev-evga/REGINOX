import { createSelector } from 'reselect';


export const appStatus = state => state.app.status;
export const appIsPopUp = state => state.app.isPopUp;
export const appIsTiles = state => state.app.isTiles;
export const appSearchIsOpen = state => state.app.isSearchOpen;
export const appError = state => state.app.error;


export const menuLoaded = state => state.menu.loaded;
export const menuError = state => state.menu.error;
export const menuLinks = state => state.menu.links;
export const menuCategories = state => state.menu.categories;
const menuTitlesByUrl = createSelector(
    menuLinks,
    (links) => links.reduce((acc, item) => {
        acc[item.url] = item.title;
        return acc;
    },{})
);
export const getTitle = (state, url) =>  menuTitlesByUrl(state)[url]
export const menuLinksList = createSelector(
    menuCategories,
    (categories) => {
        const result = {}
        for(let key in categories) {
            result[key] = categories[key].reduce((acc, item) => {
                acc[item.categoryUrl] = true
                return acc
            }, {})
        }
        return result
    }
);


export const mainMenuIsOpen = state => state.burgerMenu.main.isOpen;
export const filtersMenuIsOpen = state => state.burgerMenu.filters.isOpen;


export const homeLoading = state => state.home.loading;
export const homeLoaded = state => state.home.loaded;
export const homeError = state => state.home.error;
export const homeSlider = state => state.home.slider;
export const homeAddressBar = state => state.home.addressBar;
export const homePopularProducts = state => state.home.popularProducts;


export const catalogs = state => state.catalogs.entities;
export const catalogsTotal = state => state.catalogs.total;
export const catalogsLoading = state => state.catalogs.loading;
export const catalogsLoaded = state => state.catalogs.loaded;
// export const catalogsError = state => state.catalogs.error;


export const sertificates = state => state.sertificates.entities;
export const sertificatesLoading = state => state.sertificates.loading;
export const sertificatesLoaded = state => state.sertificates.loaded;
export const sertificatesError = state => state.sertificates.error;
export const sertificatesItem = (state, id) => sertificates(state)[id];
export const selectSertificatesList = createSelector(sertificates, Object.keys);


export const brands = state => state.brands.entities;
export const brandsLoading = state => state.brands.loading;
export const brandsLoaded = state => state.brands.loaded;
export const brandsError = state => state.brands.error;


export const articlesItem = (state, id) => state.articles.entities[id];
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


export const articleEntity = (state, article) => state.article.entities[article];
export const articleLoading = (state, article) => state.article.loading[article];
export const articleLoaded = (state, article) => !!state.article.loaded[article];
export const articleError = (state, {match}) => state.article.error?.[match.params.article];


export const productsLoading = (state, url) => state.products.loading?.[url];
export const productsLoaded = (state, url) => state.products.loaded?.[url];
const products = (state, url) => state.products.products[url];
export const product = (state, url, id) => state.products.products[url][id];


export const filters = (state, url) => state.filters.filters[url];
const fltr = (state, url) => state.filters.filters[url];
export const selectNormalizedFilters = createSelector(
    fltr,
    (filters) => filters.reduce((acc, {searchGroup, products}) => {
        acc[searchGroup] = {};
        for (let [key, value] of Object.entries(products)) acc[searchGroup][key] = value;
        return acc
    }, {})
);
export const filtersIsFiltering = (state, url) => state.filters.isFiltering[url] === undefined ? true : state.filters.isFiltering[url];
export const filteredProducts = (state, url) => state.filters.products[url];
export const sortBy = state => state.filters.sortBy;
export const queryString = (state, url) => state.filters.queryString?.[url];
export const filtersMinMax = createSelector(
    products,
    (products) => {
        const productsArr =  Object.keys(products)
        if (productsArr.length !== 0) {
            const priceArr =productsArr.map(id => products[id].p)
            return [Math.min(...priceArr), Math.max(...priceArr)]
        } else return [0, 0.00001]// guard when no products
    }
)
export const filterStoredMinMax = (state, url) => state.filters.minmax?.[url]


export const productItems = state => state.productItems.entities;
export const productItem = (state, productUrl) => productItems(state)[productUrl];
export const productItemLoading = (state, productUrl) => state.productItems.loading[productUrl];
export const productItemLoaded = (state, productUrl) => state.productItems.loaded[productUrl] || false;
export const productItemError = (state, productUrl) => state.productItems.error[productUrl];
export const productItemsById = createSelector(
    productItems,
    items => items && Object.keys(items).reduce((acc, url) => {
            acc[items[url].id] = {...items[url], productUrl: url};
            return acc;
        }, {})
);
export const productItemById = state => id => productItemsById(state)[id];


export const reviews = (state, productUrl)  => state.reviews.entities[productUrl];
export const reviewsCount = (state, productUrl) => productItems(state)[productUrl].reviewsCount
export const reviewsLoading = (state, productUrl)  => state.reviews.loading[productUrl];
export const reviewsLoaded = (state, productUrl)  => state.reviews.loaded[productUrl];


export const cartItems = state => state.cart.items;
export const cartHasItems = createSelector(cartItems, items => Boolean(Object.keys(items).length));
export const cartEntity = (state, id) => state.cart.entities[id];
export const cartEntities = state => state.cart.entities;
export const cartLoading = state => state.cart.loading;
export const cartLoaded = state => state.cart.loaded;
export const cartItemCount = (state, id) => state.cart.items[id];
export const cartItemsArray = createSelector( cartItems, Object.keys );


export const orderModalIsOpen = state => state.order.modalIsOpen
export const orderLoading = state => state.order.loading
export const orderPaymentIsSuccessful = state => state.order.paymentIssuccessful


export const similarProducts = state => state.similarProducts.entities;
export const similarProductsloading = state => state.similarProducts.loading;


export const promoItems = state => state.promo.entities;
export const promoLoaded = state => state.promo.loaded;


export const newItems = state => state.newItems.entities;
export const newItemsLoaded = state => state.newItems.loaded;


export const compareLoaded = state => state.compare.loaded;
export const compareLoading = state => state.compare.loading;
export const compareItem = (state, id) => state.compare.entities?.[id];
const compareEntities = state => state.compare.entities;
export const compareItems = createSelector( compareEntities, Object.keys );
export const compareCount = createSelector( compareItems, (items) => Object.keys(items).length );