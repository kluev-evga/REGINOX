const normalizedFilters = {
    '0015bfc8-c63a-45f7-ad67-4d16dc608bf9': [
        {
            'name': 'Материал',
            'searchGroup': 'material',
            'filters': [
                {name: 'нержавеющая сталь', count: '20', search:'stainless-steel'},
                {name: 'гранит', count: '20', search:'granite'},
                {name: 'PVD-покрытие (серия Miami)', count: '20',  search:'pvd'},
                {name: 'окрашенные (серия Regi Color)', count: '20', search: 'painted'},
                {name: 'керамика', count: '20', search: 'porcelain'}
                ]
        },
        {
            'name': 'Метод установки',
            'searchGroup': 'instalation',
            'filters': [
                {name: 'врезной', count: '20', search:'integrated'},
                {name: 'подстольный', count: '20', search:'under'},
                {name: 'вровень со столешницей', count: '20',  search:'flat'},
                ]
        },
        {
            'name': 'Форма',
            'searchGroup': 'shape',
            'filters': [
                {name: 'круглая', count: '20', search:'round'},
                {name: 'квадратная', count: '20', search:'square'},
                {name: 'прямоугольная', count: '20', search:'rectangular'},
                {name: 'овальная', count: '20', search:'oval'},
                {name: 'двойная', count: '20', search:'double'},
            ]
        },
        {
            'name': 'Цвет',
            'searchGroup': 'color',
            'filters': [
                {name: 'полированная', count: '20', search:'poished'},
                {name: 'матовая', count: '20', search:'matte'},
                {name: 'текстурированная', count: '20', search:'textured'},
                {name: 'медь', count: '20', search:'cupper'},
                {name: 'золото', count: '20', search:'gold'},
                {name: 'белый', count: '20', search:'white'},
                {name: 'бежевый', count: '20', search:'beige'},
                {name: 'серый', count: '20', search:'gray'},
                {name: 'черный', count: '20', search:'black'},
                {name: 'коричневый', count: '20', search:'brown'},
            ]
        },
    ],
};


const normalizedProducts = {
    '0015bfc8-c63a-45f7-ad67-4d16dc608bf9': [
        {
        id: '1',
        promo: true,
        new: true,
        name: 'Amsterdam 25 Dark chocolate',
        img: '/assets/products/product_1.webp',
        alt: 'asdf',
        url: 'amsterdam-25-dark-chocolate',

        category: 'stainless-steel',
        'id....': 'размер 300',
        'id': 'oвал',
        price: '9950',
        size: '300',
        shape: 'round',
        color: 'white',
        rating: '5',
        },
        {
            id: '2',
            name: 'Amsterdam 25 Dark chocolate',
            img: '/assets/products/product_2.webp',
            alt: 'asdf',
            url: 'amsterdam-25-dark-chocolate',

            category: 'stainless-steel',
            price: '9950',
            size: '300',
            shape: 'round',
            color: 'white',
            rating: '5',
        },
        {
            id: '3',
            name: 'Amsterdam 25 Dark chocolate',
            img: '/assets/products/product_3.webp',
            alt: 'asdf',
            price: '9950',
            url: 'amsterdam-25-dark-chocolate',

            category: 'stainless-steel',
            size: '300',
            shape: 'round',
            color: 'white',
            rating: '5',
        },
        {
            id: '4',
            name: 'Amsterdam 25 Dark chocolate',
            img: '/assets/products/product_4.webp',
            alt: 'asdf',
            price: '9950',
            url: 'amsterdam-25-dark-chocolate',

            category: 'stainless-steel',
            size: '300',
            shape: 'round',
            color: 'white',
            rating: '5',
        },
        {
            id: '5',
            name: 'Amsterdam 25 Dark chocolate',
            img: '/assets/products/product_5.webp',
            alt: 'asdf',
            price: '9950',
            url: 'amsterdam-25-dark-chocolate',

            category: 'coated',
            size: '300',
            shape: 'round',
            color: 'white',
            rating: '5',
        },
        {
            id: '6',
            name: 'Amsterdam 25 Dark chocolate',
            img: '/assets/products/product_6.webp',
            alt: 'asdf',
            url: 'amsterdam-25-dark-chocolate',

            category: 'coated',
            price: '9950',
            size: '400',
            shape: 'round',
            color: 'white',
            rating: '5',
        },
    ],

};

module.exports = {
  filters: normalizedFilters,
  products: normalizedProducts,
};
