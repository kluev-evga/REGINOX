const router = require('express').Router();
const { reply, getProducts, getHome, getMenu, getFilters } = require('./utils');

const menu = require('./db/menu');
const home = require('./db/home');
const brands = require('./db/brands');
const rootIds = require('./db/rootIds');
const filters = require('./db/filters');
const articles = require('./db/articles');
const catalogs = require('./db/catalogs');
const categories = require('./db/categories');
const productItems = require('./db/PRODUCTS');
const sertificates = require('./db/sertificates');
const articlesItems = require('./db/articlesItems');
const popularProducts = require('./db/pupular-products');


const productsdata = getProducts(productItems); //////////// attn - проверить!!!!!!!!! 
const homedata = getHome(home, popularProducts);
const menudata = getMenu(rootIds, menu, categories);
const filtersdata = getFilters(rootIds, filters);






////////////////////////////////////////////////////////////////////////
router.get('/menu', (req, res, next) => {reply(res, menu)});
router.get('/home', (req, res, next) => {reply(res, homedata)});
router.get('/sertificates', (req, res, next) => {reply(res, sertificates)});
router.get('/brands', (req, res, next) => {reply(res, brands)});


router.get('/catalogs', (req, res, next) => {
  const {size, current} = req.query;
  const total = catalogs.length;
  const arr = catalogs.slice(current, size);
  composedCatalogs = {catalogs:arr, total};
  reply(res, composedCatalogs);
});


router.get('/articles', (req, res, next) => {
  const {page} = req.query;
  const start = 5 * Number(page) - 5;
  const end = 5 * Number(page);
  const arr = articles.slice(start, end);
  const total = articles.length;
  composedArticles = {entities:arr, total};
  reply(res, composedArticles);
});


router.get('/articles/:article', (req, res, next) => {
  const article = req.params.article;
  if (!articlesItems[article]) {
    res.status(404).send();
  } else {
    const response = articlesItems[article]
    reply(res, response);
  }
});


router.get('/filters', (req, res, next) => {
  const {id} = req.query;
  reply(res, filters[id]);
});


// match url to id { {sinks: id}, {taps: id}} - создается массив соответствия id --> url
// const matchProducts = menu.links.reduce((acc, item) => {
//   acc[item.url] = item.id;
//   return acc;
// },{});
//----------------
router.get('/products/:url?', (req, res, next) => {
  const url = req.params.url;
  if (!url || !rootIds[url]) {
    res.status(404).send();
  } else {
    const id = rootIds[url];
    const composedProducts = {products: productsdata[id], filters: filters[id]};
    reply(res, composedProducts);
  }
});

module.exports = router;