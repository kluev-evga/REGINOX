import { useEffect, useCallback, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadCatalogs } from '../../redux/actions'
import { catalogsLoading, catalogsTotal } from '../../redux/selectors'
import { useMediaQuery } from 'react-responsive'
import cn from 'classnames'
import withMenuLoader from '../../hoc/with-menu-loader'
import CatalogsCards from './catalogs-cards.component'


const Catalogs = () => {
   const dispatch = useDispatch()
   const total = useSelector(catalogsTotal)
   const loading = useSelector(catalogsLoading)
   const ref=useRef()
   const isDesktopXL = useMediaQuery({ query: '(min-width: 1400px)' })
   const isTabletLG = useMediaQuery({ query: '(min-width: 992px)' })
   const isTablet = useMediaQuery({ query: '(min-width: 576px)' })
   const [searchParams, setSearchParams] = useSearchParams()
   const sizeParam = searchParams.get('size')
   const pageSize = parseInt(sizeParam)
   const isInteger = isFinite(Number(sizeParam))
   const i = isDesktopXL ? 5 : isTabletLG ? 4 : isTablet ? 3 : 2

   useEffect(() => {ref.current.scrollIntoView({behavior: "smooth", block: "start"})}, [] )

   useEffect(() => {
      if (!isInteger || searchParams.toString() !== `size=${pageSize}`) {
         const params = new URLSearchParams()
         params.set('size', pageSize ? pageSize : i) // remove any else than size query:
         setSearchParams(params)
      } else {
         dispatch(loadCatalogs(pageSize))
      }
   }, [searchParams]) //eslint-disable-line

   useEffect(() => {
      if (total && pageSize > total) {// cut-out overhauled number when total is received
         searchParams.set('size', total)
         setSearchParams(searchParams)
      }
   }, [total]) //eslint-disable-line

   const handleClick = useCallback(() => {
      const size = (pageSize + i) % i === 0 ? pageSize + i : pageSize + i - (pageSize % i) // ajust on breakpoints
      const sizeParam =  size < total ? size : total // max value check
      searchParams.set('size', sizeParam)
      setSearchParams(searchParams)
   }, [pageSize, total, isDesktopXL, isTabletLG, isTablet]) // eslint-disable-line

   return (
      <div className='container catalog' ref={ref}>

         <div className='breadcrumbs'><Link to='/'>Главная</Link> / Каталоги</div>

         <h1 className='title'>Каталоги</h1>

         <CatalogsCards pageSize={pageSize} />

         <div className='catalog__load-btn'>
            <button
               onClick={handleClick}
               disabled={loading ? true : false}
               className={cn({ 'hidden': pageSize === total })}>
               Загрузить еще
            </button>
         </div>

      </div>
   )
}

export default withMenuLoader(Catalogs)