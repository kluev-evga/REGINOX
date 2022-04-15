import { useCallback } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {action as toggleMenu} from 'redux-burger-menu';
import cn from 'classnames'


const LinkCollapsible = ({ children, to, search }) => {
   const dispatch = useDispatch()
   const handleClick = useCallback(() => dispatch(toggleMenu(false, 'main')), [])//eslint-disable-line
   const [SP] = useSearchParams()
   const searchParam = SP.get('type')?.toString().includes(search)

   return (
      <NavLink to={to} className={cn('menu__menu-link', {'active-link': searchParam})} onClick={handleClick}>
         {children}
      </NavLink>
   )
}

export default LinkCollapsible