import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import { menuTitleByUrl, productsLoaded, menuLoaded } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive';
import Filters from '../../components/filters/filters-container.component';
import ProductsContainer from './products-container/products-container.component';
import Loader from '../../components/loader/loader.coponent';
import styles from './products.module.css';


const Products = ({ getTitle, productsLoaded, loadProducts, match, menuLoaded }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const url = match.params.product;
    const loaded = productsLoaded(url);

    useEffect(() => { loadProducts(url) }, [url]);//eslint-disable-line

    if (!menuLoaded) return <Loader />

    const title = getTitle(match);

    return (
        <div className="container">
            <div className="breadcrumbs">
                <Link to='/'>Главная</Link> / {title}
            </div>
            <h1 className="title">{title}</h1>

            <div className={styles.wrapper}>
                {isDesktop && <Filters />}
                {loaded && <ProductsContainer />}
            </div>

        </div>
    );
};

const mapStateToProps = state => ({
    getTitle: menuTitleByUrl(state),
    productsLoaded: productsLoaded(state),
    menuLoaded: menuLoaded(state)
});

export default connect(mapStateToProps, { loadProducts })(Products);