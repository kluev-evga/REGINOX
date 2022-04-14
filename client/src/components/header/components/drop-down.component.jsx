import { useState, useRef } from 'react'
import { NavLink, useMatch } from 'react-router-dom'
import useOnClickOutside from 'use-onclickoutside'
import cn from 'classnames'
import { ReactComponent as ChevronDown } from '../../../assets/svg/chevron-down.svg'
import { ReactComponent as ChevronUp } from '../../../assets/svg/chevron-up.svg'


const DropDown = ({ dropDownLinks }) => {
   const isHomePage = useMatch('/')
   const ref = useRef(null)
   useOnClickOutside(ref, () => setIsOpen(false))
   const [isOpen, setIsOpen] = useState(false)

   return (
      <div className={cn('header__drop-down', {'open': isOpen, 'reversed': isHomePage })} ref={ref}>

         <button className='header__drop-down-btn' onClick={() => setIsOpen(!isOpen)}>
            Другие товары
            {isOpen ? <ChevronUp /> : <ChevronDown />}
         </button>

         <div className='header__drop-down-container'>
            <div>
               {dropDownLinks.map(({ title, titleShort, url }) => (
                  <NavLink
                     to={`/products/${url}`}
                     key={url}
                     onClick={() => setIsOpen(false)}
                     className='header__drop-down-link'>
                     {titleShort || title}
                  </NavLink>
               ))}
            </div>
         </div>
      </div>
   )
}

export default DropDown