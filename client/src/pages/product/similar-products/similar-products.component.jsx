import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadSimilarProducts } from '../../../redux/actions'
import { similarProducts, similarProductsloading } from '../../../redux/selectors'
import Slider from '../../../components/slider/slider.component'
import { ReactComponent as Loading } from '../../../assets/svg/spinner.svg'


const SimilarProducts = () => {
   const dispatch = useDispatch()
   const loading = useSelector(similarProductsloading)
   const similarProductsItems = useSelector(similarProducts)
   const [loaded, setLoaded] = useState(false)

   useEffect(() => {
      setLoaded(false)
      dispatch(loadSimilarProducts())
   }, []) //eslint-disable-line

   useEffect(() => { !loading && setLoaded(true) }, [loading])

   if (loading || !loaded) return <Loading className='product__similar-products-spinner' height='100' />

   return (
      <div>
         <h2 className='product__similar-products-title title'>Похожие товары</h2>
         <Slider items={similarProductsItems} />
      </div>
   )
}

export default SimilarProducts