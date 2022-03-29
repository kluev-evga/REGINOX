import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadProducts, loadProductItem } from '../../redux/actions';
import { menuLinksList, productsLoaded, productItemLoaded } from '../../redux/selectors';
import Products from '../../pages/products/products.component';
import Product from '../../pages/product/product.component';
import Loader from '../loader/loader.coponent';



const ProductsRoutes = ({ match, history, loadProducts, loadProductItem, productsLoaded, productItemLoaded, menuLinksList }) => {
    const { url, categoryUrl, productUrl } = match.params

    useEffect(() => { !categoryUrl && history.push(`/products/${url}/all`) }, [])// eslint-disable-line
    useEffect(() => { categoryUrl && productUrl ? loadProductItem(url, productUrl) : loadProducts(url) });

    // нужно тупо обрабатывать error здесь... не нужно проверять url - только категории...

    if ((!productUrl && !productsLoaded(url)) || (productUrl && !productItemLoaded(productUrl))) return <Loader />
    // if (!menuLinksList[url]) return <Redirect to='not-found' />
    // if (!menuLinksList[url][categoryUrl]) {
    //     history.push(`/products/${url}/all`);// вынести в useEffect...
    //     return <Loader />
    // }

    // По идее все not-found делать по error...

    return (
        <Switch>
            <Route exact path='/products/:url/:categoryUrl' component={Products} />
            <Route exact path='/products/:url/:categoryUrl/:productUrl' component={Product} />
            <Redirect to='/not-found' />
        </Switch>
    )
}

const mapStateToProps = state => ({
    productsLoaded: productsLoaded(state),
    productItemLoaded: productItemLoaded(state),
    menuLinksList: menuLinksList(state)
})

export default connect(mapStateToProps, { loadProducts, loadProductItem })(ProductsRoutes)