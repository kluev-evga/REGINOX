import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Filters from '../../components/filters/filters.component';
import ProductsSection from './products-section/products-section.component';

import styles from './products.module.css';


const Products = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

    return (
        <div className="container">
            <div className="breadcrumbs">
                <Link to='/'>Главная</Link> / Мойки
            </div>

            <h1 className="title">Мойки</h1>

            <div className={styles.wrapper}>
                {isDesktop && <Filters />}
                <ProductsSection />
            </div>

        </div>
    );
};

export default Products;