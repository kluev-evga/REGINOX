import { useState, useRef } from 'react'
import cn from 'classnames'
import useOnClickOutside from 'use-onclickoutside'
import TabContent from '../tab-content/tab-content.component'
import { ReactComponent as Chevron } from '../../../../assets/svg/chevron-down.svg'
import styles from './tab.module.css'

const Tab = ({ name, ...rest }) => {
   const [isActive, setIsActive] = useState(false)
   const ref = useRef(null)
   useOnClickOutside(ref, () => setIsActive(false))

   return (
      <li className={styles.tab_item} ref={ref}>
         <button
            onClick={() => setIsActive(!isActive)}
            className={cn(styles.button, { [styles.active]: isActive })}>
            {name}
            <Chevron />
         </button>

         <TabContent {...rest} isActive={isActive} />
      </li>
   )
}

export default Tab
