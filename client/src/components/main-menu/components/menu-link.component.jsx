import { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeMainMenu } from '../../../redux/actions'
import cn from 'classnames'


const MenuLink = ({children, to, addClass=null}) => {
   const dispatch = useDispatch()
   const handleClick = useCallback(() => dispatch(closeMainMenu()), [])//eslint-disable-line

   return (
      <NavLink to={to} className={cn('menu-link', addClass)} onClick={handleClick}>
         {children}
      </NavLink>
   )
}

export default MenuLink