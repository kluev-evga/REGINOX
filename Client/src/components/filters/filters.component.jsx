import { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { filters, filtersIsLoaded, productsIsLoaded } from '../../redux/selectors';
import { filterByCategory } from '../../redux/actions';
import Categories from './categories/categories.component';
import FiltersSection from './filters-section/filters-section.component';
import styles from './filters.module.css';


const Filters = ({ filters, productsLoaded, filtersLoaded, filterByCategory }) => {
    const match = useRouteMatch('/products/:product?/:category?');

    useEffect(() => {
        if (productsLoaded && filtersLoaded) {
            match.params.category !== 'all' && filterByCategory();
        };
    }, [productsLoaded, filtersLoaded]);// eslint-disable-line

    if (!filtersLoaded && !productsLoaded) return <div>loading</div>
    const categorySelected = match.params.category;

    return (
        <div className={styles.wrapper}>

            {categorySelected && <Categories />}

            {filters.map(item =>
                <FiltersSection key={item.name} {...item} />
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    productsLoaded: productsIsLoaded(state),
    filtersLoaded: filtersIsLoaded(state),
    filters: filters(state),
});

const mapDispatchToProps = ({ filterByCategory });

export default connect(mapStateToProps, mapDispatchToProps)(Filters);