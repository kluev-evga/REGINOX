import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectArticlesPages, selectArticlesTotalPages, articlesCurrentPage, articlesTotal } from '../../redux/selectors'
import { selectArticlesPage } from '../../redux/actions'
import ArticlesCards from './components/articles-cards.component'
import Pagination from '../../components/pagination/pagination.component'


const Articles = ({ pages, totalPages, currentPage, totalItems, selectArticlesPage }) => {
   const ref = useRef()
   useEffect(() => {ref.current.scrollIntoView({behavior: "smooth", block: "start"})}, [] )

   return (
      <div className='container' ref={ref}>
         <div className='breadcrumbs'><Link to='/'>Главная</Link> / Статьи </div>
         <h1 className='title'>Статьи</h1>
         <ArticlesCards />
         <Pagination pages={pages} totalPages={totalPages} currentPage={currentPage} totalItems={totalItems} selectPage={selectArticlesPage} />
      </div>
   )
}

const mapStateToProps = state => ({
   pages: selectArticlesPages(state),
   totalPages: selectArticlesTotalPages(state),
   currentPage: articlesCurrentPage(state),
   totalItems: articlesTotal(state),
})

export default connect(mapStateToProps, { selectArticlesPage })(Articles)