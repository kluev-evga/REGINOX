import { Link, useMatch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { menuLoaded } from '../../redux/selectors'
import {action as toggleMenu} from 'redux-burger-menu';
import cn from 'classnames'
import Logo from '../logo/logo.component'
import NavLinks from './components/nav-links.component'
import ButtonsContainer from './components/buttons-container.component'
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg'


const Header = () => {
   const dispatch = useDispatch()
   const isHomePage = Boolean(useMatch(''))
   const isLoading = !useSelector(menuLoaded)

   if (isLoading) return null

   return (
      <header className={cn('header', {'header_reversed': isHomePage})}>
         <div className='container'>

            <div className='header__row-top'>
               <p>Пн-Вс 10-19</p>
               <a href='tel:84952298559'>8 (495) 229 85 59</a>
            </div>

            <div className='header__row-bottom'>

               <button
                  className='header__btn-burger'
                  onClick={() => dispatch(toggleMenu(true, 'main'))}
                  aria-label='главное меню'>
                  <MenuIcon />
               </button>

               <div className='header__logo-container'>
                  { isHomePage
                        ? <Logo reversed />
                        : <Link to='' aria-label='домашняя страница'><Logo /></Link>
                  }
               </div>

               <ButtonsContainer/>
               <NavLinks />

            </div>
         </div>
      </header>
   )
}

export default Header