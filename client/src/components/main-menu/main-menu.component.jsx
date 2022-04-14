import { useSelector } from 'react-redux'
import { menuLinks, menuCategories, menuLoaded } from '../../redux/selectors'
import MenuCollapsible from './components/menu-collapsible.component'
import MenuLink from './components/menu-link.component'


const MainMenu = () => {
   const isLoading = !useSelector(menuLoaded)
   const links = useSelector(menuLinks)
   const categories = useSelector(menuCategories)

   if (isLoading) return null

   return (
      <div className='menu'>

         {links.map(({ title, url }) =>
            categories[url]
               ? <MenuCollapsible key={url} categories={categories[url]} url={url} btnTitle={title} />
               : <MenuLink to={`products/${url}`} key={url} addClass='menu__link'>{title}</MenuLink>
         )}

         <div className='menu__links-container'>
            <MenuLink to='promo'>Акции</MenuLink>
            <MenuLink to='latest'>Новинки</MenuLink>
            <MenuLink to='delivery'>Доставка и оплата</MenuLink>
            <MenuLink to='contacts'>Контакты</MenuLink>
         </div>
      </div>
   )
}

export default MainMenu