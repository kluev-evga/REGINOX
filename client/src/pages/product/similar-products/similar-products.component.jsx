import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadSimilarProducts } from '../../../redux/actions'
import { similarProducts, similarProductsloading } from '../../../redux/selectors'
import Slider from '../../../components/slider/slider.component'
import { ReactComponent as Loading } from '../../../assets/svg/spinner.svg'
import styles from './similar-products.module.css'

const SimilarProducts = ({ loadSimilarProducts, loading, similarProducts }) => {
   const [loaded, setLoaded] = useState(false)

   useEffect(() => {
      setLoaded(false)
      loadSimilarProducts()
   }, []) //eslint-disable-line

   useEffect(() => { !loading && setLoaded(true) }, [loading])

   if (loading || !loaded) return <Loading className={styles.spinner} height='100' />

   return (
      <div>
         <h2 className={styles.title + ' title'}>Похожие товары</h2>
         <Slider items={similarProducts} />
      </div>
   )
}

const mapStateToProps = state => ({
   similarProducts: similarProducts(state),
   loading: similarProductsloading(state),
})

export default connect(mapStateToProps, { loadSimilarProducts })(SimilarProducts)