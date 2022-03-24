const router = require('express').Router();
const { menu, home, catalogs, sertificates, brands, articles, articlesItems } = require('./mock');
const { filters, products, matchProducts } = require('./mock-products');
const { reply, getById } = require('./utils');

router.get('/menu', (req, res, next) => {reply(res, menu)});
router.get('/home', (req, res, next) => {reply(res, home)});
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


router.get('/products/:group?', (req, res, next) => {
  const {id} = req.query;
  const productsGroup = req.params.group;
  if (!productsGroup || !matchProducts[productsGroup]) {
    res.status(404).send();
  } else {
    const id = matchProducts[productsGroup];
    const composedProducts = {products: products[id], filters: filters[id]};
    reply(res, composedProducts);
  }
});

module.exports = router;
// router.get('/products/:kind/:category?', (req, res, next) => {
//   console.log(req.params.kind);
//   console.log(req.params.category);
//   const {id} = req.query;
//   reply(res, products[id]);
// });