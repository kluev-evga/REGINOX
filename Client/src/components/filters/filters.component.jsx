import { useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { filters, productsLoaded } from '../../redux/selectors';
import FiltersSection from './filters-section/filters-section.component';
import CategoriesSection from './categories-section/categories-section.component';
import styles from './filters.module.css';


const Filters = ({ productsfilters, productsloaded }) => {
    const match = useRouteMatch('/products/:product?/:category?');
    const url = match.params.product;
    const loaded = productsloaded(url);
    if (!loaded) return <div>loading</div>
    const filters = productsfilters(url).slice(1);
    const categories = productsfilters(url)[0];

    return (
        <div className={styles.wrapper}>
            <CategoriesSection {...categories} />

            {filters.map((item, i) => {
                return <FiltersSection key={i} {...item} />
            }
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    productsloaded: productsLoaded(state),
    productsfilters: filters(state),
});

export default connect(mapStateToProps)(Filters);