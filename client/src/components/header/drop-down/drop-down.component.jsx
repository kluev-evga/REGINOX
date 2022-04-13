import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import useOnClickOutside from 'use-onclickoutside'
import cn from 'classnames'
import { ReactComponent as ChevronDown } from '../../../assets/svg/chevron-down.svg'
import { ReactComponent as ChevronUp } from '../../../assets/svg/chevron-up.svg'
import styles from './drop-down.module.css'

const DropDown = ({ links, isHome, routeUrl }) => {
   const ref = useRef(null)
   const [isOpen, setIsOpen] = useState(false)
   useOnClickOutside(ref, () => setIsOpen(false))

   return (
      <div
         ref={ref}
         className={cn(styles.sub_menu, {
            [styles.open]: isOpen,
            [styles.reversed]: isHome,
         })}>
         <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
            Другие товары
            {isOpen ? <ChevronUp /> : <ChevronDown />}
         </button>

         <div className={styles.container}>
            <div>
               {links.map(({ title, titleShort, url }) => (
                  <Link
                     to={`/products/${url}/all`}
                     key={url}
                     onClick={() => setIsOpen(false)}
                     className={cn(styles.link, 'temp-disabled', {
                        link_active: url === routeUrl,
                     })}>
                     {titleShort || title}
                  </Link>
               ))}
            </div>
         </div>
      </div>
   )
}

export default DropDown
