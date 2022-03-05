import { useState } from 'react';
import { connect } from 'react-redux';
import { openFiltersMenu } from '../../../redux/actions';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';

import ProductCard from '../product-card/product-card.component';
import ButtonsTiles from '../buttons-tiles/buttons-tiles.component';

import img1 from '../../../assets/products/product_1.webp';
import img2 from '../../../assets/products/product_2.webp';
import img3 from '../../../assets/products/product_3.webp';
import img4 from '../../../assets/products/product_4.webp';
import img5 from '../../../assets/products/product_5.webp';
import img6 from '../../../assets/products/product_6.webp';
import { ReactComponent as ChevronIcon } from '../../../assets/svg/chevron.svg';
import { ReactComponent as ChevronLeftIcon } from '../../../assets/svg/chevron-left.svg';

import styles from './products-section.module.css';



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
            name: 'Amsterdam 25 Dark chocolate',
            img: img1,
            alt: 'asdf',
            price: '9950',
            url: 'amsterdam-25-dark-chocolate',
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
            img: img2,
            alt: 'asdf',
            price: '9950',
            url: 'amsterdam-25-dark-chocolate',
        }
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