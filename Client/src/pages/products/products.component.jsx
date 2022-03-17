import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { catalogTitleByUrl } from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';
import { useMediaQuery } from 'react-responsive';
import Filters from '../../components/filters/filters.component';
import ProductsSection from './products-section/products-section.component';
import styles from './products.module.css';


const Products = ({ title, loadProducts, match }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const url = match.params.product;
    const categoryUrl = match.params.category;

    useEffect(() => { loadProducts(url) }, []);//eslint-disable-line

    return (
        <div className="container">
            <div className="breadcrumbs">
                <Link to='/'>Главная</Link> / {title}
            </div>
            <h1 className="title">{title}</h1>

            <div className={styles.wrapper}>
                {isDesktop && <Filters />}
                <ProductsSection url={url} categoryUrl={categoryUrl} />
            </div>

        </div>
    );
};

const mapStateToProps = (state, props) => ({
    title: catalogTitleByUrl(state, props),
});

const mapDispatchToProps = { loadProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Products);