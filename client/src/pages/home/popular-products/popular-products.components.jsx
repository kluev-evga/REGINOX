import { connect } from 'react-redux'
import { homePopularProducts } from '../../../redux/selectors'
import { useMediaQuery } from 'react-responsive'
import ProductCard from '../../../components/product-card/product-card.component'
import styles from './popular-products.module.css'

const PopularProducts = ({ products }) => {
   const isPhone = useMediaQuery({ query: '(max-width: 767.98px)' })
   const isDesktopLG = useMediaQuery({ query: '(min-width: 1399.98px)' })
   if (isPhone) return null

   return (
      <div className='container section-container'>
         <h2 className='title'>Популярные товары</h2>

         <div className={styles.container}>
            {(isDesktopLG ? products : products.slice(0, 6)).map(product => (
               <ProductCard
                  key={product.id}
                  tiles={true}
                  product={product}
                  withRating={false}
               />
            ))}
         </div>
      </div>
   )
}

const mapStateToProps = state => ({ products: homePopularProducts(state) })

export default connect(mapStateToProps)(PopularProducts)
