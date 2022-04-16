import { useSelector } from 'react-redux'
import { homePopularProducts } from '../../../redux/selectors'
import { useMediaQuery } from 'react-responsive'
import CardProduct from '../../../components/card-product/card-product.component'


const HomePopularProducts = () => {
   const isPhone = useMediaQuery({ query: '(max-width: 767.98px)' })
   const isDesktopLG = useMediaQuery({ query: '(min-width: 1399.98px)' })
   const products = useSelector(homePopularProducts)
   if (isPhone) return null

   return (
      <div className='container section-container'>
         <h2 className='title'>Популярные товары</h2>

         <div className='home-popular-products'>
            {(isDesktopLG ? products : products.slice(0, 6))
               .map(product => <CardProduct key={product.id} tiles={true} product={product} withRating={false} /> )
            }
         </div>
      </div>
   )
}

export default HomePopularProducts