import { useState, useMemo, useEffect, useCallback } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux'
import { filteredProducts, isFiltering, appIsTiles } from '../../../redux/selectors'
import cn from 'classnames'
import ProductItem from '../product-item/product-item.component'
import Pagination from '../../../components/pagination/pagination.component'
import styles from './product-items.module.css'

const sliceProducts = filteredProducts => {
   const totalItems = filteredProducts.length
   const totalPages = Math.ceil(totalItems / 18)
   const pages = [...Array(totalPages)].map((_, i) => i + 1)
   const products = pages.map((_, i) => filteredProducts.slice(i * 18, i * 18 + 18) )
   return { products, totalItems, totalPages, pages }
}

const ProductItems = ({ productItems, filtering, isTiles }) => {
   const [currentPage, selectPage] = useState(1)
   const { params } = useRouteMatch()
   const url = params.url
   const filteredProducts = productItems(url)
   const isFiltering = filtering(url)

   const { products, totalItems, totalPages, pages } = useMemo(
      () => !isFiltering && sliceProducts(filteredProducts), [isFiltering]) //eslint-disable-line

   useEffect(() => { !isFiltering && currentPage > totalPages && currentPage !== 1 && selectPage(totalPages) }, [isFiltering]) // eslint-disable-line

   const onSelectPage = useCallback(page => {
      selectPage(page)
      window.scrollTo({ top: 260, behavior: 'smooth' })
   }, [])

   if (isFiltering) return <div>FILTERING</div>
   if (totalItems === 0) return <div>Ничего не найдено</div>

   return (
      <div className={cn(styles.container, { [styles.tiles]: isTiles })}>
         {currentPage <= totalPages && !!totalItems && products[currentPage - 1].map(id => <ProductItem key={id} id={id} />)}

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

const mapStateToProps = state => ({
   productItems: filteredProducts(state),
   filtering: isFiltering(state),
   isTiles: appIsTiles(state),
})

export default connect(mapStateToProps)(ProductItems)
