import { connect } from 'react-redux';
import { filters } from '../../redux/selectors';
import { filterProducts } from '../../redux/actions';
import FiltersSection from './filters-section/filters-section.component';
import CategoriesSection from './categories-section/categories-section.component';
import styles from './filters.module.css';


const Filters = ({ productsfilters, url }) => {
    const filtersArr = productsfilters(url);
    const filters = filtersArr.slice(1);
    const categories = filtersArr[0];

    return (
        <div className={styles.wrapper}>
            <CategoriesSection {...categories} />
            {filters.map((item, i) => <FiltersSection key={i} {...item} />)}
        </div>
    );
};

const mapStateToProps = state => ({ productsfilters: filters(state) });

export default connect(mapStateToProps, { filterProducts })(Filters);