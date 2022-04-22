import { useEffect, useRef, useCallback } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getTitle, queryString } from '../../redux/selectors'
import { filterProducts } from '../../redux/actions'
import { useMediaQuery } from 'react-responsive'
import Filters from '../../components/filters/filters.component'
import Header from './components/header.component'
import ProductsSection from './components/products-section.component'


const Products = () => {
   const ref = useRef()
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })
   const [ searchParams, setSearchParams ] = useSearchParams()
   const dispatch = useDispatch()
   const { url } = useParams()
   const title = useSelector((state) => getTitle(state, url))
   const querySrt = useSelector((state) => queryString(state, url));
   const scrollUp = useCallback(() => {ref.current.scrollIntoView({block: "start", behavior: 'smooth'})}, [])

   useEffect(() => {ref.current.scrollIntoView({block: "start"})}, [url])
   // restore query string:
   useEffect(() => {if (querySrt) setSearchParams(querySrt)}, [url])//eslint-disable-line
   // start filtering:
   useEffect(() => { dispatch(filterProducts(url, searchParams)) }, [searchParams]) //eslint-disable-line

   return (
      <div className='container' ref={ref}>

         <div className='breadcrumbs'><Link to='/'>Главная</Link> / {title}</div>

         <h1 className='title'>{title}</h1>

         <div className='products'>
            {isDesktop && <Filters />}
            <div>
               <Header />
               <ProductsSection scrollUp={scrollUp} />
            </div>
         </div>

      </div>
   )
}

export default Products