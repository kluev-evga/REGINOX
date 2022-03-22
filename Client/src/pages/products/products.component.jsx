import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import { menuTitleByUrl, productsLoaded } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive';
import Filters from '../../components/filters/filters-container.component';
import ProductsSection from './products-section/products-section.component';
import styles from './products.module.css';


const Products = ({ title, productsLoaded, loadProducts, match }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const url = match.params.product;
    const loaded = productsLoaded(url);

    useEffect(() => { loadProducts(url) }, [url]);//eslint-disable-line

    return (
        <div className="container">
            <div className="breadcrumbs">
                <Link to='/'>Главная</Link> / {title}
            </div>
            <h1 className="title">{title}</h1>

            <div className={styles.wrapper}>
                {isDesktop && <Filters />}
                {loaded && <ProductsSection url={url} />}
            </div>

        </div>
    );
};

const mapStateToProps = (state, props) => ({
    title: menuTitleByUrl(state, props),
    productsLoaded: productsLoaded(state),
});

const mapDispatchToProps = { loadProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Products);