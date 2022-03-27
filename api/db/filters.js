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
                {title: 'Искусственный камень', search:'artificialstone'},
                {title: 'Кварц', search:'quartz'},
                {title: 'Композитный', search:'composite'},
                {title: 'Мрамор', search:'marble'},
                {title: 'Нержавеющая сталь', search:'stainlesssteel'},
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
                {title: 'Искусственный гранит', search:'artificialgranite'},
                {title: 'Искусственный мрамор', search:'artificialmarble'},
                {title: 'Матовый', search:'matte'},
                {title: 'Нержавеющая сталь', search:'stainlesssteel'},
                {title: 'Фактурный', search:'textured'},
                {title: 'Шлифованный', search:'polished'},
            ]
        },
        {
            title: 'Цвет',
            searchGroup: 'color',
            filters: [
                {title: 'Алюминий', search:'aluminium'},
                {title: 'Бежевый', search:'beige'},
                {title: 'Белый', search:'white'},
                {title: 'Бронза', search:'bronze'},
                {title: 'Графит', search:'graphite'},
                {title: 'Желтый', search:'yellow'},
                {title: 'Зеленый', search:'green'},
                {title: 'Золотой', search:'gold'},
                {title: 'Коричневый', search:'brown'},
                {title: 'Красный', search:'red'},
                {title: 'Медный', search:'cupper'},
                {title: 'Нержавеющая сталь', search:'stainlessteel'},
                {title: 'Песок', search:'sand'},
                {title: 'Разноцветный', search:'multicolor'},
                {title: 'Розовый', search:'rose'},
                {title: 'Светло-серый', search:'lightgray'},
                {title: 'Серебристый', search:'silver'},
                {title: 'Серый', search:'darkgray'},
                {title: 'Серый металик', search:'metal'},
                {title: 'Синий', search:'blue'},
                {title: 'Темно-коричневый', search:'dbrwn'},
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
                {title: 'Беларусь', search:'belarus'},
            ]
        },
    ],
};

module.exports = filters;