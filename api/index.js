const router = require('express').Router()
const { getFilters, getProduct, getProductsData, getProductData, getCardsData, getHome, getSimilarProducts, shuffleData, getCompareData, reply } = require('./utils')

const home = require('./db/home')
const links = require('./db/links')
const brands = require('./db/brands')
const filters = require('./db/filters')
const articles = require('./db/articles')
const catalogs = require('./db/catalogs')
const categories = require('./db/categories')
const product = require('./db/PRODUCT')
const sertificates = require('./db/sertificates')
const articlesItems = require('./db/articlesItems')

const menudata = { links, categories }
const filtersdata = getFilters(filters, product)
const productItems = getProduct(product)
const productsdata = getProductsData(productItems)
const { productdata, reviewsdata } = getProductData(productItems)
const { cartdata, promodata, newitemsdata } = getCardsData(productdata)
const shuffledProducts = shuffleData(cartdata)
const comparedata = getCompareData(productdata)


router.get('/api/menu', (req, res, next) => { reply(res, menudata) })
router.get('/api/sertificates', (req, res, next) => { reply(res, sertificates) })
router.get('/api/brands', (req, res, next) => { reply(res, brands)})
router.get('/api/promo-items', (req, res, next) => { reply(res, promodata) })
router.get('/api/new-items', (req, res, next) => { reply(res, newitemsdata) })
router.get('/api/home', (req, res, next) => {
   const homedata = getHome(home, shuffledProducts)
   reply(res, homedata)
})

router.get('/api/catalogs', (req, res, next) => {
   const { size, current } = req.query
   const catalogsSlice = catalogs.slice(current, size)
   reply(res, { catalogs: catalogsSlice, total: catalogs.length })
})

router.get('/api/articles', (req, res, next) => {
   const { page } = req.query
   const start = 5 * Number(page) - 5
   const end = 5 * Number(page)
   const articlesSlice = articles.slice(start, end)
   reply(res, { entities: articlesSlice, total: articles.length })
})

router.get('/api/articles/:article', (req, res, next) => {
   const article = req.params.article
   if (!articlesItems[article]) return reply(res, 'не найдено', 404);
   reply(res, articlesItems[article])
})

router.get('/api/products/:url', (req, res, next) => {
   const url = req.params.url
   if (!productsdata[url]) return reply(res, 'не найдено', 404);
   reply(res, { products: productsdata[url], filters: filtersdata[url] })
})

router.get('/api/product/:url/:productUrl', (req, res, next) => {
   const { url, productUrl } = req.params
   if (!productdata[url][productUrl]) return reply(res, 'не найдено', 404);
   reply(res, productdata[url][productUrl])
})

router.get('/api/reviews/:url/:productUrl', (req, res, next) => {
   const { url, productUrl } = req.params
   const { size } = req.query
   const current = Number(size)
   if (!reviewsdata[url][productUrl]) return reply(res, 'не найдено', 404);
   const entities = reviewsdata[url][productUrl].slice(current, current + 5)
   reply(res, entities)
})

router.get('/api/cart-items', (req, res, next) => {
   const { items } = req.query
   const itemsArr = items.split('_')
   const data = itemsArr.reduce((acc, id) => {
      acc[id] = cartdata[id]
      return acc
   }, {})
   reply(res, data)
})

router.get('/api/similar-products', (req, res, next) => {
   const products = getSimilarProducts(shuffledProducts)
   reply(res, products)
})

router.get('/api/compare-items', (req, res, next) => {
   const { items } = req.query
   const itemsArr = items.split('_')
   const data = itemsArr.reduce((acc, id) => {
      acc[comparedata[id].productUrl] = comparedata[id]
      return acc
   }, {})
   reply(res, data)
})

router.post('/api/order', function (req, res, next) {
  try {
    const orderData = req.body
      console.log(orderData);
      return reply(res, 'ok');
  } catch {
    return reply(res, 'wrong data', 400);
  }
})

module.exports = router