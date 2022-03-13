import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { catalogName, catalogId } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive';
import Filters from '../../components/filters/filters.component';
import ProductsSection from './products-section/products-section.component';
import styles from './products.module.css';
import { useEffect } from 'react';
import { selectProductsId, loadProducts, loadFilters } from '../../redux/actions';


const Products = ({ name, id, selectProductsId, loadProducts, loadFilters }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

    useEffect(() => {
        selectProductsId(id);
        loadFilters(id);
        loadProducts(id);
    }, [id]);//eslint-disable-line

    return (
        <div className="container">
            <div className="breadcrumbs">
                <Link to='/'>Главная</Link> / {name}
            </div>
            <h1 className="title">{name}</h1>

            <div className={styles.wrapper}>
                {isDesktop && <Filters />}
                <ProductsSection />
            </div>

        </div>
    );
};

const mapStateToProps = (state, props) => ({
    name: catalogName(state, props),
    id: catalogId(state, props)
});

const mapDispatchToProps = { selectProductsId, loadProducts, loadFilters };

export default connect(mapStateToProps, mapDispatchToProps)(Products);