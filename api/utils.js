const { firstNameMale, firstNameFemale, lastName } = require('./db/names');
const {promo, newItems} = require('./db/promo-new');
const reviews = require('./db/reviews');
const { v4: uuidv4 } = require('uuid')




const reply = (res, body, status = 200) => res.status(status).json(body);
////////////////////////////////////////////////////////////////////////

const randomInteger = (min, max) => Number((min + Math.random() * (max - min)).toFixed(2));
const shuffle = (arr) => [...arr].sort(() => Math.round(Math.random()) - 0.5);
const randomDate = (start = new Date(2018, 0, 1), end = new Date()) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
const randomBoolean = (trueProbability = 0.5) => Math.random() < trueProbability;//0.9 === 90% probability of true

const reviewsSlice = (url, count, arr = reviews) => {// random reviews slice
      const data = shuffle(arr[url]);
      const start = Math.round(randomInteger(0, (data.length - count)));
      const end = start + count;
      return data.slice(start, end);
};

const getDate = () => {// random date --- {date, dateTime}
    const d = randomDate();
    const date = d.toLocaleDateString('ru-RU').replace(/\./g, '/');
    const dateTime = d.toLocaleDateString('ru-RU').split('.').reverse().join('-');
    return { date, dateTime };
}

const getName = () => {// random name
  const male = randomBoolean();
  const firstName = male ? firstNameMale[Math.round(randomInteger(0, 99))] : firstNameFemale[Math.round(randomInteger(0, 99))];
  const withLast = randomBoolean();
  const last = withLast ? lastName[Math.round(randomInteger(0, 99))] : '';
  const name = firstName + ' ' + last + (!withLast || male ? '': 'a');
  return name;
}

const getReviews = (url, count) => reviewsSlice(url, count).map(text =>
  ({name: getName(), ...getDate(), text, confirmed: randomBoolean(0.4), id: uuidv4()}));

const translit = (word) => {
	const converter = {
		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya'
	};
 
	word = word.toLowerCase();
  
	let answer = '';
	for (let i = 0; i < word.length; ++i ) {
		if (converter[word[i]] == undefined){
			answer += word[i];
		} else {
			answer += converter[word[i]];
		}
	}

	answer = answer.replace(/[^-0-9a-z]/g, '-');
	answer = answer.replace(/[-]+/g, '-');
	answer = answer.replace(/^\-|-$/g, '');
	return answer;
};
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

          return {...item, promo, discount, discountedPrice, newItem, r, ratings, reviewsCount}
        });
    };
    return products;
};
////////////////////////////////////////////////////////////////////////

// карточки товара:
const createProductItem = ({id, promo, newItem, title, images, price, r}, url) => ({
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
    reviewers: Math.round(randomInteger(0, 125)),
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
        const count = productdata[url][productUrl].reviewsCount;
        const reviews = !!count ? getReviews(url, count) : [];
        acc[productUrl] = reviews;
        return acc;
      }, {})
  };
  return {productdata, reviewsdata};
}
////////////////////////////////////////////////////////////////////////

const getHome = (home, shuffledProducts) => {
  const rnd = Math.floor(randomInteger(8, shuffledProducts.length));
  home.popularProducts = shuffledProducts.slice(rnd - 8, rnd);
  return home;
};
////////////////////////////////////////////////////////////////////////

const getProductsItemData = data =>
    data.map( item =>
        ({  id: item.id,
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

const shuffleData = (data) => {
  const dataArr = [];
  for (let key in data) {
    dataArr.push(data[key]);    
  }
  return shuffle(dataArr);
}
////////////////////////////////////////////////////////////////////////

const getSimilarProducts = (shuffledProducts) => {
  const rnd = Math.floor(randomInteger(15, shuffledProducts.length));
  return shuffledProducts.slice(rnd - 15, rnd);
}
////////////////////////////////////////////////////////////////////////

const getCompareData = (productdata) => {
  const comparedata = {};
  for (let url in productdata) {
      for (let productUrl in productdata[url] ) {
          const item = {...productdata[url][productUrl], productUrl, url};
          comparedata[item.id] = item;
      }
  }
  return comparedata;
}


module.exports = {
    reply,
    getProduct,
    getProductsData,
    getProductData,
    getHome,
    getFilters,
    getCardsData,
    getSimilarProducts,
    shuffleData,
    getCompareData,
};