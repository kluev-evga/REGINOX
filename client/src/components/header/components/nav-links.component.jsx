import { useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { menuLinks } from '../../../redux/selectors'
import { useMediaQuery } from 'react-responsive'
import DropDown from './drop-down.component'


const NavLinks = () => {
   const isNotDesktop = useMediaQuery({ query: '(max-width: 1199.98px)' })
   const isDesktopXL = useMediaQuery({ query: '(min-width: 1600px)' })
   const headerLinks = useSelector(menuLinks)

   const { navLinks, dropDownLinks } = useMemo(() => {
      return {
         navLinks: headerLinks.slice(0, 6),
         dropDownLinks: headerLinks.slice(6),
      }
   }, []) //eslint-disable-line

   if (isNotDesktop) return null

   return (
      <nav className='header__nav'>
         {(isDesktopXL ? headerLinks : navLinks).map(
            ({ title, titleShort, url }) => (
               <NavLink to={`products/${url}`} key={url} className='header__nav-link'>
                  {titleShort || title}
               </NavLink>
            )
         )}

         { !isDesktopXL && <DropDown dropDownLinks={dropDownLinks} /> }
      </nav>
   )
}

export default NavLinks