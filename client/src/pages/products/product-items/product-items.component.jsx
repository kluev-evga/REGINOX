import { useState, useMemo, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { filteredProducts, filtersisFiltering, appIsTiles } from '../../../redux/selectors'
import cn from 'classnames'
import ProductItem from '../product-item/product-item.component'
import Pagination from '../../../components/pagination/pagination.component'
import styles from './product-items.module.css'

const sliceProducts = productItems => {
   const totalItems = productItems.length
   const totalPages = Math.ceil(totalItems / 18)
   const pages = [...Array(totalPages)].map((_, i) => i + 1)
   const products = pages.map((_, i) => productItems.slice(i * 18, i * 18 + 18) )
   return { products, totalItems, totalPages, pages }
}

const ProductItems = () => {
   const [currentPage, selectPage] = useState(1)
   const { url } = useParams()
   const isTiles = useSelector(appIsTiles)
   const isFiltering = useSelector((state) => filtersisFiltering(state, url))
   const productItems = useSelector((state) => filteredProducts(state)(url))

   const { products, totalItems, totalPages, pages } = useMemo(
      () => !isFiltering && sliceProducts(productItems)
   , [isFiltering, url]) //eslint-disable-line

   useEffect(() => { isFiltering && selectPage(1) }, [isFiltering])
   useEffect(() => {selectPage(1)}, [url])

   const onSelectPage = useCallback(page => {
      selectPage(page)
      window.scrollTo({ top: 260, behavior: 'smooth' })
   }, [])

   if (isFiltering) return <div>FILTERING</div>
   if (totalItems === 0) return <div>Ничего не найдено</div>
   if (currentPage > totalPages) return null

   return (
      <div className={cn(styles.container, { [styles.tiles]: isTiles })}>

         { products[currentPage - 1].map(id => <ProductItem key={id} id={id} /> ) }

         <div className={styles.pagination}>
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

export default ProductItems