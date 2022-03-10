const router = require('express').Router();
const { catalog, home, catalogs, sertificates, brands, articles } = require('./mock');
const { reply, getById } = require('./utils');

router.get('/catalog', (req, res, next) => {
  reply(res, catalog);
});

router.get('/home', (req, res, next) => {
  reply(res, home);
});

router.get('/catalogs', (req, res, next) => {
  const {size, current} = req.query;
  const total = catalogs.length;
  const arr = catalogs.slice(current, size);
  composedCatalogs = {catalogs:arr, total};
  reply(res, composedCatalogs);
});

router.get('/sertificates', (req, res, next) => {
  reply(res, sertificates);
});

router.get('/brands', (req, res, next) => {
  reply(res, brands);
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

// router.get('/products', (req, res, next) => {
//   const { id } = req.query;
//   let result = products;
//   if (id) {
//     const restaurant = getById(restaurants)(id);
//     if (restaurant) {
//       result = restaurant.menu.map(getById(result));
//     }
//   }
//   reply(res, result);
// });

// router.get('/reviews', (req, res, next) => {
//   const { id } = req.query;
//   let result = reviews;
//   if (id) {
//     const restaurant = getById(restaurants)(id);
//     if (restaurant) {
//       result = restaurant.reviews.map(getById(result));
//     }
//   }
//   reply(res, result);
// });

// router.get('/users', (req, res, next) => {
//   reply(res, users);
// });

// const min = (m) => `you ordered for $${m}, but the min order amount is $50`;
// const max = (m) => `you ordered for $${m}, but the max order amount is $200`;

// router.post('/order', function (req, res, next) {
//   try {
//     const total = req.body
//       .map((it) => products.find((p) => p.id === it.id).price * it.amount)
//       .reduce((acc, next) => acc + next, 0);

//     if (total < 50) return reply(res, min(total), 3000, 400);
//     if (total > 200) return reply(res, max(total), 3000, 400);
//     return reply(res, 'ok', 3000);
//   } catch {
//     return reply(res, 'wrong data', 1000, 400);
//   }
// });

module.exports = router;