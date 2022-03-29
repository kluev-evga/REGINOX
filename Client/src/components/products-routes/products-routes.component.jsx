import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadMenu, loadProducts } from '../../redux/actions';
import { menuLinksList, productsLoaded, menuLoaded } from '../../redux/selectors';
import Products from '../../pages/products/products.component';
import Loader from '../loader/loader.coponent';





const ProductsRoutes = ({ match, history, loadProducts, loadMenu, productsLoaded, menuLoaded, menuLinksList }) => {
    const { url, categoryUrl } = match.params;

    useEffect(() => { (categoryUrl) ? loadProducts(url) : loadMenu() }, [url, categoryUrl]);//eslint-disable-line

    useEffect(() => {
        if (menuLoaded) {
            if (menuLinksList[url] && !categoryUrl) history.push(`/products/${url}/all`);// можно записать просто all???
            else return null//  'loadProduct()' - загружаем продукт.
        }
    });

    const loaded = productsLoaded(url);
    if (!menuLoaded || !loaded) return <Loader />// product not loaded...


    return (
        <Switch>
            <Route exact path='/products/:product' component={<div>Product</div>} />
            <Route exact path='/products/:url/:categoryUrl' component={Products} />
            <Redirect to='/not-found' />
        </Switch>
    )
};

const mapStateToProps = state => ({
    productsLoaded: productsLoaded(state),
    menuLoaded: menuLoaded(state),
    menuLinksList: menuLinksList(state)
});

const mapDispatchToProps = ({
    loadProducts,
    loadMenu,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsRoutes);