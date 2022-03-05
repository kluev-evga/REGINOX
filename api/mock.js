const normalizedCatalog = [
  {
    id: '0015bfc8-c63a-45f7-ad67-4d16dc608bf9',
    img: './assets/catalog/sinks.webp',
    alt: 'sinks',
    name: 'Мойки',
    url: 'sinks',
    categories: [
      {
          id:'51add9b1-f5e7-4763-ab9f-caf1b2830bf6',
          name: 'Нержавеющая сталь',
          url: 'sinks-stainless-steel'
      },
      {
          id: '66516e54-1ddd-451f-91d7-5b176e6525cd',
          name: 'Гранит и керамика',
          url: 'sinks-porcelain'
      },
      {
          id: '195a7a5b-fa72-4ac0-a9f2-af6ab3faf752',
          name: 'PVD покрытие',
          url: 'sinks-coated'
      }
    ],
  },
  {
    id: '4e24f752-0707-4d03-9fb7-b736926e6220',
    img: './assets/catalog/taps.webp',
    alt: 'taps',
    name: 'Смесители',
    url: 'taps',
    categories: [
      {
          id:'bb5497f5-404c-4778-b837-2c8f80a99b5c',
          name: 'Встроенные',
          url: 'taps-insink'
      },
      {
          id:'c70f9b05-2d3e-488d-a4c2-551a00f49034',
          name: 'Сенсорные',
          url: 'taps-sensor'
      },
      {
          id:'2514ddec-9325-4e55-97e4-bb87ae7b145f',
          name: 'Ванны и душевые кабины',
          url: 'taps-shower'
      },
      {
          id:'889cb640-e39d-446d-85fc-bb940d2fda75',
          name: 'Биде и гигиенический душ',
          url: 'taps-sanitary'
      },
    ],
  },
  {
    id: 'd70990e4-4854-4aee-85ff-77e966658bfd',
    img: './assets/catalog/range.webp',
    alt: 'range',
    name: 'Плиты',
    url: 'ranges',
    categories: [
      {
        id:'b272effb-72dc-49f4-8b57-7e669cc826f2',
        name: '1 конфорка',
        url: 'range-single'
      },
      {
        id:'75a0d253-858e-441e-95fe-9a239dea2b5c',
        name: '2 конфорки',
        url: 'range-double'
      },
      {
        id:'b24571d9-392c-4c4b-b8fc-e29792be7931',
        name: '3 конфорки',
        url: 'range-triple'
      },
      {
        id:'f728d8ce-39d5-4875-8528-b274b282f43b',
        name: '4 конфорки',
        url: 'range-4-way'
      },
      {
        id:'a54b08ae-2346-4cfe-b572-2f501b92fbb6',
        name: '5 конфорок',
        url: 'range-5-way'
      },
      {
        id:'7a376198-a3d6-4c34-8ba6-505346e6c04c',
        name: '6 конфорок',
        url: 'range-6-way'
      },
    ],
  },
  {
    id: '732d59a1-5f70-4e20-8abf-c16ee4eb602f',
    img: './assets/catalog/washstands.webp',
    alt: 'washstands',
    name: 'Умывальники',
    url: 'washstands',
    categories: [
      {
        id:'0437b4c5-745d-4711-8580-12254a64fe40',
        name: 'Нержавеющая сталь',
        url: 'washstands-stainless-steel'
      },
      {
        id:'2ef54586-9e08-4a76-8a7a-fae8924c2c43',
        name: 'Окрашенные (Regi Color)',
        url: 'washstands-porcelain'
      },
    ],
  },
  {
    id: 'f751f8eb-94d4-4c37-a37c-62aba74cee42',
    img: './assets/catalog/accessories.webp',
    alt: 'accessories',
    name: 'Аксессуары',
    url: 'accessories',
    categories: [
      {
        id:'eb17d85e-afb5-4f91-966f-f51fb919f48f',
        name: 'Разделочные доски',
        url: 'accessories-boards'
      },
      {
        id:'5b315c5f-9968-4da9-878d-ad6726075d08',
        name: 'Корзины',
        url: 'accessories-baskets'
      },
      {
        id:'a043950c-ed1d-4cba-9e3a-90bbd8b1f198',
        name: 'Коландеры',
        url: 'accessories-dishwasher-bins'
      },
      {
        id:'50ae5416-4328-40e3-9c9c-287ecc529653',
        name: 'Решетки на дно/поддоны',
        url: 'accessories-pans'
      },
      {
        id:'1e8e85f6-3537-4bd0-95fe-4cf6910efe74',
        name: 'Адаптеры и комплектующие',
        url: 'accessories-adapters'
      },
      {
        id:'f32fb974-4452-420a-bd9b-f981e8ec2737',
        name: 'Сифоны',
        url: 'accessories-siphons'
      },
    ],
  },
  {
    id: 'c5ce17f1-0488-487c-8200-6fec72cc4caa',
    img: './assets/catalog/countertops.webp',
    alt: 'storage Manhattan',
    name: 'Системы хранения Manhattan',
    url: 'storage-manhattan',
    categories: [
      {
        id:'27a15135-eb8b-43fd-b7c6-2f48ca8a29ce',
        name: 'Manhattan',
        url: 'storage-Manhattan'
      },
      {
        id:'818c9ecf-b01a-4bab-a05d-39efef92a940',
        name: 'Manhattan Slim',
        url: 'storage-manhattan-slim'
      },
      {
        id:'f61a40ff-b1ec-422b-9dc7-298aa07ad142',
        name: 'Комплекты Manhattan',
        url: 'storage-manhattan-kits'
      },
    ],
  },
  {
    id: '5c9bca2d-13a8-4df3-91a2-cb51b8f36268',
    img: './assets/catalog/muscellaneous.webp',
    alt: 'muscellaneous',
    name: 'Другая продукция',
    url: 'muscellaneous',
    categories: [
      {
        id:'1a73e2d3-9251-4802-a1ba-43b7736cfc40',
        name: 'Мойки Rodi (Португалия)',
        url: 'muscellaneous-rodi'
      },
      {
        id:'5c9ddcc9-a8a4-4636-b3dc-d0dad836ac5c',
        name: 'Мойки Whinstone (Россия)',
        url: 'muscellaneous-whinstone'
      },
      {
        id:'cb991988-a9c1-4868-8728-8cfe83e74c3f',
        name: 'Мойки Rerih (Италия)',
        url: 'muscellaneous-rerih'
      },
      {
        id:'1d5eee99-411b-422c-8fc6-a0b0b3c68ffe',
        name: 'Мойки Status (Италия)',
        url: 'muscellaneous-status'
      },
      {
        id:'eac17246-d98c-4039-bfbf-779b7f82d9ca',
        name: 'Смесители Armando Vicario (Италия)',
        url: 'muscellaneous-armando-vicario'
      },
      {
        id:'d6e0c4b1-ee3f-43fd-a3af-a285e7d60c45',
        name: 'Смесители Webert (Италия)',
        url: 'muscellaneous-tap-webert'
      },
      {
        id:'b9dd3887-bf69-479e-aefa-2dd7e23521a6',
        name: 'Смесители Effepi (Италия)',
        url: 'muscellaneous-effepi'
      },
      {
        id:'a91bf15b-732a-444e-bce8-33a385da4f11',
        name: 'Умывальники Webert (Италия)',
        url: 'muscellaneous-washstands-webert'
      },
      {
        id:'5aab6d2e-752d-4491-aaad-79afa1c4c5a9',
        name: 'Аксессуары Webert (Италия)',
        url: 'muscellaneous-accessories-webert'
      },
      {
        id:'a042edd2-59b5-4224-9839-32c0cc6eb51a',
        name: 'Аксессуары Glionna Bagno (Италия)',
        url: 'muscellaneous-glionna-bagno'
      },
      {
        id:'8465f857-3c4f-4991-96f8-ff4080610f6f',
        name: 'Аквафор (Россия)',
        url: 'muscellaneous-aquafor'
      },
    ],
  },
  {
    id: '0f20d5f3-bcf7-447b-88af-97899e6815a7',
    img: './assets/catalog/garbagedisposers.webp',
    alt: 'garbagedisposers',
    name: 'Измельчители Bone Crusher',
    url: 'garbage-disposers',
    categories: [],
  },
  {
    id: '2889d9d0-3a37-4593-9415-434ee08649d2',
    img: './assets/catalog/storage.webp',
    alt: 'storage',
    name: 'Дозаторы',
    url: 'soap-dispensers',
    categories: [],
  },
];

const normalizedHome = {
  slider: [
    {
      id: 'a70a9dec-aa45-46ea-9823-c5fc8ba651c3',
      title: 'Мойки, смесители и аксессуары',
      subtitle: 'от ведущего производителя сантехники для кухни Reginox',
      img: './assets/slider/slide-sinks.webp',
      alt: 'slide sinks',
      url: '/products/sinks',
      titleLink: 'Встраиваемые газовые плиты',
      imgLink: './assets/slider/link-sinks.webp',
      altLink: 'раковины',
    },
    {
        id: 'ea137ef0-01e6-43e6-89a8-bf21147ea295',
        title: 'Газовые конфорки PiTT',
        subtitle: 'встраиваемые системы от производителя из голандии',
        img: './assets/slider/slide-ranges.webp',
        alt: 'slide sinks',
        url: '/products/ranges',
        titleLink: 'Газовые конфорки PiTT',
        imgLink: './assets/slider/link-ranges.webp',
        altLink: 'плиты',
    },
    {
        id: '05f7d4c0-2acb-4c4b-989d-3a3046bb1d89',
        title: 'Умывальники и краны для раковин',
        subtitle: 'мультирычажные и сенсорные системы Reginox',
        img: './assets/slider/slide-washstands.webp',
        alt: 'slide sinks',
        url: '/products/washstands',
        titleLink: 'Умывальники и краны для раковин',
        imgLink: './assets/slider/link-washstands.webp',
        altLink: 'умывальники',
    },
    {
        id: '6480b394-f8d5-4965-97c0-354cc1702c72',
        title: 'системы хранения manhattan ',
        subtitle: 'встраиваемые кухонные системы европейского качества',
        img: './assets/slider/slide-manhattan.webp',
        alt: 'slide sinks',
        url: '/products/storage-manhattan',
        titleLink: 'системы хранения manhattan',
        imgLink: './assets/slider/link-manhattan.webp',
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
        id: '1932e990-9531-4b09-9e44-5646bad6eabb',
        name: 'Каталог январь 2021',
        img: './assets/catalogs/catalog_jan_22.webp',
        alt: 'Каталог январь 2021',
        url: './assets/catalogs/catalog_jan_21.pdf'
    },
    {
        id: '0d30670e-e760-4c73-834f-38b54d4c1ceb',
        name: 'Каталог февраль 2021',
        img: './assets/catalogs/catalog_feb_22.webp',
        alt: 'Каталог февраль 2021',
        url: './assets/catalogs/catalog_jan_21.pdf'
    },
    {
        id: 'ba72e4fa-f646-41b4-bb70-5af52cf0b397',
        name: 'Каталог март 2021',
        img: './assets/catalogs/catalog_mar_22.webp',
        alt: 'Каталог март 2021',
        url: './assets/catalogs/catalog_jan_21.pdf'
    },
    {
      id: '56d9bd00-4e7f-429b-b87e-9244a8e38dbc',
        name: 'Каталог апрель 2021',
        img: './assets/catalogs/catalog_apr_22.webp',
        alt: 'Каталог апрель 2021',
        url: './assets/catalogs/catalog_jan_21.pdf'
    },
    {
        id: '15deb6ac-6ed5-4baa-a58f-0c34755a943d',
        name: 'Каталог май 2021',
        img: './assets/catalogs/catalog_may_22.webp',
        alt: 'Каталог май 2021',
        url: './assets/catalogs/catalog_jan_21.pdf'
    },
    {
        id: '5c8c6656-4889-4571-9b84-3449d8d33089',
        name: 'Каталог июнь 2021',
        img: './assets/catalogs/catalog_jun_22.webp',
        alt: 'Каталог июнь 2021',
        url: './assets/catalogs/catalog_jan_21.pdf'
    },
    {
        id: 'ef8c3257-de32-498e-9f66-9e4510c89dbc',
        name: 'Каталог июль 2021',
        img: './assets/catalogs/catalog_jul_22.webp',
        alt: 'Каталог июль 2021',
        url: './assets/catalogs/catalog_jan_21.pdf'
    },
    {
        id: '9803c494-efe7-409a-82a5-d065c17ad66b',
        name: 'Каталог август 2021',
        img: './assets/catalogs/catalog_aug_22.webp',
        alt: 'Каталог август 2021',
        url: './assets/catalogs/catalog_jan_21.pdf'
    },
    {
        id: 'da8bd025-96ee-43af-8197-8a28c93c3a46',
        name: 'Каталог сентябрь 2021',
        img: './assets/catalogs/catalog_sep_22.webp',
        alt: 'Каталог сентябрь 2021',
        url: './assets/catalogs/catalog_jan_21.pdf'
    },
    {
        id: '2e01ece7-06d4-42a7-aaa6-92a554842aa4',
        name: 'Каталог октябрь 2021',
        img: './assets/catalogs/catalog_oct_22.webp',
        alt: 'Каталог октябрь 2021',
        url: './assets/catalogs/catalog_jan_21.pdf'
    },
];

module.exports = {
  catalog: normalizedCatalog,
  home: normalizedHome,
  catalogs: normalizedCatalogs,
};
