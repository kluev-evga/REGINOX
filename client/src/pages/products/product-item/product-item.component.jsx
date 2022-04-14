import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { product, appIsTiles } from '../../../redux/selectors'
import ProductCard from '../../../components/product-card/product-card.component'

const ProductItem = ({ id }) => {
   const { url } = useParams()
   const productItem = useSelector(state => product(state, url, id))
   const isTiles = useSelector(appIsTiles)

   return <ProductCard tiles={isTiles} product={productItem} />
}

export default ProductItem
