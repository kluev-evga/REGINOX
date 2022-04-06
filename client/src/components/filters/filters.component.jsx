import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { productsLoaded, filters } from '../../redux/selectors';
import FiltersSection from './filters-section/filters-section.component';
import CategoriesSection from './categories-section/categories-section.component';
import styles from './filters.module.css';


const FiltersContainer = () => {
    const match = useRouteMatch('/products/:url?');
    const url = match.params.url;
    const loaded = useSelector((state) => productsLoaded(state)(url));
    const [categories, ...filtersGrop] = useSelector((state) => filters(state)(url));

    if (!loaded) return null;

    return (
        <div className={styles.wrapper}>
            <CategoriesSection {...categories} />
            {filtersGrop.map((item, i) => <FiltersSection key={i} {...item} />)}
        </div>
    )
}

export default FiltersContainer