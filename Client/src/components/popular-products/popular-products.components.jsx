const img = '/assets/products/product_1.jpg';
const img2 = '/assets/products/product_2.jpg';
const img3 = '/assets/products/product_3.jpg';
const img4 = '/assets/products/product_4.jpg';
const img5 = '/assets/products/product_5.jpg';
const img6 = '/assets/products/product_6.jpg';


const data = [
    {
        image: img,
        alt: 'product',
        name: 'Amsterdam 25 Dark chocolate',
        price: '9 950 руб'
    },
    {
        image: img2,
        alt: 'product',
        name: 'YADKIN K1065K black',
        price: '31 000 руб'
    },
    {
        image: img3,
        alt: 'product',
        name: 'Diplomat R 20 lux',
        price: '17 000 руб'
    },
    {
        image: img4,
        alt: 'product',
        name: 'Столешница WAFELBLAD R00939',
        price: '47 520 руб'
    },
    {
        image: img5,
        alt: 'product',
        name: 'Amsterdam 34 Caffe Silvery',
        price: '19 000 руб'
    },
    {
        image: img6,
        alt: 'product',
        name: 'R18 370 OSP lux',
        price: '7 300 руб'
    }
]

const PopularProducts = () => (
    <div className='container'>
        <h2 className='title-1'>Популярные товары</h2>

        <div>
            {
                data.map(({ name }, i) =>
                    <div key={i}>{name}</div>
                )
            }
        </div>
    </div>
);

export default PopularProducts;