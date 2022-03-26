const reply = (res, body, status = 200) => res.status(status).json(body);
////////////////////////////////////////////////////////////////////////

const getMenu = (links, categories) => ({links, categories});
////////////////////////////////////////////////////////////////////////

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max - min);
  return Number(rand.toFixed(2));
};

const translit = (word) => {
	var converter = {
		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya'
	};
 
	word = word.toLowerCase();
  
	var answer = '';
	for (var i = 0; i < word.length; ++i ) {
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

const createProductItem = (item) => {
    const id = item.id;
    const promo = randomInteger(0, 10) > 8 ? true : false;
    const newItem = randomInteger(0, 10) > 8 ? true : false;
    const title = item.title;
    const img = item.images[0];
    const alt = item.title;
    const productUrl = translit(item.title.split(',').slice(0,1).join(' '));
    const category = 'integrated';//////////////////////////////////////////////////  нужно получать категории
    const p = item.price;
    const r = randomInteger(0, 5);
    const reviewers = Math.round(randomInteger(0, 125));
    return { id, promo, newItem, title, img, alt, productUrl, category, p, r, reviewers };
};

const getProducts = (productItems) => {
    const productsdata = {};
    for (let key in productItems) {
      productsdata[key] = productItems[key].map(item => createProductItem(item));
    };
    return productsdata;
    // Тест на уникальность id:
    // const uniquinessTest = (data) => {
    //   const resObj = {};
    //   data.forEach(item => {
    //     if (resObj[item.id]) return console.log('item repited found: ', item.id);
    //     resObj[item.id] = true;
    //   });
    // };
    // console.log(uniquinessTest(data));
};
////////////////////////////////////////////////////////////////////////

const getHome = (home, popularProducts) => {
  home.popularProducts = popularProducts;
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

    for (let key in filters) {
        const products = getProductsData(productItems[key]);
        const filter = filters[key];

        // --------------------------------------- categories:
        const categories = filter[0];
        categories.products = categories.filters.reduce( (acc, item) => {
          acc[item.url] = [];
          return acc;
        }, {});

        const title = categories.title;
        const match = categories.filters.reduce( (acc, item) => {
          acc[item.title] = item.url;
          return acc;
        }, {});

        products.forEach( ({id, specs}) => {
            categories.products.all.push(id);
            categories.products[match[specs[title]]].push(id);
        });

        categories.filters.forEach(item => item.count = categories.products[item.url].length);

        // --------------------------------------- other:
        filter.slice(1).forEach(item => {
            const {title, filters} = item;
            const match = filters.reduce( (acc, item) => {
              acc[item.title] = item.search;
              return acc;
            }, {});

            item.products = filters.reduce((acc, {search}) => {
              acc[search] = {};
              return acc;
            }, {});

            products.forEach( ({id, specs}) => {
              const res = match[specs[title]];
              if (!item.products[res]) console.log('У продукта, id: ', id, 'Не найдено значение для', title);
              else item.products[res][id] = true;
            });

            // добавляет count для фильтров:
            filters.forEach( fltr => fltr.count = Object.keys(item.products[fltr.search]).length);
        });
    };
    return filters;
};

module.exports = {
    reply,
    getProducts,
    getHome,
    getMenu,
    getFilters
};