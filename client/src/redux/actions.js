import {
   REQUEST,
   SUCCESS,
   FAILURE,
   LOAD_MENU,
   LOAD_HOME,
   LOAD_CATALOGS,
   LOAD_SERTIFICATES,
   LOAD_BRANDS,
   LOAD_ARTICLES,
   LOAD_ARTICLE,
   LOAD_PRODUCTS,
   LOAD_PRODUCT,
   LOAD_CART,
   LOAD_SIMILAR_RPODUCTS,
   LOAD_PROMO_ITEMS,
   LOAD_NEW_ITEMS,
   LOAD_REVIEWS,
   LOAD_COMPARE_ITEMS,
   SUBMIT_ORDER,
   APP_SET_TILES,
   APP_UNSET_TILES,
   APP_OPEN_SEARCH,
   APP_CLOSE_SEARCH,
   APP_SET_ERROR,
   APP_UNSET_ERROR,
   ARTICLES_SELECT_PAGE,
   CART_ADD_ITEM,
   CART_REMOVE_ITEM,
   CART_CLEAR,
   COMPARE_TOGGLE_ITEM,
   COMPARE_REMOVE_ITEM,
   FILTERS_IS_FILTERED,
   FILTERS_IS_FILTERING,
   FILTERS_SORT_PRODUCTS_INIT,
   ORDER_CLOSE_MODAL
} from './types'

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
   productItemLoaded,
   filtersMinMax,
   filterStoredMinMax
} from './selectors'

import { api } from '../utils/api'


export const selectArticlesPage = page => ({ type: ARTICLES_SELECT_PAGE, page })
export const changeCartItemCount = (id, count) => ({ type: CART_ADD_ITEM, id, count })
export const removeItemFromCart = id => ({ type: CART_REMOVE_ITEM, id })
export const clearCart = () => ({ type: CART_CLEAR })
export const setAppTiles = () => ({ type: APP_SET_TILES })
export const setAppError = () => ({ type: APP_SET_ERROR })
export const unsetAppError = () => ({ type: APP_UNSET_ERROR })
export const unsetAppTiles = () => ({ type: APP_UNSET_TILES })
export const toggleCompareItem = id => ({ type: COMPARE_TOGGLE_ITEM, id })
export const removeItemfromCompare = id => ({ type: COMPARE_REMOVE_ITEM, id })
export const openSearchMenu = () => ({ type: APP_OPEN_SEARCH })
export const closeSearchMenu = () => ({ type: APP_CLOSE_SEARCH })
export const closeModalOrder = () => ({ type: ORDER_CLOSE_MODAL })


export const loadMenu = () => (dispatch, getState) => {
   const state = getState()
   const loaded = state.menu.loaded
   const loading = state.menu.loading
   if (loading || loaded) return null

   dispatch({ type: LOAD_MENU + REQUEST })

   api.get('/menu')
      .then(({data}) => { dispatch({ type: LOAD_MENU + SUCCESS, data }) })
      .catch((error) => { dispatch({ type: LOAD_MENU + FAILURE, error }) })
}


export const loadBrands = () => (dispatch, getState) => {
   const state = getState()
   const loading = brandsLoading(state)
   const loaded = brandsLoaded(state)
   if (loading || loaded) return null

   dispatch({ type: LOAD_BRANDS + REQUEST })

   Promise.all([api.get('/brands'), loadMenu()(dispatch, getState)])
      .then(([{data}]) => dispatch({ type: LOAD_BRANDS + SUCCESS, data }))
      .catch(error => dispatch({ type: LOAD_BRANDS + FAILURE, error }))
}


export const loadSertificates = () => (dispatch, getState) => {
   const state = getState()
   const loading = sertificatesLoading(state)
   const loaded = sertificatesLoaded(state)
   if (loading || loaded) return

   dispatch({ type: LOAD_SERTIFICATES + REQUEST })

   Promise.all([api.get('/sertificates'), loadBrands()(dispatch, getState)])
      .then(([{data}]) => dispatch({ type: LOAD_SERTIFICATES + SUCCESS, data }))
      .catch(error => dispatch({ type: LOAD_SERTIFICATES + FAILURE, error }))
}


export const loadHome = () => (dispatch, getState) => {
   const state = getState()
   const loading = state.home.loading
   const loaded = state.home.loaded
   if (loading || loaded) return

   dispatch({ type: LOAD_HOME + REQUEST })

   Promise.all([api.get('/home'), loadMenu()(dispatch, getState)])
      .then(([{data}]) => dispatch({ type: LOAD_HOME + SUCCESS, data }))
      .catch(error => dispatch({ type: LOAD_HOME + FAILURE, error }))
}


export const loadCatalogs = pageSize => (dispatch, getState) => {
   const state = getState()
   const loading = state.catalogs.loading
   const current = state.catalogs.entities.length
   if (loading || pageSize <= current) return

   dispatch({ type: LOAD_CATALOGS + REQUEST })

   api.get(`/catalogs?size=${pageSize}&current=${current}`)
      .then(({data}) => { dispatch({ type: LOAD_CATALOGS + SUCCESS, data }) })
      .catch((error) => { dispatch({ type: LOAD_CATALOGS + FAILURE, error }) })
}


export const loadArticles = page => (dispatch, getState) => {
   const state = getState()
   const loading = articlesItemLoading(state, page)
   const loaded = articlesItemLoaded(state, page)
   if (loading || loaded) return
   const menu = state.menu.loaded

   dispatch({ type: LOAD_ARTICLES + REQUEST, page })

   Promise.all([api.get(`/articles?page=${page}`), !menu && loadMenu()(dispatch, getState)])
      .then(([{data}]) => dispatch({ type: LOAD_ARTICLES + SUCCESS, data, page }))
      .catch(error => dispatch({ type: LOAD_ARTICLES + FAILURE, error }))
}


export const loadArticle = (article) => (dispatch, getState) => {
   const state = getState()
   const loading = articleLoading(state, article)
   const loaded = articleLoaded(state, article)
   if (loading || loaded) return

   dispatch({ type: LOAD_ARTICLE + REQUEST, article })

   Promise.all([api.get(`/articles/${article}`), loadMenu()(dispatch, getState)])
      .then(([{data}]) => dispatch({ type: LOAD_ARTICLE + SUCCESS, data, article }))
      .catch(error => dispatch({ type: LOAD_ARTICLE + FAILURE, error }))
}


export const loadProducts = url => (dispatch, getState) => {
   const state = getState()
   const loading = productsLoading(state, url)
   const loaded = productsLoaded(state, url)
   if (loading || loaded) return

   const menu = state.menu.loaded
   dispatch({ type: LOAD_PRODUCTS + REQUEST, url })

   Promise.all([api.get(`/products/${url}`), !menu && loadMenu()(dispatch, getState)])
      .then(([{data}]) => dispatch({ type: LOAD_PRODUCTS + SUCCESS, data, url }))
      .catch(error => dispatch({ type: LOAD_PRODUCTS + FAILURE, error, url }))
}


export const loadProductItem = (url, productUrl) => (dispatch, getState) => {
   const state = getState()
   const loading = productItemLoading(state, productUrl)
   const loaded = productItemLoaded(state, productUrl)
   if (loading || loaded) return

   dispatch({ type: LOAD_PRODUCT + REQUEST, productUrl })

   const menu = state.menu.loaded

   Promise.all([api.get(`/product/${url}/${productUrl}`), !menu && loadMenu()(dispatch, getState)])
      .then(([{data}]) => dispatch({ type: LOAD_PRODUCT + SUCCESS, data, productUrl }))
      .catch(error => dispatch({ type: LOAD_PRODUCT + FAILURE, error, productUrl }))
}


export const loadReviews = (url, productUrl, currentSize = 0) => (dispatch, getState) => {
   const state = getState()
   const loading = state.reviews.loading[productUrl]
   if (loading) return

   dispatch({ type: LOAD_REVIEWS + REQUEST, productUrl })

   api.get(`/reviews/${url}/${productUrl}?size=${currentSize}`)
      .then(({data}) => { dispatch({ type: LOAD_REVIEWS + SUCCESS, data, productUrl }) })
      .catch((error) => { dispatch({ type: LOAD_REVIEWS + FAILURE, error }) })
}


export const loadCart = itemsToLoad => (dispatch, getState) => {
   const state = getState()
   if (state.cart.loading) return
   const menu = state.menu.loaded
   if (menu && itemsToLoad.length === 0) return

   dispatch({ type: LOAD_CART + REQUEST })

   Promise.all([itemsToLoad.length === 0 ? null : api.get(`/cart-items?items=${itemsToLoad.join('_')}`), !menu && loadMenu()(dispatch, getState)])
      .then(([result]) => {
         if (result) {
            const {data} = result
            dispatch({ type: LOAD_CART + SUCCESS, data })
         }
         dispatch({ type: LOAD_CART + SUCCESS, data: {} })
      })
      .catch(error => dispatch({ type: LOAD_CART + FAILURE, error }))
}


export const loadSimilarProducts = () => dispatch => {
   dispatch({ type: LOAD_SIMILAR_RPODUCTS + REQUEST })

   api.get('/similar-products')
      .then(({data}) => { dispatch({ type: LOAD_SIMILAR_RPODUCTS + SUCCESS, data }) })
      .catch((error) => {dispatch({ type: LOAD_SIMILAR_RPODUCTS + FAILURE, error }) })
}


export const loadPromoItems = () => (dispatch, getState) => {
   const state = getState()
   const loading = state.promo.loading
   const loaded = state.promo.loaded
   if (loading || loaded) return

   dispatch({ type: LOAD_PROMO_ITEMS + REQUEST })

   const menu = state.menu.loaded

   Promise.all([api.get('/promo-items'), !menu && loadMenu()(dispatch, getState)])
      .then(([{data}]) => dispatch({ type: LOAD_PROMO_ITEMS + SUCCESS, data }))
      .catch(error => dispatch({ type: LOAD_PROMO_ITEMS + FAILURE, error }))
}


export const loadNewItems = () => (dispatch, getState) => {
   const state = getState()
   const loading = state.newItems.loading
   const loaded = state.newItems.loaded
   if (loading || loaded) return

   dispatch({ type: LOAD_NEW_ITEMS + REQUEST })

   const menu = state.menu.loaded

   Promise.all([api.get('/new-items'), !menu && loadMenu()(dispatch, getState)])
      .then(([{data}]) => dispatch({ type: LOAD_NEW_ITEMS + SUCCESS, data }))
      .catch(error => dispatch({ type: LOAD_NEW_ITEMS + FAILURE, error }))
}


export const loadCompareItems = itemsToLoad => (dispatch, getState) => {
   const state = getState()
   if (state.compare.loading) return
   const menu = state.menu.loaded
   if (menu && itemsToLoad.length === 0) return

   dispatch({ type: LOAD_COMPARE_ITEMS + REQUEST })

   Promise.all([itemsToLoad.length === 0 ? null : api.get(`/compare-items?items=${itemsToLoad.join('_')}`), !menu && loadMenu()(dispatch, getState)])
      .then(([result]) => {
         if (result) {
            const {data} = result
            dispatch({ type: LOAD_COMPARE_ITEMS + SUCCESS, data })
         }
         dispatch({ type: LOAD_COMPARE_ITEMS + SUCCESS, data: {} })
      })
      .catch(error => dispatch({ type: LOAD_COMPARE_ITEMS + FAILURE, error }))
}

export const submitOrder = (values) => (dispatch, getState) => {
   const state = getState()
   const loading = state.order.loading
   if (loading) return

   dispatch({ type: SUBMIT_ORDER + REQUEST })

   api.post('/order', values)
      .then(() => { dispatch({ type: SUBMIT_ORDER + SUCCESS }) })
      .catch((error) => {dispatch({ type: SUBMIT_ORDER + FAILURE, error }) })
}


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
const sortCheap = (arr, prd) => arr.sort((a, b) => prd[a]['p'] - prd[b]['p'])
const sortExpensive = (arr, prd) => arr.sort((a, b) => prd[b]['p'] - prd[a]['p'])
const sortRating = (arr, prd) => arr.sort((a, b) => prd[b]['r'] - prd[a]['r'])

const sortProductsByValue = (sortBy, arr, prd) => {
   switch (sortBy.value) {
      case 'cheap': return sortCheap(arr, prd)
      case 'expensive': return sortExpensive(arr, prd)
      case 'rating': return sortRating(arr, prd)
      default: throw new Error('неизвестный парамаетр сортировки')
   }
}

//////////////////////////////////////////////////////////////////////////
export const sortProducts = (sortBy, url) => async (dispatch, getState) => {
   const state = getState()
   const arr = [...state.filters.products[url]]
   const prd = state.products.products[url]

   dispatch({ type: FILTERS_SORT_PRODUCTS_INIT, sortBy })
   dispatch({ type: FILTERS_IS_FILTERING, url })

   const sortedProducts = await sortProductsByValue(sortBy, arr, prd)

   dispatch({ type: FILTERS_IS_FILTERED, sortedProducts, url })
}

//////////////////////////////////////////////////////////////////////////
const filteredProducts = (productsbyCategory, selected, normalizedFilters) => {
   // массив массивов для сортировки:
   const sortArr = Object.keys(selected).reduce((acc, key) => {
      const arr = selected[key].map(item => normalizedFilters[key][item])
      const obj = Object.assign({}, ...arr)
      acc.push(obj)
      return acc
   }, [])

   // сортировка:
   return sortArr.reduce((acc, obj) => {
      return acc.filter(item => item in obj)
   }, productsbyCategory)
}

//////////////////////////////////////////////////////////////////////////
export const filterProducts = (url, search, minmax=null) => (dispatch, getState) => {
   const state = getState()
   const filters = state.filters.filters[url]
   const products = Object.keys(state.products.products[url])
   const normalizedFilters = selectNormalizedFilters(state, url)

   const searchParams = search ? search : new URLSearchParams(state.filters.queryString[url])

   const getSelected = (filters, searchParams) => {
      return filters.reduce((acc, { searchGroup, products }) => {
         const group = searchParams.get(searchGroup)
         if (group) {
            const groupItems = group.split('_').filter(item => item in products)
            if (groupItems.length > 0) acc[searchGroup] = groupItems
         }
         return acc
      }, {})
   }

   const selected = getSelected(filters, searchParams);

   // if range triggered, minmax goes from range(else from stored) || stored minmax || option 3 - only initialization
   const newMinMax = minmax ? minmax : filterStoredMinMax(state, url) ? filterStoredMinMax(state, url) : filtersMinMax(state, url)
   dispatch({ type: FILTERS_IS_FILTERING, url, newMinMax })


   Promise.resolve(products)
   .then((products) => {
      // checkbox:
      const isCheckboxSelected = Object.keys(selected).length
      const filteredByCheckbox = (isCheckboxSelected) ? filteredProducts(products, selected, normalizedFilters) : products

      // range-slider:
      const [ MIN, MAX ] = newMinMax
      const filteredByPrice = filteredByCheckbox.reduce((result, id) => {
         const price = state.products.products[url][id].p
         if (price >= MIN && price <= MAX) result.push(id)
         return result
      }, [])

      // select:
      const sortBy = state.filters.sortBy
      const prd = state.products.products[url]
      const sortedProducts = sortProductsByValue(sortBy, filteredByPrice, prd)

      // attn: searchParams stringified on purpose, so in products it can be checked if its empty string(do not change)
      dispatch({ type: FILTERS_IS_FILTERED, sortedProducts, url, queryString: searchParams.toString() })
   })
}