import Collapsible from 'react-collapsible'
import MenuLink from './menu-link.component'
import CollapsibleBtn from './menu-collapsible-btn.component'


const MenuCollapsible = ({ categories, url, btnTitle }) => (
   <Collapsible trigger={<CollapsibleBtn btnTitle={btnTitle}/>} triggerTagName={'button'} transitionTime={70} >
      <div className='menu__collapsible-links'>
         {categories.map(({ title, search }) => <MenuLink to={`products/${url}?type=${search}`} key={search}>{title}</MenuLink> )}
      </div>
   </Collapsible>
)

export default MenuCollapsible