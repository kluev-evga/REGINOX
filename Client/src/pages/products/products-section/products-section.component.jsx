import { useState } from 'react';
import { connect } from 'react-redux';
import { productsIsLoaded, products } from '../../../redux/selectors';
import { openFiltersMenu } from '../../../redux/actions';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';

import ProductCard from '../product-card/product-card.component';
import ButtonsTiles from '../buttons-tiles/buttons-tiles.component';

import { ReactComponent as ChevronIcon } from '../../../assets/svg/chevron.svg';
import { ReactComponent as ChevronLeftIcon } from '../../../assets/svg/chevron-left.svg';
import styles from './products-section.module.css';


const ProductsSection = ({ openFiltersMenu, loaded, products }) => {
    const [tiles, setTiles] = useState(true);
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

    if (!loaded) return <div>LOADING</div>

    return (
        <div className={cn(styles.products, { [styles.tiles]: tiles })}>

            <div className={styles.products_heading}>
                <button className={styles.button}>По популярности <ChevronIcon /></button>

                {isDesktop
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
                    )}
            </div>

            {products.map(product =>
                <ProductCard key={product.id} {...product} tiles={tiles} />
            )}

        </div>
    );
};

const mapStateToProps = state => ({
    loaded: productsIsLoaded(state),
    products: products(state)
});

const mapDispatchToProps = { openFiltersMenu };

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSection);