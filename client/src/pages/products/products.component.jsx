import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { menuTitleByUrl, queryString, filters } from '../../redux/selectors'
import { setQueryString, filterProducts, toggleProductsIsFiltering } from '../../redux/actions'
import { useMediaQuery } from 'react-responsive'
import Filters from '../../components/filters/filters.component'
import Header from './header/header.component'
import ProductItems from './product-items/product-items.component'
import styles from './products.module.css'

const selected = (filters, search) => {
   const params = new URLSearchParams(search)
   return filters.reduce((acc, { searchGroup, products }) => {
      const group = params.get(searchGroup)
      if (group) {
         const groupItems = group.split('_').filter(item => item in products)
         if (groupItems.length > 0) acc[searchGroup] = groupItems
      }
      return acc
   }, {})
}

const Products = ({ getTitle, queryString, match, location, history, setQueryString, productsfilters, filterProducts,toggleProductsIsFiltering }) => {
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })
   const { url, categoryUrl } = match.params
   const { search } = location
   const title = getTitle(url)

   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return () => {
         toggleProductsIsFiltering(url, true)
         }
   }, [url]) //eslint-disable-line

   // console.log('render')

   useEffect(() => () => setQueryString(url, location.search ? location.search : 'empty'), [location.search]) //eslint-disable-line

   useEffect(() => {
      if (queryString === 'empty') toggleProductsIsFiltering(url, false) // console.log('toggle-filtering кастыль')

      if (queryString && queryString !== 'empty') {
         history.push({ search: queryString })
         const filters = productsfilters(url).slice(1)
         filterProducts(url, categoryUrl, selected(filters, queryString))
      }
   }, [url]) //eslint-disable-line

   useEffect(() => {
      const filters = productsfilters(url).slice(1)
      filterProducts(url, categoryUrl, selected(filters, search))
   }, [categoryUrl, search]) //eslint-disable-line

   return (
      <div className='container'>
         <div className='breadcrumbs'>
            <Link to='/home'>Главная</Link> / {title}
         </div>
         <h1 className='title'>{title}</h1>

         <div className={styles.wrapper}>
            {isDesktop && <Filters />}

            <div>
               <Header />
               <ProductItems />
            </div>
         </div>
      </div>
   )
}

const mapStateToProps = (state, props) => ({
   getTitle: menuTitleByUrl(state),
   queryString: queryString(state, props),
   productsfilters: filters(state),
})

export default connect(mapStateToProps, { setQueryString, filterProducts, toggleProductsIsFiltering })(Products)
