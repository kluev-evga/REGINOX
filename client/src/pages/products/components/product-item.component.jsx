import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { product, appIsTiles } from '../../../redux/selectors'
import CardProduct from '../../../components/card-product/card-product.component'


const ProductItem = ({ id }) => {
   const { url } = useParams()
   const productItem = useSelector(state => product(state, url, id))
   const isTiles = useSelector(appIsTiles)

   return <CardProduct tiles={isTiles} product={productItem} />
}

export default ProductItem