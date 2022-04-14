import { useNavigate, useLocation, useParams } from 'react-router-dom'
import cn from 'classnames'
import { ReactComponent as CheckboxIcon } from '../../../assets/svg/checkbox.svg'
import styles from '../button.module.css'

const CategoriesSection = ({ title, filters }) => {
   const navigate = useNavigate()
   const { search } = useLocation()
   const { url:productUrl, categoryUrl } = useParams();


   return (
      <section>
         <p>{title}</p>
         {filters.map(({ title, url, count }, i) => (
            <button
               key={i}
               className={cn(styles.button, { [styles.active]: url === categoryUrl })}
               onClick={() => navigate({pathname: `/products/${productUrl}/${url}`, search: search})}>
               <CheckboxIcon />
               {title}
               <span>({count})</span>
            </button>
         ))}
      </section>
   )
}

export default CategoriesSection
