import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts } from '../../redux/actions'
import { productsLoaded } from '../../redux/selectors'
import Products from '../../pages/products/products.component'
import Loader from '../../components/loader/loader.coponent'
import './products.scss'


const ProductsContainer = () => {
   const dispatch = useDispatch()
   const {url} = useParams()
   const isLoading = useSelector(state => !productsLoaded(state, url))

   useEffect(() => { dispatch(loadProducts(url)) }, [url])//eslint-disable-line

   return (isLoading) ? <Loader /> : <Products/>
}

export default ProductsContainer