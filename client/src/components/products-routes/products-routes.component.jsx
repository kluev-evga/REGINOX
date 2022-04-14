import { useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate, useMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts, loadProductItem } from '../../redux/actions'
import { productsLoaded, productItemLoaded } from '../../redux/selectors'
import Products from '../../pages/products/products.component'
import Product from '../../pages/product/product.component'
import Loader from '../loader/loader.coponent'


const ProductsRoutes = () => {
   const match = useMatch('/products/:url/:categoryUrl')

   const  { url, categoryUrl } = match.params
   console.log(url, categoryUrl);
   
   // const  { productUrl } = match1?.params || null
   // console.log( productUrl);
   const productUrl = null;



   const productsIsloaded = useSelector(state =>  productsLoaded(state)(url))
   const productItemIsloaded = useSelector(state => productItemLoaded(state)(productUrl))
   const isLoading = !(productUrl ? productItemIsloaded : productsIsloaded)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      if (categoryUrl) productUrl ? dispatch(loadProductItem(url, productUrl)) : dispatch(loadProducts(url))
      else navigate(`/products/${url}/all`)
   }, [url, categoryUrl, productUrl])// eslint-disable-line

   if (isLoading) return <Loader />

   return (
      <Routes>
         <Route path='/:url/:categoryUrl' element={<Products/>} />
         <Route path='/:url/:categoryUrl/:productUrl' element={<Product/>} />
      </Routes>
   )
}

// <Route path='/*' element={<Navigate to='/not-found' replace />} />


export default ProductsRoutes









// const ProductsRoutes = ({ match, history, loadProducts, loadProductItem, isLoading }) => {
//    const { url, categoryUrl, productUrl } = match.params

//    useEffect(() => {
//       if (categoryUrl) productUrl ? loadProductItem(url, productUrl) : loadProducts(url)
//       else history.push(`/products/${url}/all`)
//    }, [url, categoryUrl, productUrl])// eslint-disable-line

//    if (isLoading) return <Loader />

//    return (
//       <Switch>
//          <Route exact path='/products/:url/:categoryUrl' component={Products} />
//          <Route exact path='/products/:url/:categoryUrl/:productUrl' component={Product} />
//          <Redirect to='/not-found' />
//       </Switch>
//    )
// }

// const mapStateToProps = (state, props) => {
//    const { url, productUrl } = props.match.params
//    const isLoading = !(productUrl ? productItemLoaded(state)(productUrl) : productsLoaded(state)(url))
//    return ({ isLoading: isLoading })
// }

// export default connect(mapStateToProps, { loadProducts, loadProductItem })(ProductsRoutes)