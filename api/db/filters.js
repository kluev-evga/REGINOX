const filters = {
    'sinks': [
        {
            title: 'Тип продукта',
            searchGroup: 'type',
            filters: [
                {title: 'Врезная мойка', search: 'integrated'},
                {title: 'Накладная мойка', search: 'overhead'},
                {title: 'Мойка под столешницу', search: 'underlining'},
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
    'taps': [
        {
            title: 'Тип продукта',
            searchGroup: 'type',
            filters: [
                {title: 'Сенсорный', search: 'sensor'},
                {title: 'Термостатический', search: 'thermostatic'},
                {title: 'Кухонный смеситель', search: 'kitchen'},
                {title: 'Смеситель для санузлов', search: 'bathroom'},
            ],
        },
        {
            title: 'Основной материал',
            searchGroup: 'material',
            filters: [
                {title: 'ABS-пластик', search:'abs'},
                {title: 'Бронза', search:'bronze'},
                {title: 'Керамика', search:'ceramics'},
                {title: 'Латунь', search:'brass'},
                {title: 'Металл', search:'metal'},
                {title: 'Нержавеющая сталь', search:'stainless'},
                {title: 'ПВХ', search:'pvh'},
                {title: 'Пластик', search:'plastic'},
                {title: 'Полимер', search:'polimer'},
                {title: 'Силумин', search:'silumin'},
                {title: 'Сплав', search:'alloy'},
                {title: 'Сталь', search:'steel'},
                {title: 'Хром', search:'crome'},
                {title: 'Цинк-алюминий-медь', search:'cupper'},
                {title: 'Цинк', search:'zink'},
                {title: 'Цинковый сплав', search:'znkaly'},
            ]
        },
        {
            title: 'Марка',
            searchGroup: 'brand',
            filters: [
                { title: "ABBER", "search": "abber" },
                { title: "ACCOONA", "search": "accoona" },
                { title: "AGGER", "search": "agger" },
                { title: "AQUARIUS", "search": "aquarius" },
                { title: "ARGOTECH", "search": "argotech" },
                { title: "ARMANDO", "search": "armando" },
                { title: "AXOR", "search": "axor" },
                { title: "BACH", "search": "bach" },
                { title: "BALEAR", "search": "balear" },
                { title: "BLANCO", "search": "blanco" },
                { title: "BOCH", "search": "boch" },
                { title: "BRAVAT", "search": "bravat" },
                { title: "BRONZE", "search": "bronze" },
                { title: "CASCADA", "search": "cascada" },
                { title: "CERSANIT", "search": "cersanit" },
                { title: "CRON", "search": "cron" },
                { title: "CULTO", "search": "culto" },
                { title: "DAMIXA", "search": "damixa" },
                { title: "DAXIMA", "search": "daxima" },
                { title: "DECOROOM", "search": "decoroom" },
                { title: "DELINIA", "search": "delinia" },
                { title: "DEVIDA", "search": "devida" },
                { title: "DIADONNA", "search": "diadonna" },
                { title: "DIVINO", "search": "divino" },
                { title: "DIVINO", "search": "divino" },
                { title: "DOKORONA", "search": "dokorona" },
                { title: "EDENY", "search": "edeny" },
                { title: "EKKO", "search": "ekko" },
                { title: "ELEANTI", "search": "eleanti" },
                { title: "ESKO", "search": "esko" },
                { title: "FASHUN", "search": "fashun" },
                { title: "FLORENTINA", "search": "florentina" },
                { title: "FLORTEK", "search": "flortek" },
                { title: "FOODATLAS", "search": "foodatlas" },
                { title: "FORTIS", "search": "fortis" },
                { title: "FRANKE", "search": "franke" },
                { title: "FRAP", "search": "frap" },
                { title: "FRESSO", "search": "fresso" },
                { title: "GAPPO", "search": "gappo" },
                { title: "GESSI", "search": "gessi" },
                { title: "GIGLIELMI", "search": "giglielmi" },
                { title: "GRANFEST", "search": "granfest" },
                { title: "GRANGE", "search": "grange" },
                { title: "GRANULA", "search": "granula" },
                { title: "GROHE", "search": "grohe" },
                { title: "GROSS", "search": "gross" },
                { title: "HAIBA", "search": "haiba" },
                { title: "HANSGROHE", "search": "hansgrohe" },
                { title: "IDDIS", "search": "iddis" },
                { title: "IDEAL", "search": "ideal" },
                { title: "ISTOK", "search": "istok" },
                { title: "JACOB", "search": "jacob" },
                { title: "JUGUNI", "search": "juguni" },
                { title: "JUGUNI", "search": "juguni" },
                { title: "KAISER", "search": "kaiser" },
                { title: "KLUDI", "search": "kludi" },
                { title: "KOPFGESCHEIT", "search": "kopfgescheit" },
                { title: "KUPPERSBERG", "search": "kuppersberg" },
                { title: "LATUNO", "search": "latuno" },
                { title: "LAVA", "search": "lava" },
                { title: "LEDEME", "search": "ledeme" },
                { title: "LEMARK", "search": "lemark" },
                { title: "MELODIA", "search": "melodia" },
                { title: "MILACIO", "search": "milacio" },
                { title: "MILARDO", "search": "milardo" },
                { title: "MITTE", "search": "mitte" },
                { title: "MIXLINE", "search": "mixline" },
                { title: "MYNAH", "search": "mynah" },
                { title: "NOBILI", "search": "nobili" },
                { title: "OLIVES", "search": "olives" },
                { title: "OMOIKIRI", "search": "omoikiri" },
                { title: "ONELIFE", "search": "onelife" },
                { title: "ORANGE", "search": "orange" },
                { title: "ORAS", "search": "oras" },
                { title: "OSGARD", "search": "osgard" },
                { title: "OUTE", "search": "oute" },
                { title: "PAINI", "search": "paini" },
                { title: "POLYGRAN", "search": "polygran" },
                { title: "POTATO", "search": "potato" },
                { title: "PRESTO", "search": "presto" },
                { title: "PRIMAVERA", "search": "primavera" },
                { title: "RAIBER", "search": "raiber" },
                { title: "RAINSBERG", "search": "rainsberg" },
                { title: "RAVAK", "search": "ravak" },
                { title: "RAVSLEZAK", "search": "ravslezak" },
                { title: "REDBLU", "search": "redblu" },
                { title: "RESPECTA", "search": "respecta" },
                { title: "ROCA", "search": "roca" },
                { title: "ROEGEN", "search": "roegen" },
                { title: "ROSSINKA", "search": "rossinka" },
                { title: "ROSSINKA", "search": "rossinka" },
                { title: "RUSH", "search": "rush" },
                { title: "SENSEA", "search": "sensea" }
            ]
        },
    ],
    'ranges': [
        {
            title: 'Тип продукта',
            searchGroup: 'type',
            filters: [
                { title: 'Варочная панель', search: 'overcounter'},
                { title: 'Газовая плита', search: 'freestanding'},
                { title: 'Комбинированная', search: 'combined'},
                { title: 'Кухонная конфорка', search: 'integratable'},
            ],
        },
        {
            title: 'Марка',
            searchGroup: 'brand',
            filters: [
                { title: "BOSCH", search: "BOSCH" },
                { title: "ELECTROLUX", search: "ELECTROLUX" },
                { title: "GRAUDE", search: "GRAUDE" },
                { title: "HANSA", search: "HANSA" },
                { title: "HOMSAIR", search: "HOMSAIR" },
                { title: "HORIZONT", search: "HORIZONT" },
                { title: "HOTPOINT", search: "" },
                { title: "HYUNDAI", search: "HOTPOINT" },
                { title: "INDESIT", search: "INDESIT" },
                { title: "KRONA", search: "KRONA" },
                { title: "KUPPERSBERG", search: "KUPPERSBERG" },
                { title: "LEX", search: "LEX" },
                { title: "MAUNFELD", search: "MAUNFELD" },
                { title: "MBS", search: "MBS" },
                { title: "MONSHER", search: "MONSHER" },
                { title: "ORE", search: "ORE" },
                { title: "RICCI", search: "RICCI" },
                { title: "SIMFER", search: "SIMFER" },
            ],
        },
        {
            title: 'Основной материал',
            searchGroup: 'material',
            filters: [
                { title: 'Нержавеющая сталь', search:'stainless'},
                { title: 'Стекло', search:'glass'},
                { title: 'Эмалированная сталь', search:'enamel'},
                { title: 'Металл', search:'metal'},
                { title: 'Стеклокерамика', search:'ceramics'},
                { title: 'Закаленное стекло', search:'tempered'},
                { title: 'Сталь', search:'steel'},
                { title: 'Железо', search:'iron'},
            ],
        },
        {
            title: 'Цветовая палитра',
            searchGroup: 'color',
            filters: [
                { title: "Черный", search: "black" },
                { title: "Белый", search: "white" },
                { title: "Серый", search: "gray" },
                { title: "Бежевый", search: "beige" },
                { title: "Не уазано", search: "notset" },
            ],
        },
    ],
    'washstands': [
        {
            title: 'Тип продукта',
            searchGroup: 'type',
            filters: [
                { title: "Раковина", search: "sink" },
                { title: "Подвесная раковина", search: "hanged" },
                { title: "На пьедестале", search: "stand" },
                { title: "Двойная", search: "double" },
                { title: "Угловая", search: "corner" },
                { title: "Отдельностоящая", search: "freestanding" },
                { title: "Рукомойник", search: "dispenser" },
            ],
        },
        {
            title: 'Назначение',
            searchGroup: 'type',
            filters: [
                { title: "Ванная комната", "search": "bathroom" },
                { title: "Для тумбы", "search": "cabinet" },
                { title: "На стиральную машину", "search": "onwasher" },
                { title: "На столешницу", "search": "oncounter" },
                { title: "На шкафу", "search": "oncapboard" },
                { title: "Раковина", "search": "sink" },
                { title: "Стена", "search": "wall" },
                { title: "Не указано", "search": "notspecified" },
            ],
        },
        {
            title: 'Форма',
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
                {title: 'Фаянс', search:'faience'},
                {title: 'Керамика', search:'ceramics'},
                {title: 'Фарфор', search:'porcelain'},
                {title: 'Мрамор', search:'marble'},
                {title: 'Кварц', search:'quartz'},
                {title: 'Композитный', search:'composite'},
                {title: 'Нержавеющая сталь', search:'stainlesssteel'},
                {title: 'Пластик', search:'polimer'},
                {title: 'Искусственный камень', search:'artificialstone'},
                {title: 'Гранит', search:'granite'},
            ]
        },
        {
            title: 'Цветовая палитра',
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
    'accessories': [
        {
            title: 'Тип продукта',
            searchGroup: 'type',
            filters: [
                {title: 'Корзины', search: 'baskets'},
                {title: 'Поддоны', search: 'pans'},
                {title: 'Сифоны', search: 'siphons'},
                {title: 'Разделочные доски', search: 'boards'},
                {title: 'Адаптеры', search: 'adapters'},
            ],
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
    ],
    'storage-manhattan': [
        {
            title: 'Тип продукта',
            searchGroup: 'type',
            filters: [
                {title: 'Manhattan', search: 'manhattan'},
                {title: 'Manhattan Slim', search: 'slim'},
                {title: 'Комплекты Manhattan', search: 'kits'},
            ],
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
    ],
    'muscellaneous': [
        {
            title: 'Тип продукта',
            searchGroup: 'type',
            filters: [
                {title: 'Rodi (Португалия)', search: 'rodi'},
                {title: 'Whinstone (Россия)', search: 'whinstone'},
                {title: 'Rerih (Италия)', search: 'rerih'},
                {title: 'Status (Италия)', search: 'status'},
                {title: 'Armando Vicario (Италия)', search: 'armandovicario'},
                {title: 'Webert (Италия)', search: 'webert'},
                {title: 'Effepi (Италия)', search: 'effepi'},
                {title: 'Glionna Bagno (Италия)', search: 'glionnabagno'},
                {title: 'Аквафор (Россия)', search: 'aquafor'},
            ],
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
    ],
};

module.exports = filters;