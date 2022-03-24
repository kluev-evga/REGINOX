import { useState, useEffect } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { filters } from '../../../redux/selectors';
import { openFiltersMenu, filterProducts } from '../../../redux/actions';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';

import ProductsBlock from '../products-block/products-block.component';////////////////// rename...
import ButtonsTiles from '../buttons-tiles/buttons-tiles.component';
import SelectFilters from '../select-filters/select-filters.component';

import { ReactComponent as ChevronLeftIcon } from '../../../assets/svg/chevron-left.svg';
import styles from './products-section.module.css';


const ProductsSection = ({ openFiltersMenu, productsfilters, filterProducts }) => {
    const [tiles, setTiles] = useState(true);
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const location = useLocation();
    const match = useRouteMatch('/products/:url?/:categoryUrl?');
    const { url, categoryUrl } = match.params;

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const filters = productsfilters(url).slice(1);
        const selected = filters.reduce((acc, { searchGroup, products }) => {
            const group = params.get(searchGroup);
            if (group) {
                const groupItems = group.split('_').filter(item => item in products);
                if (groupItems.length > 0) acc[searchGroup] = groupItems;
            };
            return acc;
        }, {});
        filterProducts(url, categoryUrl, selected);
    }, [categoryUrl, location.search]);//eslint-disable-line

    return (
        <div className={styles.wrapper}>
            <div className={cn(styles.products, { [styles.tiles]: tiles })}>
                <div className={styles.products_heading}>
                    <div className={styles.select}>
                        <SelectFilters url={url} />
                    </div>
                    {isDesktop
                        ? <ButtonsTiles setTiles={setTiles} tiles={tiles} />
                        : (<button
                            className={styles.button}
                            onClick={openFiltersMenu}
                            aria-label='открыть меню фильтров'>
                            фильтры
                            <ChevronLeftIcon />
                        </button>)}
                </div>

                <ProductsBlock tiles={tiles} url={url} />

            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({ productsfilters: filters(state), });

const mapDispatchToProps = { openFiltersMenu, filterProducts };

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSection);