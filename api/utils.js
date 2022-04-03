const reply = (res, body, status = 200) => res.status(status).json(body);
////////////////////////////////////////////////////////////////////////

const getMenu = (links, categories) => ({links, categories});
////////////////////////////////////////////////////////////////////////

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max - min);
  return Number(rand.toFixed(2));
};

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

const createProductPromoIformation = (productItems) => {
  const products = {};
    for (let url in productItems) {
        products[url] = productItems[url].map( item => {
          const promo = randomInteger(0, 10) > 5 ? true : false;
          const newItem = randomInteger(0, 10) > 5 ? true : false;
          const discount = promo ? Math.round(randomInteger(1, 15)) : 0;
          const discountedPrice = Math.round(Number(item.price.replace(/\s/g, '')) * (100 - discount) / 100);
          return {...item, promo, discount, discountedPrice, newItem}
        });
    };
    return products;
};
////////////////////////////////////////////////////////////////////////

const createProductItem = ({id, promo, newItem, title, images, price}, url) => ({
    id,
    promo,
    newItem,
    title,
    img: images[0],
    alt: title,
    url,
    productUrl: translit(title.split(',').slice(0,1).join(' ')),
    price,
    p: Number(price.replace(/\s/g, '')),
    r: randomInteger(0, 5),
    reviewers: Math.round(randomInteger(0, 125)),
});

const getProducts = (productItems) => {
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
  for (let url in productItems) {
      productdata[url] = productItems[url].reduce( (acc, item) => {
          const productUrl = translit(item.title.split(',').slice(0,1).join(' '));
          acc[productUrl] = item;
          return acc;
      }, {});
  };
  return productdata;
}
////////////////////////////////////////////////////////////////////////

const getHome = (home, productsdata) => {
  const rnd = Math.floor(randomInteger(8, productsdata['sinks'].length));
  home.popularProducts = productsdata['sinks'].slice(rnd - 8, rnd);
  return home;
};
////////////////////////////////////////////////////////////////////////

const getProductsData = data =>
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
        const products = getProductsData(productItems[url]);// выбираем группу продуктов по url и трансформируем продукты в нужный формат(used for filters only)
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
    createProductPromoIformation,
    getProducts,
    getProductData,
    getHome,
    getMenu,
    getFilters
};