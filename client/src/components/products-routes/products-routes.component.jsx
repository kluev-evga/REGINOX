import { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadProducts, loadProductItem } from '../../redux/actions'
import { productsLoaded, productItemLoaded } from '../../redux/selectors'
import Products from '../../pages/products/products.component'
import Product from '../../pages/product/product.component'
import Loader from '../loader/loader.coponent'

const ProductsRoutes = ({ match, history, loadProducts, loadProductItem, isLoading }) => {
   const { url, categoryUrl, productUrl } = match.params

   useEffect(() => {
      if (categoryUrl) productUrl ? loadProductItem(url, productUrl) : loadProducts(url)
      else history.push(`/products/${url}/all`)
   }, [url, categoryUrl, productUrl])// eslint-disable-line

   if (isLoading) return <Loader />

   return (
      <Switch>
         <Route exact path='/products/:url/:categoryUrl' component={Products} />
         <Route exact path='/products/:url/:categoryUrl/:productUrl' component={Product} />
         <Redirect to='/not-found' />
      </Switch>
   )
}

const mapStateToProps = (state, props) => {
   const { url, productUrl } = props.match.params
   const isLoading = !(productUrl ? productItemLoaded(state)(productUrl) : productsLoaded(state)(url))
   return ({ isLoading: isLoading })
}

export default connect(mapStateToProps, { loadProducts, loadProductItem })(ProductsRoutes)
