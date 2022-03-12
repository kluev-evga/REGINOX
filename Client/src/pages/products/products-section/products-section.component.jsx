import { useState } from 'react';
import { connect } from 'react-redux';
import { openFiltersMenu } from '../../../redux/actions';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';

import ProductCard from '../product-card/product-card.component';
import ButtonsTiles from '../buttons-tiles/buttons-tiles.component';

import { ReactComponent as ChevronIcon } from '../../../assets/svg/chevron.svg';
import { ReactComponent as ChevronLeftIcon } from '../../../assets/svg/chevron-left.svg';

import styles from './products-section.module.css';


const img1 = process.env.PUBLIC_URL + '/assets/products/product_1.webp';
const img2 = process.env.PUBLIC_URL + '/assets/products/product_2.webp';
const img3 = process.env.PUBLIC_URL + '/assets/products/product_3.webp';
const img4 = process.env.PUBLIC_URL + '/assets/products/product_4.webp';
const img5 = process.env.PUBLIC_URL + '/assets/products/product_5.webp';
const img6 = process.env.PUBLIC_URL + '/assets/products/product_6.webp';


// Категории - отдельно берутся из каталогов...
// Но при нажатии - переход не происходит - идет фильтрация тоже

const data = {
    filters: [
        {

            id: '',
            name: '',
            query: '',
        }
    ],
    products: [
        {
            id: '1',
            promo: true,
            new: 'true',
            name: 'Amsterdam 25 Dark chocolate',
            img: img1,
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
            img: img2,
            alt: 'asdf',
            price: '9950',
            url: 'amsterdam-25-dark-chocolate',
        },
        {
            id: '3',
            name: 'Amsterdam 25 Dark chocolate',
            img: img3,
            alt: 'asdf',
            price: '9950',
            url: 'amsterdam-25-dark-chocolate',
        },
        {
            id: '4',
            name: 'Amsterdam 25 Dark chocolate',
            img: img4,
            alt: 'asdf',
            price: '9950',
            url: 'amsterdam-25-dark-chocolate',
        },
        {
            id: '5',
            name: 'Amsterdam 25 Dark chocolate',
            img: img5,
            alt: 'asdf',
            price: '9950',
            url: 'amsterdam-25-dark-chocolate',
        },
    ],
    newProducts: [
        { id: '' }
    ],
    promo: [
        { id: '' }
    ]
};

const ProductsSection = ({ openFiltersMenu }) => {
    const [tiles, setTiles] = useState(true);
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

    return (
        <div className={cn(styles.products, { [styles.tiles]: tiles })}>

            <div className={styles.products_heading}>
                <button className={styles.button}>По популярности <ChevronIcon /></button>

                {
                    isDesktop
                        ? <ButtonsTiles setTiles={setTiles} tiles={tiles} />
                        : (
                            <button
                                className={styles.button}
                                onClick={openFiltersMenu}
                                aria-label='открыть меню фильтров'
                            >
                                фильтры
                                <ChevronLeftIcon />
                            </button>
                        )
                }
            </div>

            {data.products.map(product => <ProductCard key={product.id} {...product} tiles={tiles} />)}

        </div>
    );
};

const mapDispatchToProps = { openFiltersMenu };

export default connect(null, mapDispatchToProps)(ProductsSection);