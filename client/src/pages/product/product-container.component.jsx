import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadProductItem } from '../../redux/actions'
import { productItemLoaded } from '../../redux/selectors'
import Product from '../../pages/product/product.component'
import Loader from '../../components/loader/loader.coponent'


const ProductContainer = () => {
   const dispatch = useDispatch()
   const { url, productUrl } = useParams()
   const isLoading = useSelector(state => !productItemLoaded(state, productUrl))

   useEffect(() => { dispatch(loadProductItem(url, productUrl)) }, [productUrl])//eslint-disable-line

   return (isLoading) ? <Loader /> : <Product/>
}

export default ProductContainer