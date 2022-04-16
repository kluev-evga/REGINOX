import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadArticle } from '../../redux/actions'
import { articleEntity, articleLoaded } from '../../redux/selectors'
import { Link, useParams } from 'react-router-dom'
import ArticleContent from './article-content.component'
import Loader from '../../components/loader/loader.coponent'


const Article = () => {
   const ref = useRef()
   const dispatch = useDispatch()
   const {article} = useParams()
   const isLoading = !useSelector((state) => articleLoaded(state, article))
   const articleData = useSelector((state) => articleEntity(state, article))

   useEffect(() => { dispatch(loadArticle(article)) }, []) //eslint-disable-line
   useEffect(() => {!isLoading && ref.current.scrollIntoView({block: "start"})}, [isLoading] )

   if (isLoading) return <Loader />

   const { date, title } = articleData
   const dateText = new Date(date).toLocaleDateString('en-GB').replace(/\/20/, '/').replace(/\//g, ' / ')

   return (
      <div className='container' ref={ref}>
         <div className='breadcrumbs'>
            <Link to='/home'>Главная</Link> / <Link to='/articles'>Статьи</Link> / {title}
         </div>
         <h1 className='title'>{title}</h1>
         <time  className='article-date' dateTime={date}>{dateText}</time>
         <ArticleContent entities={articleData.content} />
      </div>
   )
}

export default Article