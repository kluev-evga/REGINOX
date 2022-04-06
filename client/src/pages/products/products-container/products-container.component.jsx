import { useState, useEffect } from 'react';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { filters } from '../../../redux/selectors';
import { openFiltersMenu, filterProducts } from '../../../redux/actions';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';

import ProductsBlock from '../products-block/products-block.component';
import TilesButton from '../tiles-button/tiles-button.component';
import SelectButton from '../select-button/select-button.component';

import { ReactComponent as ChevronLeftIcon } from '../../../assets/svg/chevron-left.svg';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';
import styles from './products-container.module.css';


const ProductsContainer = ({ openFiltersMenu, productsfilters, filterProducts }) => {
    const [tiles, setTiles] = useState(true);
    const history = useHistory();
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
                        <SelectButton url={url} />
                    </div>

                    <button
                        onClick={() => history.push(`/products/${url}/all`)}
                        className={cn(styles.reset, { [styles.disabled]: categoryUrl === 'all' && !location.search })}>
                        cбросить все
                        <CrossIcon />
                    </button>

                    {isDesktop
                        ? <TilesButton setTiles={setTiles} tiles={tiles} />
                        : (<button
                            className={styles.button}
                            onClick={openFiltersMenu}
                            aria-label='открыть меню фильтров'>
                            фильтры
                            <ChevronLeftIcon />
                        </button>)}
                </div>

                <ProductsBlock tiles={tiles} url={url} categoryUrl={categoryUrl} />

            </div>
        </div>
    )
}

const mapStateToProps = state => ({ productsfilters: filters(state) })

export default connect(mapStateToProps, { openFiltersMenu, filterProducts })(ProductsContainer)