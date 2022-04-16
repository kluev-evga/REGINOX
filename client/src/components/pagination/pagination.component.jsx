import cn from 'classnames'
import { ReactComponent as ChevronLeftIcon } from '../../assets/svg/chevron-left.svg'
import { ReactComponent as ChevronRightIcon } from '../../assets/svg/chevron-right.svg'


const Pagination = ({ pages, totalPages, currentPage, totalItems, selectPage }) => {
   if (totalPages === 1 || !totalItems) return null

   return (
      <div className='pagination'>
         <p>
            <b>Всего</b>
            <span>{totalItems}</span>
         </p>

         <div className='pagination__container'>
            <button
               onClick={() => selectPage(currentPage - 1)}
               className={cn({ 'disabled': currentPage === 1 })}
               tabIndex={currentPage === 1 ? -1 : 0}
               aria-label='предыдущая страница'>
               <ChevronLeftIcon />
            </button>

            <div
               className='pagination__pages'
               style={{ '--i': `-${ currentPage === totalPages ? currentPage - 3 : currentPage - 2 }px` }}>
               <div>
                  {pages.map(index => 
                     <button
                        key={index}
                        onClick={() => selectPage(index)}
                        className={cn({ 'active': currentPage === index })}
                        tabIndex={-1}>
                        {index}
                     </button>
                  )}
               </div>
            </div>

            <button
               onClick={() => selectPage(currentPage + 1)}
               className={cn({ 'disabled': currentPage === totalPages })}
               tabIndex={currentPage === totalPages ? -1 : 0}
               aria-label='следующая страница'>
               <ChevronRightIcon />
            </button>
         </div>

      </div>
   )
}

export default Pagination