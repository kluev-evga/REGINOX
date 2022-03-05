import { createSelector } from 'reselect';


export const catalog = (state) => state.catalog.entities;
export const catalogLoading = (state) => state.catalog.loading;
export const catalogError = (state) => state.catalog.error;
export const catalogCategories = (state, props) => catalog(state)[props.id].categories;

export const catalogs = (state) => state.catalogs.entities;
export const catalogsLoading = (state) => state.catalogs.loading;
export const catalogsError = (state) => state.catalogs.error;

const home = (state) => state.home.entities;
export const homeLoading = (state) => state.home.loading;
export const homeError = (state) => state.home.error;
export const selectSlider = createSelector(home, (home) => home.slider);
export const selectAddressBar = createSelector(home, (home) => home.addressBar);

export const selectCatalog = createSelector(
    catalog,
    Object.values
);

export const selectCatalogs = createSelector(
    catalogs,
    Object.values
);

export const menuMain = (state) => state.menu.mainMenu;
export const menuIsOpen = (state) => state.menu.isOpen;


// const restaurantsSelector = (state) => state.restaurants.entities;
// const productsSelector = (state) => state.products.entities;
// const orderSelector = (state) => state.order;
// const reviewsSelector = (state) => state.reviews.entities;
// const usersSelector = (state) => state.users.entities;

// export const categorySelector = (state, id) => state.catalog[id].categories;


// Object.values(catalog).map(
//     ({id, imageUrl, alt, name, url}) => ({id,imageUrl, alt, name, url})
// )






// const catalogCategories = Object.keys(initial_state);


// const test = catalogCategories.map(id => initial_state[id].categories);


// export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
// export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

// export const productsLoadingSelector = (state, props) =>
//   state.products.loading[props.restId];
// export const productsLoadedSelector = (state, props) =>
//   state.products.loaded[props.restId];

// export const reviewsLoadingSelector = (state, props) =>
//   state.reviews.loading[props.restId];
// export const reviewsLoadedSelector = (state, props) =>
//   state.reviews.loaded[props.restId];

// export const usersLoadingSelector = (state) => state.users.loading;
// export const usersLoadedSelector = (state) => state.users.loaded;

// export const restaurantsListSelector = createSelector(
//   restaurantsSelector,
//   Object.values
// );

// export const restaurantSelector = (state, { id }) =>
//   restaurantsSelector(state)[id];
// export const productSelector = (state, { id }) => productsSelector(state)[id];
// export const reviewSelector = (state, { id }) => reviewsSelector(state)[id];
// export const amountSelector = (state, { id }) => orderSelector(state)[id] || 0;
// export const orderProductsSelector = createSelector(
//   [productsSelector, orderSelector],
//   (products, order) =>
//     Object.keys(order)
//       .filter((productId) => order[productId] > 0)
//       .map((productId) => products[productId])
//       .map((product) => ({
//         product,
//         amount: order[product.id],
//         subtotal: order[product.id] * product.price,
//       }))
// );

// export const totalSelector = createSelector(
//   [orderProductsSelector],
//   (orderProducts) =>
//     orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
// );

// export const reviewWitUserSelector = createSelector(
//   reviewSelector,
//   usersSelector,
//   (review, users) => ({
//     ...review,
//     user: users[review.userId]?.name,
//   })
// );

// export const averageRatingSelector = createSelector(
//   reviewsSelector,
//   restaurantSelector,
//   (reviews, restaurant) => {
//     const ratings = restaurant.reviews.map((id) => reviews[id]?.rating || 0);
//     return Math.round(
//       ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length
//     );
//   }
// );
