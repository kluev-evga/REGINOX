import { useState, useRef } from 'react'
import cn from 'classnames'
import useOnClickOutside from 'use-onclickoutside'
import TabContent from './tab-content.component'
import { ReactComponent as Chevron } from '../../../../../assets/svg/chevron-down.svg'


const Tab = ({ name, ...rest }) => {
   const [isActive, setIsActive] = useState(false)
   const ref = useRef(null)
   useOnClickOutside(ref, () => setIsActive(false))

   return (
      <li className='home-address__tab-header' ref={ref}>
         <button
            onClick={() => setIsActive(!isActive)}
            className={cn('home-address__tab-btn', { 'active': isActive })}>
            {name}
            <Chevron />
         </button>

         <TabContent {...rest} isActive={isActive} />
      </li>
   )
}

export default Tab
