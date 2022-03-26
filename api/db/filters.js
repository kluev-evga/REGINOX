const filters = {
    'sinks': [
        {
            title: 'Тип продукта',
            filters: [
                {title: 'Все', url: 'all'},
                {title: 'Врезная мойка', url: 'integrated'},
                {title: 'Накладная мойка', url: 'overhead'},
                {title: 'Мойка под столешницу', url: 'underlining'},
            ],
            products: {
                'all': ['xvwY637oeN','Q9aVTvnfpi','4myksxFQiP','ElVW4q4eHa','U6TSDmFeiD','TkJgwqrxng'],
                'integrated': ['xvwY637oeN', 'Q9aVTvnfpi', '4myksxFQiP'],
                'overhead': ['4myksxFQiP' ,'ElVW4q4eHa', 'TkJgwqrxng'],
                'underlining': ['xvwY637oeN', '4myksxFQiP', 'TkJgwqrxng'],
            }
        },
        {
            title: 'Внешняя форма',
            searchGroup: 'shape',
            filters: [
                {title: 'Квадрат', search:'square'},
                {title: 'Круг', search:'circle'},
                {title: 'Овал',  search:'oval'},
                {title: 'Прямоугольник', search: 'rectangle'},
                {title: 'Угловой', search: 'corner'},
                {title: 'Фигурная', search: 'patterned'},
            ]
        },
        {
            title: 'Основной материал',
            searchGroup: 'material',
            filters: [
                {title: 'Гранит', search:'granite'},
                {title: 'Искусственный камень', search:'artificial-stone'},
                {title: 'Кварц', search:'quartz'},
                {title: 'Композитный', search:'composite'},
                {title: 'Мрамор', search:'marble'},
                {title: 'Нержавеющая сталь', search:'stainless-steel'},
                {title: 'Пластик', search:'polimer'},
            ]
        },
        {
            title: 'Покрытие',
            searchGroup: 'coating',
            filters: [
                {title: 'PVD', search:'pvd'},
                {title: 'Без обработки', search:'undressed'},
                {title: 'Без покрытия', search:'uncoated'},
                {title: 'Гладкий', search:'smooth'},
                {title: 'Зачищенный', search:'stripped'},
                {title: 'Искусственный гранит', search:'artificial-granite'},
                {title: 'Искусственный мрамор', search:'artificial-marble'},
                {title: 'Матовый', search:'matte'},
                {title: 'Нержавеющая сталь', search:'stainless-steel'},
                {title: 'Фактурный', search:'textured'},
                {title: 'Шлифованный', search:'polished'},
            ]
        },
        {
            title: 'Цвет',
            searchGroup: 'color',
            filters: [
                {title: 'Светло-бежевый', search:'light-beige'},
                {title: 'Алюминий', search:'aluminium'},
                {title: 'Бежевый', search:'beige'},
                {title: 'Белый', search:'white'},
                {title: 'Бронза', search:'bronze'},
                {title: 'Ванильный', search:'vanilla'},
                {title: 'Графит', search:'graphite'},
                {title: 'Желтый', search:'yellow'},
                {title: 'Зеленый', search:'green'},
                {title: 'Золото', search:'gold'},
                {title: 'Коричневый', search:'brown'},
                {title: 'Красный', search:'red'},
                {title: 'Медный', search:'cupper'},
                {title: 'Нержавеющая сталь', search:'stainles-steel'},
                {title: 'Песок', search:'sand'},
                {title: 'Разноцветный', search:'multi-color'},
                {title: 'Розовый', search:'rose'},
                {title: 'Светло-серый', search:'light-gray'},
                {title: 'Серебристый', search:'silver'},
                {title: 'Серый', search:'gray'},
                {title: 'Серый металик', search:'gray-metal'},
                {title: 'Синий', search:'blue'},
                {title: 'Темно-Коричневый', search:'dark-brown'},
                {title: 'Хром', search:'crome'},
                {title: 'Черный', search:'black'},
            ]
        },
        {
            title: 'Страна производства',
            searchGroup: 'manufacturer',
            filters: [
                {title: 'Бельгия', search:'belgium'},
                {title: 'Германия', search:'germany'},
                {title: 'Италия', search:'italy'},
                {title: 'Китай', search:'china'},
                {title: 'Польша', search:'poland'},
                {title: 'Россия', search:'russia'},
                {title: 'Чехия', search:'czech'},
                {title: 'Швейцария', search:'swizerland'},
                {title: 'Швеция', search:'sweeden'},
            ]
        },
    ],
};

module.exports = filters;


// [
//    {
//      id: '91275498',
//      specs: {
//        'Тип продукта': 'Накладная мойка',
//        'Марка': 'LEDEME',
//        'Основной материал': 'Нержавеющая сталь',
//        'Внешняя форма': 'Квадрат',
//        'Количество чаш': '1',
//        'Глубина чаши (см)': '18',
//        'Цвет': 'Хром',
//        'Вес, кг': '2.3',
//        'Страна производства': 'Китай',
//        'Гарантия (лет)': '1.00'
//      }
//    },
//    {
//      id: '93875816',
//      specs: {
//        'Тип продукта': 'Врезная мойка',
//        'Марка': 'GRANFEST',
//        'Ширина (см)': '41.7',
//        'Длина (см)': '41.7',
//        'Основной материал': 'Искусственный камень',
//        'Внешняя форма': 'Квадрат',
//        'Количество чаш': '1',
//        'Глубина чаши (см)': '19',
//        'Цвет': 'Желтый',
//        'Покрытие': 'Гладкий',
//        'Диаметр сливного отверстия (мм)': '88.9',
//        'Крепеж в комплекте': 'Нет',
//        'Уплотнитель в комплекте': 'Нет',
//        'Сифон': 'В комплекте',
//        'Слив-перелив': 'Перелив в комплекте',
//        'Вес, кг': '15.2',
//        'Страна производства': 'Россия',
//        'Гарантия (лет)': '2.00'
//      }
//    },
//    {
//      id: '98291919',
//      specs: {
//        'Тип продукта': 'Врезная мойка',
//        'Марка': 'MIXLINE',
//        'Ширина (см)': '49',
//        'Длина (см)': '55',
//        'Основной материал': 'Искусственный камень',
//        'Внешняя форма': 'Квадрат',
//        'Количество чаш': '1',
//        'Глубина чаши (см)': '20',
//        'Цвет': 'Разноцветный',
//        'Покрытие': 'Искусственный мрамор',
//        'Диаметр сливного отверстия (мм)': '90',
//        'Крепеж в комплекте': 'Да',
//        'Уплотнитель в комплекте': 'Нет',
//        'Сифон': 'В комплекте',
//        'Слив-перелив': 'Перелив в комплекте',
//        'Вес, кг': '18.3',
//        'Страна производства': 'Россия',
//        'Гарантия (лет)': '2.00'
//      }
//    }
// ]