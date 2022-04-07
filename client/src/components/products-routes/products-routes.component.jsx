import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadProducts, loadProductItem } from '../../redux/actions';
import { productsLoaded, productItemLoaded } from '../../redux/selectors';
import Products from '../../pages/products/products.component';
import Product from '../../pages/product/product.component';
import Loader from '../loader/loader.coponent';


const ProductsRoutes = ({ match, history, loadProducts, loadProductItem, productsLoaded, productItemLoaded }) => {
    const { url, categoryUrl, productUrl } = match.params

    useEffect(() => { !categoryUrl && history.push(`/products/${url}/all`) }, [])// eslint-disable-line
    useEffect(() => { categoryUrl && productUrl ? loadProductItem(url, productUrl) : loadProducts(url) });

    if ((!productUrl && !productsLoaded(url)) || (productUrl && !productItemLoaded(productUrl))) return <Loader />

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
    productItemLoaded: productItemLoaded(state)
})

export default connect(mapStateToProps, { loadProducts, loadProductItem })(ProductsRoutes)