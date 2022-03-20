import { useState, useEffect } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { isfiltered, filteredProducts, filters } from '../../../redux/selectors';
import { openFiltersMenu, filterProducts } from '../../../redux/actions';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';

import ProductCardContainer from '../product-card-container/product-card-container.component';
import ButtonsTiles from '../buttons-tiles/buttons-tiles.component';
import SelectFilters from '../select-filters/select-filters.component';
import Pagination from '../../../components/pagination/pagination.component';

import { ReactComponent as ChevronLeftIcon } from '../../../assets/svg/chevron-left.svg';
import styles from './products-section.module.css';


const ProductsSection = ({ openFiltersMenu, isfiltered, filteredProducts, productsfilters, filterProducts }) => {
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

    if (!isfiltered) return <div>LOADING</div>

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

                {filteredProducts.map(id => <ProductCardContainer key={id} id={id} url={url} tiles={tiles} />)}

            </div>

            <Pagination
                pages={['1']}
                totalPages={3}
                currentPage={1}
                totalItems={12}
                selectArticlesPage={() => console.log("selectArticlesPage")}
            />
        </div>
    );
};

const mapStateToProps = (state, { url }) => ({
    productsfilters: filters(state),
    isfiltered: isfiltered(state, url),
    filteredProducts: filteredProducts(state, url),
});

const mapDispatchToProps = { openFiltersMenu, filterProducts };

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSection);