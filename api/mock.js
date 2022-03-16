const normalizedCatalog = {
    links: [
        {
            title: 'Мойки',
            img: '/assets/catalog/sinks.webp',
            alt: 'sinks',
            url: 'sinks',
            id: '0015bfc8-c63a-45f7-ad67-4d16dc608bf9',
        },
        {
            title: 'Смесители',
            img: '/assets/catalog/taps.webp',
            alt: 'taps',
            url: 'taps',
            id: '4e24f752-0707-4d03-9fb7-b736926e6220',
        },
        {
            title: 'Плиты',
            img: '/assets/catalog/range.webp',
            alt: 'range',
            url: 'ranges',
            id: 'd70990e4-4854-4aee-85ff-77e966658bfd',
        },
        {
            title: 'Умывальники',
            img: '/assets/catalog/washstands.webp',
            alt: 'washstands',
            url: 'washstands',
            id: '732d59a1-5f70-4e20-8abf-c16ee4eb602f',
        },
        {
            title: 'Аксессуары',
            img: '/assets/catalog/accessories.webp',
            alt: 'accessories',
            url: 'accessories',
            id: 'f751f8eb-94d4-4c37-a37c-62aba74cee42',
        },
        {
            title: 'Системы хранения Manhattan',
            img: '/assets/catalog/countertops.webp',
            alt: 'storage Manhattan',
            url: 'storage-manhattan',
            id: 'c5ce17f1-0488-487c-8200-6fec72cc4caa',
        },
        {
            title: 'Другая продукция',
            img: '/assets/catalog/muscellaneous.webp',
            alt: 'muscellaneous',
            url: 'muscellaneous',
            id: '5c9bca2d-13a8-4df3-91a2-cb51b8f36268',
        },
        {
            title: 'Измельчители Bone Crusher',
            img: '/assets/catalog/garbagedisposers.webp',
            alt: 'garbagedisposers',
            url: 'garbage-disposers',
            id: '0f20d5f3-bcf7-447b-88af-97899e6815a7',
        },
        {
            title: 'Дозаторы',
            img: '/assets/catalog/storage.webp',
            alt: 'storage',
            url: 'soap-dispensers',
            categories: false,
            id: '2889d9d0-3a37-4593-9415-434ee08649d2',
        },
    ],
    categories: {
        '0015bfc8-c63a-45f7-ad67-4d16dc608bf9': [
            {title: 'Все', categoryUrl: 'all'},
            {title: 'Нержавеющая сталь', categoryUrl: 'stainless-steel'},
            {title: 'Гранит и керамика', categoryUrl: 'porcelain'},
            {title: 'PVD покрытие', categoryUrl: 'coated'}
        ],
        '4e24f752-0707-4d03-9fb7-b736926e6220': [
            {title: 'Все', categoryUrl: 'all'},
            {title: 'Встроенные', categoryUrl: 'taps-insink'},
            {title: 'Сенсорные', categoryUrl: 'taps-sensor'},
            {title: 'Ванны и душевые кабины', categoryUrl: 'taps-shower'},
            {title: 'Биде и гигиенический душ', categoryUrl: 'taps-sanitary'},
        ],
        'd70990e4-4854-4aee-85ff-77e966658bfd': [
            {title: 'Все', categoryUrl: 'all'},
            {title: '1 конфорка', categoryUrl: 'range-single'},
            {title: '2 конфорки', categoryUrl: 'range-double'},
            {title: '3 конфорки', categoryUrl: 'range-triple'},
            {title: '4 конфорки', categoryUrl: 'range-4-way'},
            {title: '5 конфорок', categoryUrl: 'range-5-way'},
            {title: '6 конфорок', categoryUrl: 'range-6-way'},
        ],
        '732d59a1-5f70-4e20-8abf-c16ee4eb602f': [
            {title: 'Все', categoryUrl: 'all'},
            {title: 'Нержавеющая сталь', categoryUrl: 'washstands-stainless-steel'},
            {title: 'Окрашенные (Regi Color)', categoryUrl: 'washstands-porcelain'},
        ],
        'f751f8eb-94d4-4c37-a37c-62aba74cee42': [
            {title: 'Все', categoryUrl: 'all'},
            {title: 'Разделочные доски', categoryUrl: 'accessories-boards'},
            {title: 'Корзины', categoryUrl: 'accessories-baskets'},
            {title: 'Коландеры', categoryUrl: 'accessories-dishwasher-bins'},
            {title: 'Решетки на дно/поддоны', categoryUrl: 'accessories-pans'},
            {title: 'Адаптеры и комплектующие', categoryUrl: 'accessories-adapters'},
            {title: 'Сифоны', categoryUrl: 'accessories-siphons'},
        ],
        'c5ce17f1-0488-487c-8200-6fec72cc4caa': [
            {title: 'Все', categoryUrl: 'all'            },
            {title: 'Manhattan', categoryUrl: 'storage-Manhattan'},
            {title: 'Manhattan Slim', categoryUrl: 'storage-manhattan-slim'},
            {title: 'Комплекты Manhattan', categoryUrl: 'storage-manhattan-kits'},
        ],
        '5c9bca2d-13a8-4df3-91a2-cb51b8f36268': [
            {title: 'Все', categoryUrl: 'all'},
            {title: 'Мойки Rodi (Португалия)', categoryUrl: 'muscellaneous-rodi'},
            {title: 'Мойки Whinstone (Россия)', categoryUrl: 'muscellaneous-whinstone'},
            {title: 'Мойки Rerih (Италия)', categoryUrl: 'muscellaneous-rerih'},
            {title: 'Мойки Status (Италия)', categoryUrl: 'muscellaneous-status'},
            {title: 'Смесители Armando Vicario (Италия)', categoryUrl: 'muscellaneous-armando-vicario'},
            {title: 'Смесители Webert (Италия)', categoryUrl: 'muscellaneous-tap-webert'},
            {title: 'Смесители Effepi (Италия)', categoryUrl: 'muscellaneous-effepi'},
            {title: 'Умывальники Webert (Италия)', categoryUrl: 'muscellaneous-washstands-webert'},
            {title: 'Аксессуары Webert (Италия)', categoryUrl: 'muscellaneous-accessories-webert'},
            {title: 'Аксессуары Glionna Bagno (Италия)', categoryUrl: 'muscellaneous-glionna-bagno'},
            {title: 'Аквафор (Россия)', categoryUrl: 'muscellaneous-aquafor'},
        ],
    },
};

const normalizedHome = {
  slider: [
    {
      id: 'a70a9dec-aa45-46ea-9823-c5fc8ba651c3',
      title: 'Мойки, смесители и аксессуары',
      subtitle: 'от ведущего производителя сантехники для кухни Reginox',
      img: '/assets/slider/slide-sinks.webp',
      alt: 'slide sinks',
      url: '/products/sinks',
      titleLink: 'Встраиваемые газовые плиты',
      imgLink: '/assets/slider/link-sinks.webp',
      altLink: 'раковины',
    },
    {
        id: 'ea137ef0-01e6-43e6-89a8-bf21147ea295',
        title: 'Газовые конфорки PiTT',
        subtitle: 'встраиваемые системы от производителя из голандии',
        img: '/assets/slider/slide-ranges.webp',
        alt: 'slide sinks',
        url: '/products/ranges',
        titleLink: 'Газовые конфорки PiTT',
        imgLink: '/assets/slider/link-ranges.webp',
        altLink: 'плиты',
    },
    {
        id: '05f7d4c0-2acb-4c4b-989d-3a3046bb1d89',
        title: 'Умывальники и краны для раковин',
        subtitle: 'мультирычажные и сенсорные системы Reginox',
        img: '/assets/slider/slide-washstands.webp',
        alt: 'slide sinks',
        url: '/products/washstands',
        titleLink: 'Умывальники и краны для раковин',
        imgLink: '/assets/slider/link-washstands.webp',
        altLink: 'умывальники',
    },
    {
        id: '6480b394-f8d5-4965-97c0-354cc1702c72',
        title: 'системы хранения manhattan ',
        subtitle: 'встраиваемые кухонные системы европейского качества',
        img: '/assets/slider/slide-manhattan.webp',
        alt: 'slide sinks',
        url: '/products/storage-manhattan',
        titleLink: 'системы хранения manhattan',
        imgLink: '/assets/slider/link-manhattan.webp',
        altLink: 'системы хранения',
    },
  ],
  addressBar: [
    {
        id: 'Nederland',
        name: 'Reginox bv, Nederland',
        address: '1 Madison Lane #35 Nederland 508913',
        phone: '65067885363',
        phoneText: '+ 65 (0) 67 88 53 63',
        mail: 'info@reginox.com.ng',
        site: 'reginox.sg'
    },
    {
        id: 'Russia',
        
        name: 'Reginox Holding, Russia',
        address: 'Верхняя Красносельская улица #3А Москва, 107113',
        phone: '86222451115',
        phoneText: '+7 622 245-11-15',
        mail: 'info@reginox.com.ru',
        site: 'reginox.ru'
    },
    {
        id: 'UK',
        name: 'Reginox, UK Ltd',
        address: '1 Loyang Lane #03-03 London 259233',
        phone: '25092159211',
        phoneText: '+ 25 (0) 92 15 92 11',
        mail: 'info@reginox.com.uk',
        site: 'reginox.uk'
    },
    {
        id: 'Singapure',
        name: 'Reginox, Singapure',
        address: '245 Main Lane #255 Singapore 272345',
        phone: '15172352525',
        phoneText: '+ 1 517 235 25 25',
        mail: 'info@reginox.com.sg',
        site: 'reginox.sg'
    }
  ]
};

const normalizedCatalogs = [
  {
    id: '4cd4c494-94b7-4fe6-887e-e24bba65c05f',
    name: 'Каталог январь 2020',
    img: '/assets/catalogs/catalog_jan_20.webp',
    alt: 'Каталог январь 2020',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: 'd1c4028f-289f-423e-8385-846815455b57',
    name: 'Каталог февраль 2020',
    img: '/assets/catalogs/catalog_feb_20.webp',
    alt: 'Каталог февраль 2020',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: '9e482ae2-05ce-42b2-bcea-bfe70bc5831a',
    name: 'Каталог март 2020',
    img: '/assets/catalogs/catalog_mar_20.webp',
    alt: 'Каталог март 2020',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: 'a7227db2-3181-4c55-843a-394acddd5d00',
    name: 'Каталог апрель 2020',
    img: '/assets/catalogs/catalog_apr_20.webp',
    alt: 'Каталог апрель 2020',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: '0f4eb3e8-a461-417d-8249-d0ad3f13dfca',
    name: 'Каталог май 2020',
    img: '/assets/catalogs/catalog_may_20.webp',
    alt: 'Каталог май 2020',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: '9dc5cb57-a038-4d89-aab7-fc5ed513a90f',
    name: 'Каталог июнь 2020',
    img: '/assets/catalogs/catalog_jun_20.webp',
    alt: 'Каталог июнь 2020',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: 'dfacecd5-cfeb-487f-9cf2-6f18765154ca',
    name: 'Каталог июль 2020',
    img: '/assets/catalogs/catalog_jul_20.webp',
    alt: 'Каталог июль 2020',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: 'fa1b9184-151e-42e9-bccb-4c2fa1b96c00',
    name: 'Каталог август 2020',
    img: '/assets/catalogs/catalog_aug_20.webp',
    alt: 'Каталог август 2020',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: '73baa82d-af4c-4565-9526-821213c83848',
    name: 'Каталог сентябрь 2020',
    img: '/assets/catalogs/catalog_sep_20.webp',
    alt: 'Каталог сентябрь 2020',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: '8806179b-e0af-444d-a830-8b45a78993de',
    name: 'Каталог октябрь 2020',
    img: '/assets/catalogs/catalog_oct_20.webp',
    alt: 'Каталог октябрь 2020',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: '42f9b07c-96d2-460e-be92-ed0ce0dd541a',
    name: 'Каталог ноябрь 2020',
    img: '/assets/catalogs/catalog_nov_20.webp',
    alt: 'Каталог октябрь 2020',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: 'ab49d0bc-340f-4fc0-9cf2-58955cccfcb0',
    name: 'Каталог декабрь 2020',
    img: '/assets/catalogs/catalog_dec_20.webp',
    alt: 'Каталог октябрь 2020',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: 'ca25b9e8-5e5b-4a5b-a2d9-8354c6642e69',
    name: 'Каталог январь 2021',
    img: '/assets/catalogs/catalog_jan_21.webp',
    alt: 'Каталог январь 2021',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: 'b66d56ca-6d38-4ff1-8c3e-11b15adbb14d',
    name: 'Каталог февраль 2021',
    img: '/assets/catalogs/catalog_feb_21.webp',
    alt: 'Каталог февраль 2021',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: '3abc05df-0114-4759-aca0-61aada2ec03c',
    name: 'Каталог март 2021',
    img: '/assets/catalogs/catalog_mar_21.webp',
    alt: 'Каталог март 2021',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: '1a05ff5a-7f80-475a-ac0f-e4cf41791b65',
    name: 'Каталог апрель 2021',
    img: '/assets/catalogs/catalog_apr_21.webp',
    alt: 'Каталог апрель 2021',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: 'b4fb2aba-3e0d-4540-aa81-4da158c03464',
    name: 'Каталог май 2021',
    img: '/assets/catalogs/catalog_may_21.webp',
    alt: 'Каталог май 2021',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: 'd85d750f-4202-4ae1-a0d3-d39db3f6ac53',
    name: 'Каталог июнь 2021',
    img: '/assets/catalogs/catalog_jun_21.webp',
    alt: 'Каталог июнь 2021',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: '2eaf70b5-b554-46a3-a551-cfec7b04686b',
    name: 'Каталог июль 2021',
    img: '/assets/catalogs/catalog_jul_21.webp',
    alt: 'Каталог июль 2021',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: '98212ace-e4ee-4570-b3c6-2dd479a24306',
    name: 'Каталог август 2021',
    img: '/assets/catalogs/catalog_aug_21.webp',
    alt: 'Каталог август 2021',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: '60b73117-38f5-41c6-b604-57ed8c38c4d2',
    name: 'Каталог сентябрь 2021',
    img: '/assets/catalogs/catalog_sep_21.webp',
    alt: 'Каталог сентябрь 2021',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: 'e0a6ac4b-c4d2-4b85-8350-f05eb0043393',
    name: 'Каталог октябрь 2021',
    img: '/assets/catalogs/catalog_oct_21.webp',
    alt: 'Каталог октябрь 2021',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: 'e6657be1-1717-4ca1-861a-c69861f99c79',
    name: 'Каталог ноябрь 2021',
    img: '/assets/catalogs/catalog_nov_21.webp',
    alt: 'Каталог октябрь 2021',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
  {
    id: '7df3801d-5a16-43ca-8685-2c5d13870d7a',
    name: 'Каталог декабрь 2021',
    img: '/assets/catalogs/catalog_dec_21.webp',
    alt: 'Каталог октябрь 2021',
    url: './assets/catalogs/catalog_jan_21.pdf'
  },
];

const normalizedSertificates = [
    {
        id: '53d57263-d565-4d2b-997f-7698594fc85c',
        name: 'Авторизованный диллер webert',
        img: 'authorized.webert.webp',
        alt: 'sertificate',
        width: '744',
        height: '1028',
    },
    {
        id: '0a6403a6-abd3-419c-bdd3-2324ef0d3c14',
        name: 'Официальный дистрибьютер Проминтех',
        img: 'certificate-of-authorisation-fraisa_rus.webp',
        alt: 'sertificate',
        width: '1061',
        height: '1500',
    },
    {
        id: '0beaf1a0-a7e2-44b5-a643-f11986797c3f',
        name: 'Kordi GmbH дистрибьютер',
        img: 'sert2014_2.webp',
        alt: 'sertificate',
        width: '1671',
        height: '2362',
    },
    {
        id: 'e34618b7-1791-4215-b345-0aa935cbc3a3',
        name: 'ITE Group PLc',
        img: 'mbnew10.webp',
        alt: 'sertificate',
        width: '731',
        height: '1044',
    },
    {
        id: 'fd842681-0d69-42e1-8bb6-09f11049eff1',
        name: 'Санитарно техническая экспертиза',
        img: 'e3_2.webp',
        alt: 'sertificate',
        width: '921',
        height: '1307',
    },
    {
        id: '1cde65bd-edb7-4048-84a0-05bf7d09909e',
        name: 'Корди MosBuild',
        img: 'MosBuild.webp',
        alt: 'sertificate',
        width: '610',
        height: '872',
    },
    {
        id: '37eb3316-a388-424a-84f6-ab997839505a',
        name: 'The ITE Group Евросант',
        img: 'mbnew11.webp',
        alt: 'sertificate',
        width: '731',
        height: '1044',
    },
    {
        id: 'fb9ebf7b-c182-41ab-82b8-d13d0dd295ba',
        name: 'Mitutoyo',
        img: 'MITUTOYO-2018.webp',
        alt: 'sertificate',
        width: '600',
        height: '849',
    },
    {
        id: '0d588ce9-5c94-444f-ab09-37a484c595ed',
        name: 'Mos Build выставка',
        img: 'di-BI77AW.webp',
        alt: 'sertificate',
        width: '1000',
        height: '1409',
    },
    {
        id: 'ba9ac4d8-c384-4c47-90db-feb2927d2867',
        name: 'e3 Awwards',
        img: 'e3_1.webp',
        alt: 'sertificate',
        width: '921',
        height: '1317',
    },
    {
        id: '02e7b372-8f99-4b8e-9a11-19c1ce8697e6',
        name: 'Mos Build 2014',
        img: 'di-FWFUGM.webp',
        alt: 'sertificate',
        width: '1000',
        height: '1413',
    },
    {
        id: '5fe95c85-a14b-4c17-9e79-87972e15c9e7',
        name: 'ГОСТ ISO 9001-2008',
        img: '7232438.webp',
        alt: 'sertificate',
        width: '537',
        height: '768',
    },
    {
        id: '2b7b2392-92be-4815-ae14-bcc7adebeec9',
        name: 'ARTIS Srl',
        img: 'certificate-artis-2018-2021.webp',
        alt: 'sertificate',
        width: '700',
        height: '988',
    },
    {
        id: 'f1432052-e6a8-4195-8776-50429e0ea7b3',
        name: 'Душевая сантехника',
        img: 'byonsert.webp',
        alt: 'sertificate',
        width: '686',
        height: '899',
    },
    {
        id: '69272455-bc50-4a17-b07c-28eca4df0e1b',
        name: 'Арматура и сантехника',
        img: 'sertif_12_b.webp',
        alt: 'sertificate',
        width: '600',
        height: '845',
    },
    {
        id: 'd01ad9ca-dd2d-4a9d-b890-89ee1a75a2eb',
        name: 'Forbs & Company',
        img: 'totem_iso-9001_2008.webp',
        alt: 'sertificate',
        width: '700',
        height: '991',
    },
    {
        id: 'a0a5cdcb-5c23-4fee-9de7-ba80476bf271',
        name: 'Краны и смесители для кухонных моек',
        img: 'sertificate_2017.webp',
        alt: 'sertificate',
        width: '600',
        height: '829',
    },
    {
        id: '71b03119-6edb-466e-bb30-badc77163da0',
        name: 'Reginox approval',
        img: 'Certificaat_ISO_9001_2015.webp',
        alt: 'sertificate',
        width: '1178',
        height: '1689',
    },
    {
        id: 'cb6531ea-e714-47c3-b5ff-f0c0680bd313',
        name: 'Сертификат соответствия H08858',
        img: 'sertif_14_b.webp',
        alt: 'sertificate',
        width: '600',
        height: '844',
    },
];

const normalizedBrands = [
    {
        id: '9beff978-d656-4f5d-ad4f-cc27d0aba961',
        img: '/assets/brands/reginox.webp',
        alt: 'reginox',
        about: 'Reginox (Голандия) – Раковины и смесители',
        warranty: 'Reginox (Голандия) гарантия 6 лет',
        url: 'www.reginox.com',
    },
    {
        id: 'a56775bf-35af-46f7-aceb-ab9920a9cf20',
        img: '/assets/brands/webert.webp',
        alt: 'webert',
        about: 'Webert (Италия) – Премиальная сантехника',
        warranty: 'Webert (Италия) гарантия 5 лет',
        url: 'www.webert.com'
    },
    {
        id: '2185b9b1-ee0d-49aa-a16a-892135f722fc',
        img: '/assets/brands/rodi.webp',
        alt: 'rodi',
        about: 'Rodi (Франция) – Раковины из нержавеющей стали',
        warranty: 'Rodi (Франция) гарантия 8 лет',
        url: 'www.rodi.com'
    },
    {
        id: '8c6ccf48-e7a3-4e94-b8b2-2f901cffb3af',
        img: '/assets/brands/effepi.webp',
        alt: 'effepi',
        about: 'Effepi (Италия) – Сантехника из Италии',
        warranty: 'Effepi (Италия) гарантия 10 лет',
        url: 'www.effepi.com'
    },
    {
        id: 'e97622b6-2277-46ff-9dd5-e244881b9ff1',
        img: '/assets/brands/pitt.webp',
        alt: 'pitt',
        about: 'Pitt (Голандия) – встроенные газовые комфорки',
        warranty: 'Pitt (Голандия) гарантия 6 лет',
        url: 'www.pitt.com'
    },
    {
        id: '77a32f68-8cee-45a3-a794-8b98cba327f1',
        img: '/assets/brands/bone-crusher.webp',
        alt: 'bone crusher',
        about: 'Bone Crusher (Германия) – измельчители для раковин',
        warranty: 'Bone Crusher (Германия) гарантия 7 лет',
        url: 'www.bone-crusher.com'
    },
    {
        id: 'becbb844-7577-431c-9e85-050f26eebfa2',
        img: '/assets/brands/armando-vicario.webp',
        alt: 'armando vicario',
        about: 'armando-vicario (Италия) – кухни и душевые',
        warranty: 'Armando Vicario (Италия) гарантия 6 лет',
        url: 'www.armando-vicario.com'
    },
];

const normalizedArticles = [
    {
        id: 'b6c8448a-d78c-4702-9324-99adc728db97',
        name: 'Ontario — стильный дизайн и надежность!',
        date: { d:'16', m:'12', y:'19'},
        img: '/assets/articles/previews/article_1.webp',
        alt: 'ontario',
        url: 'ontario',
        wide: true,
    },
    {
        id: '0aa284e1-1393-43cd-8970-c50fb767e067',
        name: 'Уход за мойкой из нержавеющей стали',
        date: { d:'01', m:'04', y:'19' },
        img: '/assets/articles/previews/article_2.webp',
        alt: 'stainless-steel',
        url: 'stainless-steel',
    },
    {
        id: '2073284c-23fc-43dd-ab92-effe42dc20e2',
        name: 'История появления кухонных моек',
        date: { d:'12', m:'02', y:'20' },
        img: '/assets/articles/previews/article_3.webp',
        alt: 'history',
        url: 'history',
    },
    {
        id: 'b8e0a0fa-7236-4485-8ca3-111507db4244',
        name: 'Как удалить белые разводы с поверхности мойки и смесителя?',
        date: { d:'22', m:'08', y:'21' },
        img: '/assets/articles/previews/article_4.webp',
        alt: 'remove stains',
        url: 'remove-stains',
    },
    {
        id: '763fcd1b-817b-4142-9e7d-f6ef7639baff',
        name: 'История появления смесителей',
        date: { d:'04', m:'03', y:'19' },
        img: '/assets/articles/previews/article_5.webp',
        alt: 'history plumbing',
        url: 'history-plumbing',
    },


    {
      id: 'eb43e2cc-dd76-411e-ad3c-a8c7581271af',
      name: 'Ontario — стильный дизайн и надежность!',
      date: { d:'16', m:'12', y:'19'},
      img: '/assets/articles/previews/article_1.webp',
      alt: 'ontario',
      url: 'ontario',
  },
  {
      id: '6a7fa5a0-d603-452e-8672-f75220c66097',
      name: 'Уход за мойкой из нержавеющей стали',
      date: { d:'01', m:'04', y:'19' },
      img: '/assets/articles/previews/article_2.webp',
      alt: 'stainless-steel',
      url: 'stainless-steel',
  },
  {
      id: 'b4f1411d-c8f8-4c57-9886-9590ba86fdfd',
      name: 'История появления кухонных моек',
      date: { d:'12', m:'02', y:'20' },
      img: '/assets/articles/previews/article_3.webp',
      alt: 'history',
      url: 'history',
      wide: true,
  },
  {
      id: '556fa03c-265f-4791-bec3-9ea10807210b',
      name: 'Как удалить белые разводы с поверхности мойки и смесителя?',
      date: { d:'22', m:'08', y:'21' },
      img: '/assets/articles/previews/article_4.webp',
      alt: 'remove stains',
      url: 'remove-stains',
  },
  {
      id: '6b02f6c3-4ed7-40c8-b8d4-31b36a680caf',
      name: 'История появления смесителей',
      date: { d:'04', m:'03', y:'19' },
      img: '/assets/articles/previews/article_5.webp',
      alt: 'history plumbing',
      url: 'history-plumbing',
  },
  {
    id: '0fb934c5-f1d5-4d0c-aa9f-18df37cfd1fe',
    name: 'Ontario — стильный дизайн и надежность!',
    date: { d:'16', m:'12', y:'19'},
    img: '/assets/articles/previews/article_1.webp',
    alt: 'ontario',
    url: 'ontario',
},
{
    id: '776b1e7a-f502-41c4-9993-7ecd7a031d0b',
    name: 'Уход за мойкой из нержавеющей стали',
    date: { d:'01', m:'04', y:'19' },
    img: '/assets/articles/previews/article_2.webp',
    alt: 'stainless-steel',
    url: 'stainless-steel',
},
{
    id: '53a2607f-4e3f-49d9-b79e-990b109696d2',
    name: 'История появления кухонных моек',
    date: { d:'12', m:'02', y:'20' },
    img: '/assets/articles/previews/article_3.webp',
    alt: 'history',
    url: 'history',
    wide: true,
},
{
    id: '2b6eade0-eca4-4177-a433-917ef2dc225c',
    name: 'Как удалить белые разводы с поверхности мойки и смесителя?',
    date: { d:'22', m:'08', y:'21' },
    img: '/assets/articles/previews/article_4.webp',
    alt: 'remove stains',
    url: 'remove-stains',
},
{
    id: 'd46452fd-6f7e-4613-82a8-89fee2254a54',
    name: 'История появления смесителей',
    date: { d:'04', m:'03', y:'19' },
    img: '/assets/articles/previews/article_5.webp',
    alt: 'history plumbing',
    url: 'history-plumbing',
},
{
  id: '0bedf91d-589a-41b1-83ab-3278d4beec4e',
  name: 'Ontario — стильный дизайн и надежность!',
  date: { d:'16', m:'12', y:'19'},
  img: '/assets/articles/previews/article_1.webp',
  alt: 'ontario',
  url: 'ontario',
},
{
  id: '6434c552-c292-4a0a-aa19-cd2f6907cd8f',
  name: 'Уход за мойкой из нержавеющей стали',
  date: { d:'01', m:'04', y:'19' },
  img: '/assets/articles/previews/article_2.webp',
  alt: 'stainless-steel',
  url: 'stainless-steel',
},
{
  id: 'e02841f2-aed5-4c0d-b3a9-cbccbb12f3eb',
  name: 'История появления кухонных моек',
  date: { d:'12', m:'02', y:'20' },
  img: '/assets/articles/previews/article_3.webp',
  alt: 'history',
  url: 'history',
  wide: true,
},
{
  id: '87dd5f29-7fe5-41d4-8103-e303db258d86',
  name: 'Как удалить белые разводы с поверхности мойки и смесителя?',
  date: { d:'22', m:'08', y:'21' },
  img: '/assets/articles/previews/article_4.webp',
  alt: 'remove stains',
  url: 'remove-stains',
},
{
  id: 'd875df76-d332-4b3c-bc97-078fa64b998a',
  name: 'История появления смесителей',
  date: { d:'04', m:'03', y:'19' },
  img: '/assets/articles/previews/article_5.webp',
  alt: 'history plumbing',
  url: 'history-plumbing',
},
{
  id: '4a95cba7-aeec-408e-bf6a-15685516b08d',
  name: 'Ontario — стильный дизайн и надежность!',
  date: { d:'16', m:'12', y:'19'},
  img: '/assets/articles/previews/article_1.webp',
  alt: 'ontario',
  url: 'ontario',
  wide: true,
},
{
  id: '019c717a-1eac-4244-9533-51b8736e03f4',
  name: 'Уход за мойкой из нержавеющей стали',
  date: { d:'01', m:'04', y:'19' },
  img: '/assets/articles/previews/article_2.webp',
  alt: 'stainless-steel',
  url: 'stainless-steel',
},
{
  id: '1ba2d709-5055-4d70-9121-30ae4499ceeb',
  name: 'История появления кухонных моек',
  date: { d:'12', m:'02', y:'20' },
  img: '/assets/articles/previews/article_3.webp',
  alt: 'history',
  url: 'history',
},
{
  id: '268d983c-0adb-4698-a3bb-8947fa364897',
  name: 'Как удалить белые разводы с поверхности мойки и смесителя?',
  date: { d:'22', m:'08', y:'21' },
  img: '/assets/articles/previews/article_4.webp',
  alt: 'remove stains',
  url: 'remove-stains',
},
{
  id: '19b512e1-1ea7-49bb-b6ce-16328e8520d5',
  name: 'История появления смесителей',
  date: { d:'04', m:'03', y:'19' },
  img: '/assets/articles/previews/article_5.webp',
  alt: 'history plumbing',
  url: 'history-plumbing',
},
{
  id: 'c2182b5d-f710-400a-8ebc-2ef0dc478493',
  name: 'Ontario — стильный дизайн и надежность!',
  date: { d:'16', m:'12', y:'19'},
  img: '/assets/articles/previews/article_1.webp',
  alt: 'ontario',
  url: 'ontario',
},
{
  id: 'f9d9e986-a178-4d85-b3d4-23ca0e6fc0cd',
  name: 'Уход за мойкой из нержавеющей стали',
  date: { d:'01', m:'04', y:'19' },
  img: '/assets/articles/previews/article_2.webp',
  alt: 'stainless-steel',
  url: 'stainless-steel',
},
{
  id: '737a83d6-56ee-46fc-b2af-b0c9101382f2',
  name: 'История появления кухонных моек',
  date: { d:'12', m:'02', y:'20' },
  img: '/assets/articles/previews/article_3.webp',
  alt: 'history',
  url: 'history',
  wide: true,
},
{
  id: 'e715d10f-14e3-4287-8cc4-da29b8d09918',
  name: 'Как удалить белые разводы с поверхности мойки и смесителя?',
  date: { d:'22', m:'08', y:'21' },
  img: '/assets/articles/previews/article_4.webp',
  alt: 'remove stains',
  url: 'remove-stains',
},
{
  id: '2543d436-d0da-4b17-8cd2-3c82950e07d2',
  name: 'История появления смесителей',
  date: { d:'04', m:'03', y:'19' },
  img: '/assets/articles/previews/article_5.webp',
  alt: 'history plumbing',
  url: 'history-plumbing',
},
{
  id: 'e4f28c35-9750-4fb5-b074-14052e6611cc',
  name: 'Ontario — стильный дизайн и надежность!',
  date: { d:'16', m:'12', y:'19'},
  img: '/assets/articles/previews/article_1.webp',
  alt: 'ontario',
  url: 'ontario',
  wide: true,
},
{
  id: 'f8c913a5-c007-488f-8950-6c94018f089e',
  name: 'Уход за мойкой из нержавеющей стали',
  date: { d:'01', m:'04', y:'19' },
  img: '/assets/articles/previews/article_2.webp',
  alt: 'stainless-steel',
  url: 'stainless-steel',
},
{
  id: '84ae2216-1adc-4a21-a127-9db8280221f3',
  name: 'История появления кухонных моек',
  date: { d:'12', m:'02', y:'20' },
  img: '/assets/articles/previews/article_3.webp',
  alt: 'history',
  url: 'history',
},
{
  id: 'f4d09c57-fd64-454c-839e-25586903bdb9',
  name: 'Как удалить белые разводы с поверхности мойки и смесителя?',
  date: { d:'22', m:'08', y:'21' },
  img: '/assets/articles/previews/article_4.webp',
  alt: 'remove stains',
  url: 'remove-stains',
},
{
  id: '4a95d230-4330-4719-b924-3def92ad8c04',
  name: 'История появления смесителей',
  date: { d:'04', m:'03', y:'19' },
  img: '/assets/articles/previews/article_5.webp',
  alt: 'history plumbing',
  url: 'history-plumbing',
},
];

const articlesItems = {
  'ontario' : {
    title: 'Ontario — стильный дизайн и надежность!',
    date: { d:'16', m:'12', y:'19' },
    content: [
      {
        type: 'article',
        entities: [
            {type:'b', text: 'Кухонные мойки серии Ontario – оригинальный элемент для кухни любого стиля. Сварная чаша выполнена из миллиметровой полированной нержавеющей стали 304 категории 18/10, что гарантирует необходимые для кухонной зоны гигиенические свойства и безопасность. Радиус угла чаши 0мм, что делает ее форму сдержанной и брутальной. Идеальная обработка швов – гарантия долговечной эксплуатации мойки.'},
            {type: 'p', text: 'Если при получении товара внешний вид, количество, качество и иные характеристики устраивают покупателя, то он расписывается на товарном чеке (товарной накладной), передает денежные средства водителю-экспедитору и получает товар. Оплата покупки осуществляется наличными средствами в рублях.'}
          ],
      },
      {
        type: 'Image',
        entities: [
            {url: '/assets/articles/ontario/ontario_1.webp', alt: 'ontario'},
            {url: '/assets/articles/ontario/ontario_2.webp', alt: 'ontario'},
        ]
      },
      {
        type: 'article',
        entities: [
          {type: 'p', text: 'Если при получении товара внешний вид, количество, качество и иные характеристики устраивают покупателя, то он расписывается на товарном чеке (товарной накладной), передает денежные средства водителю-экспедитору и получает товар. Оплата покупки осуществляется наличными средствами в рублях.'},
          {type: 'p', text: 'Если при получении товара внешний вид, количество, качество и иные характеристики устраивают покупателя, то он расписывается на товарном чеке (товарной накладной), передает денежные средства водителю-экспедитору и получает товар. Оплата покупки осуществляется наличными средствами в рублях.'}
        ]
      },
      {
        type: 'Image',
        entities: [
            {url: '/assets/articles/ontario/ontario_3.webp', alt: 'ontario'},
        ]
      },
      {
        type: 'article',
        entities: [
          {type: 'p', text: 'Если при получении товара внешний вид, количество, качество и иные характеристики устраивают покупателя, то он расписывается на товарном чеке (товарной накладной), передает денежные средства водителю-экспедитору и получает товар. Оплата покупки осуществляется наличными средствами в рублях.'},
        ]
      },
      {
        type: 'Image',
        entities: [
            {url: '/assets/articles/ontario/ontario_4.webp', alt: 'ontario'},
            {url: '/assets/articles/ontario/ontario_5.webp', alt: 'ontario'},
            {url: '/assets/articles/ontario/ontario_6.webp', alt: 'ontario'},
        ]
      },
      {
        type: 'article',
        entities: [
          {type: 'p', text: 'Если при получении товара внешний вид, количество, качество и иные характеристики устраивают покупателя, то он расписывается на товарном чеке (товарной накладной), передает денежные средства водителю-экспедитору и получает товар. Оплата покупки осуществляется наличными средствами в рублях.'},
        ]
      },
      {
        type: 'Image',
        entities: [
            {url: '/assets/articles/ontario/ontario_7.webp', alt: 'ontario'},
        ]
      },
      {
        type: 'article',
        entities: [
          {type: 'p', text: 'Если при получении товара внешний вид, количество, качество и иные характеристики устраивают покупателя, то он расписывается на товарном чеке (товарной накладной), передает денежные средства водителю-экспедитору и получает товар. Оплата покупки осуществляется наличными средствами в рублях.'},
        ]
      },
    ]
  },
  'stainless-steel' : {
    title: 'Уход за мойкой из нержавеющей стали',
    date: { d:'01', m:'04', y:'19' },
    content: [
      {
        type: 'article',
        entities: [
            {type: 'b', text: 'Любая вещь, если это не музейный экспонат, несет на себе следы пользования. Новая стальная мойка выглядит очень эффектно, но как бы бережно вы к ней ни относились, со временем неизбежно возникают микроцарапины. Они почти незаметны, но могут здорово раздражать перфекционистов.'},
            {type: 'p', text: 'Прелесть стальной мойки заключается и в том, что сияние полированного металла можно сохранить на долгие годы. Проще всего ухаживать за моделями с гладкой зеркальной полировкой, мойки с матовой обработкой потребуют большей аккуратности, внимания и терпения.'},
          ],
      },
      {
        type: 'Image',
        entities: [
            {url: '/assets/articles/stainless-steel/stainless_steel_1.webp', alt: 'ontario'},
        ]
      },
      {
        type: 'article',
        entities: [
          {type: 'b', text: 'Типичные проблемы в уходе за стальной мойкой'},
          {type: 'ul', list: [
            'Мойка может потерять блеск из-за оседания солей жесткости после испарения воды, использования мылосодержащих моющих веществ, жира и других трудносмываемых загрязнений (чай, кофе, сок овощей и фруктов и пр.). Соли чаще всего сильнее откладываются вокруг корпуса смесителя, в сопряжениях между фактурными элементами мойки — в местах, где отток воды затруднен.',
            'Темные пятна могут появиться после применения агрессивных чистящих средств для удаления известкового налета. В них содержатся сильные кислоты, которые протравливают сталь.',
            'Следы ржавчины на качественных мойках могут возникнуть только в местах контакта с сильноокисляющимися изделиями из металла или в виде потеков, если водопроводная вода содержит высокую концентрацию железа. Сама стальная мойка заржаветь не может.',
            'Микроцарапины не связаны с ошибками в уходе и возникают неизбежно. Изделия из настоящей качественной нержавеющей стали противостоят микроповреждениям лучше дешевых. Чтобы снизить видимость царапинок, производители предлагают мойки с однонаправленной шлифовкой.',
          ]},
        ]
      },
      {
        type: 'Image',
        entities: [
            {url: '/assets/articles/stainless-steel/stainless_steel_2.webp', alt: 'ontario'},
        ]
      },
      {
        type: 'article',
        entities: [
            {type: 'b', text: 'Простой способ очистить мойку'},
            {type: 'p', text: 'Важно: мойки с гладкой полировкой можно обрабатывать круговыми движениями, но мойки с матовой поверхностью необходимо чистить только вдоль линий заводской шлифовки.'},
            {type: 'p', text: 'Возьмите жидкое средство для мытья посуды. Смочите губку, насыпьте на нее немного лимонной кислоты и потрите края губки между собой, чтобы гранулы начали растворяться. Чистите мойку обычным способом. Если речь идет о помутнении поверхности из-за известкового налета, проблема решается буквально за считанные секунды. Если есть серьезные отложения, оставьте средство на несколько минут, проверьте результат, при необходимости повторите обработку. Хорошо обмойте мойку водой и насухо протрите мягкой тканью.'},
          ],
      },
      {
        type: 'article',
        entities: [
            {type: 'b', text: 'Способы борьбы с микроцарапинами на стальных мойках'},
            {type: 'p', text: 'Отметим, что микроцарапины и темные пятна из-за воздействия агрессивных средств — случаи не гарантийные. Что делать, если следы эксплуатации стали слишком заметными?'},
            {type: 'p', text: 'Производители бытовой химии предлагают множество средств для ухода за стальными поверхностями. Однако они служат лишь для маскировки имеющихся недостатков и защиты от возникновения новых. Именно недопонимание этого момента приводит к разочарованиям.'},
            {type: 'p', text: 'Самый доступный вариант для удаления царапинок и темных пятен — мягкая шлифовка. В домашних условиях можно использовать обычную зубную пасту, которая выполняет роль щадящего абразива. Если проблема серьезнее, подойдет паста ГОИ №2 (для шлифовки) или №1 (для полировки).'},
            {type: 'p', text: 'Паста наносится на фетр или войлок. Гладкую поверхность следует обрабатывать круговыми движениями, которые перекрывают друг друга. Матовую — возвратно-поступательными движениями вдоль по заводской шлифовке, переходя с вертикальной на горизонтальную и на противоположную вертикальную поверхность. Время от времени состав стирают сухой мягкой тканью типа микрофибры для проверки результата. Если проблема решена или стала менее заметной, мойку тщательно промывают с использованием моющего средства и вытирают насухо.'},
            {type: 'p', text: 'Восстановить первоначальный вид стальной мойки из нержавеющей стали можно. Если бы это было не так, то и другие предметы из стали не подлежали бы шлифовке и полировке. Вопрос лишь в желании и терпении.'},
          ],
      },
      {
        type: 'Image',
        entities: [
            {url: '/assets/articles/stainless-steel/stainless_steel_3.webp', alt: 'ontario'},
        ]
      },
    ]
  },
  'history' : {
    title: 'История появления кухонных моек',
    date: { d:'12', m:'02', y:'20' },
    content: [
      {
        type: 'article',
        entities: [
            {type: 'p', text: 'Невозможно представить себе кухонное помещение без мойки. Это будет примерно то же, что кухня без печки. И действительно, история умывальников насчитывает не одну тысячу лет. Сегодня кухонные мойки и их собратья умывальники играют особую роль в создании интерьеров и являются гордостью дизайнерских домов. Они могут иметь причудливые футуристические формы, быть похожими на предмет из дворцовой уборной, а могут быть эргономичными и ультрасовременными.'},
          ],
      },
      {
        type: 'Image',
        entities: [
            {url: '/assets/articles/history/history_1.webp', alt: 'history'},
            {url: '/assets/articles/history/history_2.webp', alt: 'history'},
            {url: '/assets/articles/history/history_3.webp', alt: 'history'},
        ]
      },
      {
        type: 'article',
        entities: [
            {type: 'b', text: 'Этапы большого пути'},
            {type: 'p', text: 'Первыми из многочисленного семейства моек, умывальников и рукомойников появились раковины, названные так из-за сходства со створкой большой ракушки. Уже во времена правления царя Соломона существовали раковины, высеченные из камня, а также в качестве умывальников использовались бронзовые чаши. Еще более древние устройства, похожие на умывальники, были найдены археологами на территории Сирии. Эти предметы были изготовлены примерно за полторы тысячи лет до нашей эры.'},
            {type: 'p', text: 'В 18 веке на территории Европы (Англия, Франция, Германия) были широко распространены глазированные умывальники, изготовленные из глины со специальными примесями. Такие мойки, установленные на стойку, уже были похожи на современные раковины. В 19 веке умывальники начали устанавливать на шкафчиках, в которых можно было хранить различную утварь.'},
            {type: 'p', text: 'Кухонные мойки 21 века можно назвать настоящим произведением искусства. Их изготавливают по дизайнерским проектам из искусственного и натурального камня, нержавеющей стали, различных композитных материалов. Оснащенные функциональными смесителями, фильтрами для воды, сушилками, подсветкой, разнообразными атрибутами и множеством вспомогательных комплектующих, они являют собой и настоящее чудо техники.'},
          ],
      },
    ]
  },
  'remove-stains' : {
    title: 'Как удалить белые разводы с поверхности мойки и смесителя?',
    date: { d:'22', m:'08', y:'21' },
    content: [
      {
        type: 'article',
        entities: [
            {type: 'p', text: 'Во время уборки многие сталкиваются с такой проблемой, как наличие белых разводов на поверхности раковины и смесителя. Порой приходится приложить много усилий и финансов, чтобы подобрать подходящее средство, которое способно очистить кухонную мойку Reginox. Однако практически в каждом доме есть дешёвое и эффективное вещество, которое за считанные минуты поможет справиться с данной проблемой - это обыкновенная зубная паста. Нанесите её на проблемные места при помощи обратной стороны губки для посуды, тщательно обработав все загрязнённые участки, а затем удалите состав при помощи воды. Насухо протрите мойку и смеситель мягкой тканью и наслаждайтесь первозданным блеском изделий.'},
            {type: 'p', text: 'Также существуют альтернативные подручные вещества для борьбы с загрязнениями. Например, белые пятна помогут вывести спирт, жидкость для очистки окон, изготовленная на его основе, или лимонный сок.'},
            {type: 'p', text: 'Для латунных изделий хорошо подойдёт смесь из муки, поваренной соли и столового уксуса. Соедините сухие ингредиенты в соотношении 1 к 1 и разбавьте жидкостью до пастообразной консистенции. Нанесите на загрязнённые поверхности, дайте высохнуть и протрите тряпкой.'},
          ],
      },
      {
        type: 'Image',
        entities: [
          {url: '/assets/articles/remove-stains/remove_stains_1.webp', alt: 'remove stains'},
          {url: '/assets/articles/remove-stains/remove_stains_2.webp', alt: 'remove stains'},
          {url: '/assets/articles/remove-stains/remove_stains_3.webp', alt: 'remove stains'},
        ]
      },
      {
        type: 'article',
        entities: [
            {type: 'p', text: 'Очистить краны из никеля поможет смесь из нашатырного спирта и зубного порошка. Соедините вещества, чтобы получилась густая масса, покройте проблемные участки и оставьте на 15-20 минут. Затем удалите её при помощи мягкой ткани. Существует ряд мер, которые следует предпринимать, чтобы сохранить блеск сантехники.'},
          ],
      },
      {
        type: 'Image',
        entities: [
          {url: '/assets/articles/remove-stains/remove_stains_4.webp', alt: 'remove stains'},
        ]
      },
    ]
  },
  'history-plumbing' : {
    title: 'История появления смесителей',
    date: { d:'04', m:'03', y:'19' },
    content: [
      {
        type: 'article',
        entities: [
            {type: 'b', text: 'Прообраз'},
            {type: 'p', text: 'Попытку изобрести смеситель предприняли еще в Древней Греции. Изобретатель Герон разработал конструкцию, представляющую собой металлическую трубку, подачу воды через которую ограничивал встроенный рычаг-поршень. Позже древние римляне также использовали этот механизм, изменив лишь его эстетические качества. Теперь смесители изготавливались из латуни, обладали более изящной формой, и на них наносился орнамент.'},
            {type: 'p', text: 'После падения великих древних цивилизаций конструкция смесителя была на время забыта. О ней вспомнили только в Средневековье, после волны эпидемий, захлестнувших Европу. Люди снова начали уделять внимание личной гигиене, однако позволить себе купить смеситель могли только состоятельные семьи.'},
            {type: 'b', text: 'Качественный прорыв'},
            {type: 'p', text: 'Революцию произвел английский изобретатель Джозеф Брама в 1783 году. Его смеситель состоял из трех кранов с винтовым механизмом. В XIX веке Алессандро Вольта изобрел хромирование, что позволило значительно удешевить продукцию. Создать удобную в монтаже и использовании модель и запустить серийное производство удалось Уильяму Томсону в начале XX века. Именно он придумал двухвентильную конструкцию. В это время позволить себе смеситель могли даже семьи со средним уровнем достатка.'},
            {type: 'p', text: 'В 1954 году американец Алекс Манукян разработал однорычажный механизм, который сразу же приобрел большую популярность. В 70-е годы прошлого века целый ряд компаний по всему миру выпускал монокомандные модели с картриджами, которые были оснащены либо резиновыми уплотнителями, либо керамическими дисками. Дизайн смесителя менялся соответственно духу времени. Так в 80-е годы XX века, в период хиппи, большой популярностью пользовалось цветное покрытие вместо хромированного.'},
            {type: 'b', text: 'Совершенству нет предела'},
            {type: 'p', text: 'В 1990-е мир охватил научно-технический прогресс, и появились электронные и сенсорные модели. Разработки в этой области не прекращаются, создаются механизмы, которые полностью отвечают требованиям современного человека. Например, смеситель Omoikiri – яркий представитель своей эпохи. Благодаря широкому ассортименту каждый может выбрать подходящий дизайн и комплектацию.'},
          ],
      },
      {
        type: 'Image',
        entities: [
          {url: '/assets/articles/history-plumbing/history-plumbing.webp', alt: 'history plumbing'},
        ]
      },
    ]
  },
};

module.exports = {
  catalog: normalizedCatalog,
  home: normalizedHome,
  catalogs: normalizedCatalogs,
  sertificates: normalizedSertificates,
  brands: normalizedBrands,
  articles: normalizedArticles,
  articlesItems: articlesItems
};
