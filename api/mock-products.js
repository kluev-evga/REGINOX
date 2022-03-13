const normalizedFilters = {
    '0015bfc8-c63a-45f7-ad67-4d16dc608bf9': [
        {
            'name': 'Материал',
            'filters': ['нержавеющая сталь', 'гранит', 'PVD-покрытие (серия Miami)', 'окрашенные (серия Regi Color)', 'керамика']
        },
        {
            'name': 'Метод установки',
            'filters': ['врезной', 'подстольный', 'вровень со столешницей']
        },
        {
            'name': 'Размер шкафа',
            'filters': ['300мм', '400мм', '450мм', '500мм', '600мм', '700мм', '800мм', '900мм', '900мм х 900мм', '1000мм']
        },
        {
            'name': 'Форма',
            'filters': ['круглая', 'квадратная', 'прямоугольная', 'овальная', 'с крылом', 'двойная']
        },
        {
            'name': 'Цвет',
            'filters': ['полированная', 'матовая', 'брашированная', 'текстурированная', 'медь', 'золото', 'белый', 'бежевый', 'серый', 'черный', 'коричневый']
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
