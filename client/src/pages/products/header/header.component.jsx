import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {action as toggleMenu} from 'redux-burger-menu';
import { useMediaQuery } from 'react-responsive'
import cn from 'classnames'
import HeaderSelect from '../header-select/header-select.component'
import HeaderTilesButtons from '../header-tiles-buttons/header-tiles-buttons.component'
import { ReactComponent as ChevronLeftIcon } from '../../../assets/svg/chevron-left.svg'
import { ReactComponent as ClearIcon } from '../../../assets/svg/clear.svg'
import styles from './header.module.css'


const Header = () => {
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { search } = useLocation()
   const { url } = useParams()

   return (
      <div className={styles.container}>

         <div className={styles.select}>
            <HeaderSelect url={url} />
         </div>

         <button
            className={cn(styles.button, styles.reset, { [styles.disabled]: !search })}
            onClick={() => navigate(`/products/${url}`)}>
            cбросить
            <ClearIcon />
         </button>

         {isDesktop
               ? <HeaderTilesButtons />
               : (
                  <button
                     className={styles.button}
                     onClick={() => dispatch(toggleMenu(true, 'filters'))}
                     aria-label='открыть меню фильтров'>
                     фильтры
                     <ChevronLeftIcon />
                  </button>
         )}
      </div>
   )
}

export default Header