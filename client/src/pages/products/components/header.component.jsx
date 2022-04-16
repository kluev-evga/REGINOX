import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {action as toggleMenu} from 'redux-burger-menu';
import { useMediaQuery } from 'react-responsive'
import cn from 'classnames'
import HeaderSelect from './header-select.component'
import HeaderTilesButtons from './header-tiles-buttons.component'
import { ReactComponent as ChevronLeftIcon } from '../../../assets/svg/chevron-left.svg'
import { ReactComponent as ClearIcon } from '../../../assets/svg/clear.svg'


const Header = () => {
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { search } = useLocation()
   const { url } = useParams()

   return (
      <div className='products__section-header'>

         <div className='products__section-select'>
            <HeaderSelect url={url} />
         </div>

         <button
            className={cn('products__section-header-btn', 'products__section-header-reset', { 'disabled': !search })}
            onClick={() => navigate(`/products/${url}`)}
            tabIndex={!search ? -1 : 0}
         >
            очистить фильры
            <ClearIcon />
         </button>

         {isDesktop
               ? <HeaderTilesButtons />
               : <button
                     className='products__section-header-btn'
                     onClick={() => dispatch(toggleMenu(true, 'filters'))}
                     aria-label='открыть меню фильтров'
                  >
                     фильтры
                     <ChevronLeftIcon />
                  </button>
         }
      </div>
   )
}

export default Header