import { useLocation } from 'react-router-dom'
import Collapsible from 'react-collapsible'
import LinkCollapsible from './link-collapsible.component'
import CollapsibleBtn from './collapsible-trigger-btn.component'


const MenuCollapsible = ({ categories, url, btnTitle }) => {
   const { pathname, search } = useLocation()
   const triggerClass = (pathname.includes(`/products/${url}`) && !search) ? 'menu__collapsible-trigger active' : 'menu__collapsible-trigger'

   return (
      <Collapsible
         trigger={<CollapsibleBtn btnTitle={btnTitle}/>}
         triggerClassName={triggerClass}
         triggerOpenedClassName={triggerClass}
         triggerTagName={'button'}
         transitionTime={70}
      >
         <div className='menu__collapsible-links'>
            {categories.map(({ title, search }, i) =>
               <LinkCollapsible to={`products/${url}?type=${search}`} key={search + i} search={search}>
                  {title}
               </LinkCollapsible>
            )}
         </div>
      </Collapsible>
   )
}

export default MenuCollapsible