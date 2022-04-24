import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectArticlesPages, selectArticlesTotalPages, articlesCurrentPage, articlesTotal } from '../../redux/selectors'
import { selectArticlesPage } from '../../redux/actions'
import ArticlesCards from './components/articles-cards.component'
import Pagination from '../../components/pagination/pagination.component'
import './articles.scss'


const Articles = () => {
   const ref = useRef()
   const dispatch = useDispatch()
   const pages = useSelector(selectArticlesPages)
   const totalPages = useSelector(selectArticlesTotalPages)
   const currentPage = useSelector(articlesCurrentPage)
   const totalItems = useSelector(articlesTotal)
   const selectPage = num => {dispatch(selectArticlesPage(num))}

   useEffect(() => {ref.current.scrollIntoView({behavior: "smooth", block: "start"})}, [] )

   return (
      <div className='container' ref={ref}>
         <div className='breadcrumbs'><Link to='/'>Главная</Link> / Статьи </div>
         <h1 className='title'>Статьи</h1>
         <ArticlesCards />
         <Pagination pages={pages} totalPages={totalPages} currentPage={currentPage} totalItems={totalItems} selectPage={selectPage} />
      </div>
   )
}

export default Articles