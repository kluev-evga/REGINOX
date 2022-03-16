import { useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { filters, filtersIsLoaded, productsIsLoaded } from '../../redux/selectors';
import Categories from './categories/categories.component';
import FiltersSection from './filters-section/filters-section.component';
import styles from './filters.module.css';


const Filters = ({ filters, productsLoaded, filtersLoaded }) => {
    const match = useRouteMatch('/products/:product?/:category?');
    if (!filtersLoaded && !productsLoaded) return <div>loading</div>

    return (
        <div className={styles.wrapper}>
            {match.params.category && <Categories />}

            {filters.map((item, i) => <FiltersSection key={i} {...item} />)}
        </div>
    );
};

const mapStateToProps = state => ({
    productsLoaded: productsIsLoaded(state),
    filtersLoaded: filtersIsLoaded(state),
    filters: filters(state),
});

export default connect(mapStateToProps)(Filters);