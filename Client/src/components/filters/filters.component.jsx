import { useEffect } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { filters } from '../../redux/selectors';
import { filterProducts } from '../../redux/actions';
import FiltersSection from './filters-section/filters-section.component';
import CategoriesSection from './categories-section/categories-section.component';
import styles from './filters.module.css';


const Filters = ({ productsfilters, url, categoryUrl, filterProducts }) => {
    const filtersArr = productsfilters(url);
    const filters = filtersArr.slice(1);
    const categories = filtersArr[0];

    // const location = useLocation();
    // const params = new URLSearchParams(location.search);

    // useEffect(() => {
    //     const selected = filters.reduce((acc, { searchGroup, products }) => {
    //         const group = params.get(searchGroup);
    //         if (group) {
    //             const groupItems = group.split('_').filter(item => item in products);
    //             if (groupItems.length > 0) acc[searchGroup] = groupItems;
    //         };
    //         return acc;
    //     }, {});
    //     filterProducts(url, categoryUrl, selected);
    // }, [categoryUrl, location.search]);//eslint-disable-line

    return (
        <div className={styles.wrapper}>
            <CategoriesSection {...categories} />
            {filters.map((item, i) => <FiltersSection key={i} {...item} />)}
        </div>
    );
};

const mapStateToProps = state => ({
    productsfilters: filters(state),
});

const mapDispatchToProps = ({
    filterProducts
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters);