const {promo, newItems} = require('./db/promo-new');
const reviews = require('./db/reviews');
const { v4: uuidv4 } = require('uuid')
const {
   randomInteger,
   shuffleArry,
   randomDate,
   randomBoolean,
   randomName,
   translit,
} = require('./utils')


const getReviews = (url, count) => {
   if (count === 0) return

   const date = randomDate().toLocaleDateString('ru-RU').replace(/\./g, '/')
   const shuffledReviews = shuffleArry(reviews[url])
   const start = Math.round(randomInteger(0, (shuffledReviews.length - count)))
   const end = start + count
   const reviewsSlice = shuffledReviews.slice(start, end)
   const reviewsArray = reviewsSlice.map(text => ({name: randomName(), date, text, confirmed: randomBoolean(0.4), id: uuidv4()}) )

   return reviewsArray
}

////////////////////////////////////////////////////////////////////////
// ПРОДУКТ:
const getProduct = (productItems) => {
   const products = {};
   for (let url in productItems) {
      products[url] = productItems[url].map( item => {
         const promo = randomBoolean(0.3);
         const newItem = randomBoolean(0.2);
         const discount = promo ? Math.round(randomInteger(1, 15)) : 0;
         const discountedPrice = Math.round(item.price * (100 - discount) / 100);
         const hasRating = randomBoolean(0.7);
         const reviewsCount = hasRating ?  Math.round(randomInteger(0, 30)) : 0;
         const priceR = parseInt(randomInteger(0, 100));
         const qualityR = parseInt(randomInteger(0, 100));
         const appearanceR = parseInt(randomInteger(0, 100));
         const ratings = hasRating ? [priceR, qualityR, appearanceR]: [0, 0, 0,];
         const r = hasRating ? Number(((priceR + qualityR + appearanceR) / 60).toFixed(2)) : 0;

         return {...item, promo, discount, discountedPrice, newItem, r, ratings, reviewsCount, url}
      });
   };

   // console.log(products);
   return products;
};

////////////////////////////////////////////////////////////////////////
// карточки товара:
const createProductItem = ({id, promo, newItem, title, images, price, r, reviewsCount}, url) => ({
   id,
   promo,
   newItem,
   title,
   img: images[0],
   alt: title,
   url,
   productUrl: translit(title.split(',').slice(0,1).join(' ')) + '-' + id,
   p: price,
   r,
   reviewers: reviewsCount
});

const getProductsData = (productItems) => {
   const productsdata = {};
   for (let url in productItems) {
         productsdata[url] = productItems[url].map(item => createProductItem(item, url));

         // Тест на уникальность id:
         const summary = {};
         productsdata[url].forEach( ({id}) => {
         if (summary[id]) console.log('Елемент с id:', id, ' повторяется');
         summary[id] = true;
         });
   };
   return productsdata;
};

////////////////////////////////////////////////////////////////////////
const getProductData = (productItems) => {
   const productdata = {};
   const reviewsdata = {};

   for (let url in productItems) {
      productdata[url] = productItems[url].reduce( (acc, item) => {
         const productUrl = translit(item.title.split(',').slice(0,1).join(' ')) + '-' + item.id;
         acc[productUrl] = item;
         return acc;
      }, {});

      reviewsdata[url] = Object.keys(productdata[url]).reduce( (acc, productUrl) => {
         const reviewscount = productdata[url][productUrl].reviewsCount
         const reviews = getReviews(url, reviewscount);
         acc[productUrl] = reviews;
         return acc;
      }, {})
   };
   return {productdata, reviewsdata};
}

////////////////////////////////////////////////////////////////////////
const getProductsItemData = data =>
   data.map( item =>
         ({ id: item.id,
            specs : item.specs.reduce((acc, item) =>
               {acc[item.dt] = item.dd;
               return acc
               }, {})
         })
);

const getFilters = (filtersObj, productItems) => {
   const filters = {...filtersObj};


   for (let url in filters) {
      const products = getProductsItemData(productItems[url]);// выбираем группу продуктов по url и трансформируем продукты в нужный формат(used for filters only)
      const filter = filters[url];// выбираем нужную группу фильтров с которой работаем


      filter.forEach( item => {
         const {title, filters} = item;
         const match = filters.reduce( (acc, item) => {// создаем нужный объект match для перебора по продуктам(отдельно для каждого фильтра)
            acc[item.title] = item.search;
            return acc;
         }, {});

         item.products = filters.reduce((acc, {search}) => {// создаем ветку products в фильтре  products : { smthg: {}, smthgElse: {}}
            acc[search] = {};
            return acc;
         }, {});

         products.forEach( ({id, specs}) => {// перебираем продукты и добавляем id-шник в нужную ветку  products : { smthg: {id: true, id: true}, smthgElse: {id: true}}
            const res = match[specs[title]];
            if (!item.products[res]) console.log('У продукта, id: ', id, 'Не найдено значение для', title);
            else item.products[res][id] = true;
         });

         // добавляет count для фильтров:
         filters.forEach( fltr => fltr.count = Object.keys(item.products[fltr.search]).length);// считаем все и пишем в counts
      });
   };

   return filters;
};

////////////////////////////////////////////////////////////////////////
const getCardsData = (productsdata) => {
   const cartdata = {}
   const promoObj = {};
   const newitemsObj = {};
   for (let url in productsdata) {
      for (productUrl in productsdata[url]) {
         const {id, title, price, discountedPrice, discount, images, promo, newItem} = productsdata[url][productUrl];
         const alt = 'product item';

         const img = images[0];
         if (cartdata[id]) console.log('Повторяется лемент с id:', id);
         const item = {id, title, p:price, discountedPrice, discount, img, alt, url, productUrl, promo, newItem};

         cartdata[id] = item;
         if (!promoObj[url]) id && (promoObj[url] = []);
         if (!newitemsObj[url]) id && (newitemsObj[url] = []);
         promo && promoObj[url].push(item);
         newItem && newitemsObj[url].push(item);
      }
   }

   const promodata = [];
   const newitemsdata = [];

   for (let key in promoObj) {
   const item = {title: promo[key].title, text: promo[key].text, items: promoObj[key] };
   promodata.push(item);
   };

   for (let key in newitemsObj) {
   const item = {title: newItems[key].title, text: newItems[key].text, items: newitemsObj[key] };
   newitemsdata.push(item);
   };

   return {cartdata, promodata, newitemsdata};
}

////////////////////////////////////////////////////////////////////////
const getURLMatcher = (productdata) => {
   const matcherId = {}
   for (let url in productdata) {
      for (let productUrl in productdata[url] ) {
         matcherId[productdata[url][productUrl].id] = {url, productUrl}
         
      }
   }
   return matcherId
}

module.exports = {
   getProduct,
   getProductsData,
   getProductData,
   getFilters,
   getCardsData,
   getURLMatcher
}