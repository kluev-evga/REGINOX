import { useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getTitle, queryString } from '../../redux/selectors'
import { setQueryString, filterProducts } from '../../redux/actions'
import { useMediaQuery } from 'react-responsive'
import Filters from '../../components/filters/filters.component'
import Header from './header/header.component'
import ProductItems from './product-items/product-items.component'
import styles from './products.module.css'


const Products = () => {
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })
   const [ searchParams ] = useSearchParams()
   const dispatch = useDispatch()
   const { url } = useParams()
   const title = useSelector((state) => getTitle(state, url))

   useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }) }, [url]) //eslint-disable-line
   useEffect(() => { dispatch(filterProducts(url, searchParams)) }, [searchParams]) //eslint-disable-line

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

export default Products

   // useEffect(() => () => setQueryString(url, location.search ? location.search : 'empty'), [location.search]) //eslint-disable-line

   // useEffect(() => {
   //    if (queryString === 'empty') toggleProductsIsFiltering(url, false) // console.log('toggle-filtering кастыль')

   //    if (queryString && queryString !== 'empty') {
   //       navigate({ search: queryString })
   //       const filters = productsfilters(url).slice(1)
   //       filterProducts(url, selected(filters, queryString))
   //    }
   // }, [url]) //eslint-disable-line