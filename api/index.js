const router = require('express').Router();
const { reply, getProduct, getProductsData, getProductData, getHome, getFilters } = require('./utils');


const home = require('./db/home');
const links = require('./db/links');
const brands = require('./db/brands');
const reviews = require('./db/reviews');
const filters = require('./db/filters');
const articles = require('./db/articles');
const catalogs = require('./db/catalogs');
const categories = require('./db/categories');
const product = require('./db/PRODUCT');
const sertificates = require('./db/sertificates');
const articlesItems = require('./db/articlesItems');



const menudata = {links, categories};
const filtersdata = getFilters(filters, product);

const productItems = getProduct(product);
const productsdata = getProductsData(productItems);
const {productdata, reviewsdata} = getProductData(productItems);




router.get('/menu', (req, res, next) => {reply(res, menudata)});
router.get('/sertificates', (req, res, next) => {reply(res, sertificates)});
router.get('/brands', (req, res, next) => {reply(res, brands)});


router.get('/home', (req, res, next) => {
  const homedata = getHome(home, productsdata);
  reply(res, homedata);
});


router.get('/catalogs', (req, res, next) => {
  const {size, current} = req.query;
  const catalogsSlice = catalogs.slice(current, size);
  reply(res, {catalogs:catalogsSlice, total: catalogs.length});
});


router.get('/articles', (req, res, next) => {
  const {page} = req.query;
  const start = 5 * Number(page) - 5;
  const end = 5 * Number(page);
  const articlesSlice = articles.slice(start, end);
  reply(res, {entities: articlesSlice, total: articles.length});
});


router.get('/articles/:article', (req, res, next) => {
    const article = req.params.article;
    if (!articlesItems[article]) return res.status(404).send();
    reply(res, articlesItems[article]);
});


router.get('/products/:url', (req, res, next) => {
    const url = req.params.url;
    if (!productsdata[url]) return res.status(404).send();
    reply(res, {products: productsdata[url], filters: filtersdata[url]});
});


router.get('/product/:url/:productUrl', (req, res, next) => {
    const {url, productUrl} = req.params;
    if (!productdata[url][productUrl]) return res.status(404).send();
    reply(res, productdata[url][productUrl]);
});

router.get('/reviews/:url/:productUrl', (req, res, next) => {
    const {url, productUrl} = req.params;
    if (!reviewsdata[url][productUrl]) return res.status(404).send();
    reply(res, {entities: reviewsdata[url][productUrl], done: true});
});

module.exports = router;