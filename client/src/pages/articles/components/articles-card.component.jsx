import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { articlesItem } from '../../../redux/selectors'
import { ReactComponent as EyeIcon } from '../../../assets/svg/eye.svg'


const ArticlesCard = ({ id }) => {
   const article = useSelector((state) => articlesItem(state, id))
   const { url, title, img, alt, date } = article
   const { d, m, y } = date
   const dateText = d + ' / ' + m + ' / ' + y
   const dateTime = '20' + y + '-' + m + '-' + d

   return (
      <Link to={`/articles/${url}`} className='articles__card'>
         <img src={img} alt={alt} width={1250} height={900} />

         <p className='articles__card-caption'>
            <time dateTime={dateTime}>
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