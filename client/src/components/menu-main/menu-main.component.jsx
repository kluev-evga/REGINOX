import { useSelector } from 'react-redux'
import { menuLinks, menuCategories, menuLoaded } from '../../redux/selectors'
import { useMediaQuery } from 'react-responsive'
import MenuCollapsible from './components/collapsible.component'
import MenuLink from './components/link.component'


const MenuMain = () => {
   const isDesktopXL = useMediaQuery({ query: '(min-width: 1400px)' })
   const isTabletLG = useMediaQuery({ query: '(min-width: 1200px)' })
   const isTablet = useMediaQuery({ query: '(min-width: 576px)' })
   const isLoading = !useSelector(menuLoaded)
   const links = useSelector(menuLinks)
   const categories = useSelector(menuCategories)

   if (isLoading) return null

   return (
      <div className='menu'>

         {links.map(({ title, url }) =>
            categories[url]
               ? <MenuCollapsible key={url} categories={categories[url]} url={url} btnTitle={title} />
               : <MenuLink to={`products/${url}`} key={url}>{title}</MenuLink>
         )}

         <div className='menu__links-container'>
            <MenuLink to='promo'>Акции</MenuLink>
            <MenuLink to='latest'>Новинки</MenuLink>
         </div>

         <div className='menu__links-container'>
            <MenuLink to='why-us'>Почему мы</MenuLink>
            <MenuLink to='partners'>Наши партнеры</MenuLink>
            <MenuLink to='sertificates'>Сертификаты и гарантии</MenuLink>
            <MenuLink to='articles'>Статьи</MenuLink>
            <MenuLink to='information'>Информация</MenuLink>
            <MenuLink to={`catalogs?size=${isDesktopXL ? 5 : isTabletLG ? 4 : isTablet ? 3 : 2}`}>Каталоги</MenuLink>
            <MenuLink to='delivery'>Доставка и оплата</MenuLink>
            <MenuLink to='contacts'>Контакты</MenuLink>
         </div>

      </div>
   )
}

export default MenuMain