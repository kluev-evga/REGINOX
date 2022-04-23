import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { articlesItem } from '../../../redux/selectors'
import { ReactComponent as EyeIcon } from '../../../assets/svg/eye.svg'


const ArticlesCard = ({ id }) => {
   const article = useSelector((state) => articlesItem(state, id))
   const { url, title, img, alt, date } = article
   const dateText = new Date(date).toLocaleDateString('en-GB').replace(/\/20/, '/').replace(/\//g, ' / ')

   return (
      <Link to={`/articles/${url}`} className='articles__card'>
         <img src={img} alt={alt} width={1250} height={900} loading='lazy' />

         <p className='articles__card-caption'>
            <time dateTime={date}>
               {dateText}
            </time>
            <span className='articles__card-title'>
               {title}
            </span>
            <span className='articles__card-btn'>
               <EyeIcon/>
               Смотреть
            </span>
         </p>

      </Link>
   )
}

export default ArticlesCard