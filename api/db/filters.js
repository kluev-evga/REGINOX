const filters = {
    '0015bfc8-c63a-45f7-ad67-4d16dc608bf9': [
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
            ],
            products: {
                'square': {'Q9aVTvnfpi':true, '4myksxFQiP':true},
                'circle': {'ElVW4q4eHa':true, 'TkJgwqrxng':true},
                'oval': {'Q9aVTvnfpi':true, 'U6TSDmFeiD':true},
                'rectangle': {'xvwY637oeN':true, 'TkJgwqrxng':true},
                'corner': {'xvwY637oeN':true, '4myksxFQiP':true},
                'patterned': {'xvwY637oeN':true, '4myksxFQiP':true},
            }
        },
        {
            title: 'Основной материал',
            searchGroup: 'material',
            filters: [
                {title: 'Гранит', search:'granite'},
                {title: 'Искуственный камень', search:'artificial-stone'},
                {title: 'Кварц', search:'quartz'},
                {title: 'Композитный', search:'composite'},
                {title: 'Мрамор', search:'marble'},
                {title: 'Нержавеющая сталь', search:'stainless-steel'},
                {title: 'Пластик', search:'polimer'},
            ],
            products: {
                'granite': {'xvwY637oeN':true, 'Q9aVTvnfpi':true, '4myksxFQiP':true},
                'artificial-stone': {'4myksxFQiP':true, 'ElVW4q4eHa':true, 'TkJgwqrxng':true},
                'quartz': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true},
                'composite': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true},
                'marble': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true},
                'stainless-steel': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true},
                'polimer': {'xvwY637oeN':true, '4myksxFQiP':true, 'TkJgwqrxng':true},
            }
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
            ],
            products: {

            }
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
            ],
            products: {

            }
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
            ],
            products: {

            }
        },
    ],
};

module.exports = filters;