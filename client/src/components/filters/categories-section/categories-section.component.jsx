import { useHistory, useRouteMatch } from 'react-router-dom'
import cn from 'classnames'
import { ReactComponent as CheckboxIcon } from '../../../assets/svg/checkbox.svg'
import styles from '../button.module.css'

const CategoriesSection = ({ title, filters }) => {
   const match = useRouteMatch('/products/:group/:category?')
   const history = useHistory()
   const search = history.location.search
   const isActive = match.params.category

   return (
      <section>
         <p>{title}</p>
         {filters.map(({ title, url, count }, i) => (
            <button
               key={i}
               className={cn(styles.button, {
                  [styles.active]: url === isActive,
               })}
               onClick={() => history.push({ pathname: url, search: search })}>
               <CheckboxIcon />
               {title}
               <span>({count})</span>
            </button>
         ))}
      </section>
   )
}

export default CategoriesSection
