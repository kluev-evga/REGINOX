import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { articlesCurrentPage, articlesSelectedIsLoaded, articlesList } from '../../../redux/selectors'
import { loadArticles } from '../../../redux/actions'
import ArticlesCard from './articles-card.component'
import { ReactComponent as LoadingIcon } from '../../../assets/svg/spinner-loading.svg'


const ArticlesCards = () => {
   const dispatch = useDispatch()
   const isLoading = !useSelector(articlesSelectedIsLoaded)
   const currentPage = useSelector(articlesCurrentPage)
   const articles = useSelector(articlesList)

   useEffect(() => { dispatch(loadArticles(currentPage)) }, [currentPage]) //eslint-disable-line
   const placeholder = useMemo(() => [...Array(5)].map((_, i) => i), [])
   const list = isLoading ? placeholder : articles

   return (
      <div className='articles'>
         {list.map(id =>
            isLoading
               ? <div key={id} className='articles__card'><LoadingIcon/></div>
               : <ArticlesCard key={id} id={id} />
         )}
      </div>
   )
}

export default ArticlesCards