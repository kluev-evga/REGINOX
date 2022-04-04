const { firstNameMale, firstNameFemale, lastName } = require('./db/names');
const reviews = require('./db/reviews');




const reply = (res, body, status = 200) => res.status(status).json(body);
////////////////////////////////////////////////////////////////////////

const randomInteger = (min, max) => Number((min + Math.random() * (max - min)).toFixed(2));
const shuffle = (arr) => [...arr].sort(() => Math.round(Math.random()) - 0.5);
const randomDate = (start = new Date(2015, 0, 1), end = new Date()) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
const randomBoolean = (trueProbability = 0.5) => Math.random() < trueProbability;//0.9 === 90% probability of true

const reviewsSlice = (url, arr = reviews) => {// random reviews slice
    const data = shuffle(arr[url]);
    const count = Math.round(randomInteger(0, 30));
    const start = Math.round(randomInteger(0, arr.length - count));
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
          const promo = randomBoolean(0.9);
          const newItem = randomBoolean(0.9);
          const discount = promo ? Math.round(randomInteger(1, 15)) : 0;
          const discountedPrice = Math.round(item.price * (100 - discount) / 100);

          const priceR = parseInt(randomInteger(0, 100));
          const qualityR = parseInt(randomInteger(0, 100));
          const appearanceR = parseInt(randomInteger(0, 100));
          const ratings = [priceR, qualityR, appearanceR];
          const r = Number(((priceR + qualityR + appearanceR) / 60).toFixed(2));

          return {...item, promo, discount, discountedPrice, newItem, r, ratings}
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
    productUrl: translit(title.split(',').slice(0,1).join(' ')),
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
          const productUrl = translit(item.title.split(',').slice(0,1).join(' '));
          acc[productUrl] = item;
          return acc;
      }, {});

      reviewsdata[url] = Object.keys(productdata[url]).reduce( (acc, productUrl) => {
        acc[productUrl] = reviewsSlice(url).map(text => ({name: getName(), ...getDate(), text}));
        return acc;
      }, {})
  };
  return {productdata, reviewsdata};
}
////////////////////////////////////////////////////////////////////////

const getHome = (home, productsdata) => {
  const rnd = Math.floor(randomInteger(8, productsdata['sinks'].length));
  home.popularProducts = productsdata['sinks'].slice(rnd - 8, rnd);
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

        // --------------------------------------- categories:
        const categories = filter[0];
        categories.products = categories.filters.reduce( (acc, item) => {// cоздаем ветку  products : { all: [], anycategory: []}
          acc[item.url] = [];
          return acc;
        }, {});

        const title = categories.title;
        const match = categories.filters.reduce( (acc, item) => {// объект для перебора по продуктам ниже (только для категорий)
          acc[item.title] = item.url;
          return acc;
        }, {});

        products.forEach( ({id, specs}) => {// наполняем ветку products массивам id-шников продуктов
            categories.products.all.push(id);
            categories.products[match[specs[title]]].push(id);
        });

        categories.filters.forEach(item => item.count = categories.products[item.url].length);// считаем количество в массивах и фигачим count в фильтры

        // --------------------------------------- все остальные ветки фильтров(помимо категорий, т.к. со всторого айтема фильтров):
        filter.slice(1).forEach( item => {
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

module.exports = {
    reply,
    getProduct,
    getProductsData,
    getProductData,
    getHome,
    getFilters
};