import { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {action as toggleMenu} from 'redux-burger-menu';


const MenuLink = ({ children, to }) => {
   const dispatch = useDispatch()
   const handleClick = useCallback(() => dispatch(toggleMenu(false, 'main')), [])//eslint-disable-line

   return (
      <NavLink to={to} className='menu__menu-link menu__link-bold' onClick={handleClick}>
         {children}
      </NavLink>
   )
}

export default MenuLink