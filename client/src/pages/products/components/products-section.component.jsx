import { useState, useMemo, useEffect, useCallback, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { filteredProducts, filtersIsFiltering, appIsTiles } from '../../../redux/selectors'
import cn from 'classnames'
import ProductItem from './product-item.component'
import Pagination from '../../../components/pagination/pagination.component'
import { ReactComponent as SpinnerIcon } from '../../../assets/svg/spinner.svg'


const sliceProducts = productItems => {
   const totalItems = productItems.length
   const totalPages = Math.ceil(totalItems / 18)
   const pages = [...Array(totalPages)].map((_, i) => i + 1)
   const products = pages.map((_, i) => productItems.slice(i * 18, i * 18 + 18))
   return { products, totalItems, totalPages, pages }
}

const ProductsSection = ({ scrollUp }) => {
   const ref = useRef()
   const [currentPage, selectPage] = useState(1)
   const { url } = useParams()
   const isTiles = useSelector(appIsTiles)
   const isFiltering = useSelector((state) => filtersIsFiltering(state, url))
   const productItems = useSelector((state) => filteredProducts(state, url))

   const { products, totalItems, totalPages, pages } = useMemo(
      () => !isFiltering && sliceProducts(productItems)
      , [isFiltering, url]) //eslint-disable-line

   useEffect(() => { isFiltering && selectPage(1) }, [isFiltering])
   useEffect(() => { selectPage(1) }, [url])

   const onSelectPage = useCallback(page => {
      selectPage(page)
      scrollUp()
   }, [])//eslint-disable-line

   if (isFiltering) return <SpinnerIcon style={{ margin: '0 auto', maxWidth: 200 }} />
   if (totalItems === 0) return <div className='products__section'>Ничего не найдено</div>
   if (currentPage > totalPages) return null

   return (
      <div className={cn('products__section', { 'tiles': isTiles })} ref={ref}>

         {products[currentPage - 1].map(id => <ProductItem key={id} id={id} />)}

         <div className='products__pagination'>
            <Pagination
               totalItems={totalItems}
               totalPages={totalPages}
               pages={pages}
               currentPage={currentPage}
               selectPage={onSelectPage}
            />
         </div>
      </div>
   )
}

export default ProductsSection