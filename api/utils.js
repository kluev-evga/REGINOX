const reply = (res, body, status = 200) => res.status(status).json(body);
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

const getProducts = (productItems) => {
    const result = productItems.map((item)=> {
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

        return {
          id,
          promo,
          newItem,
          title,
          img,
          alt,
          productUrl,
          category,
          p,
          r,
          reviewers
        };

        // Тест на уникальность id:
        // const uniquinessTest = (data) => {
        //   const resObj = {};
        //   data.forEach(item => {
        //     if (resObj[item.id]) return console.log('item repited found: ', item.id);
        //     resObj[item.id] = true;
        //   });
        // };
        // console.log(uniquinessTest(data));
    });

    return  {'0015bfc8-c63a-45f7-ad67-4d16dc608bf9': result};
};
////////////////////////////////////////////////////////////////////////

const getHome = (home, popularProducts) => {
  home.popularProducts = popularProducts;
  return home;
};
////////////////////////////////////////////////////////////////////////

const getMenu = (rootIds, menu, categories) => {
  // apply ids to menu:
  menu.links.forEach(item => item.id = rootIds[item.url]);
  for (key in categories) categories[rootIds[key]] = categories[key];
  menu.categories = categories;
  return menu;
};
////////////////////////////////////////////////////////////////////////

const getFilters = (rootIds, filters) => {
  const filter = filters['0015bfc8-c63a-45f7-ad67-4d16dc608bf9'];
  const categories = filter[0].filters;
// specs === key : val





  return 'menu';
};

module.exports = {
  reply,
  getProducts,
  getHome,
  getMenu,
  getFilters
};