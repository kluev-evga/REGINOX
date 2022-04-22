import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { menuLinks } from '../../redux/selectors'
import { useMediaQuery } from 'react-responsive'


const FooterLinks = () => {
   const isDesktopXL = useMediaQuery({ query: '(min-width: 1400px)' })
   const isTabletLG = useMediaQuery({ query: '(min-width: 1200px)' })
   const isTablet = useMediaQuery({ query: '(min-width: 576px)' })
   const links = useSelector(menuLinks)

   return (
      <div className='container'>
         <div className='footer__container'>

            <div className='footer__column'>
               <p>О компании</p>
               <NavLink to='/why-us'>Почему мы</NavLink>
               <NavLink to='/partners'>Наши партнеры</NavLink>
               <NavLink to='/sertificates'>Сертификаты и гарантии</NavLink>
               <NavLink to='/articles'>Статьи</NavLink>
               <NavLink to='/information'>Информация</NavLink>
               <NavLink to={`/catalogs?size=${isDesktopXL ? 5 : isTabletLG ? 4 : isTablet ? 3 : 2}`}>Каталоги</NavLink>
               <NavLink to='/delivery'>Доставка и оплата</NavLink>
               <NavLink to='/contacts'>Контакты</NavLink>
            </div>

            <div className='footer__column'>
               <p>Каталог</p>
               {links.map(({ title, url }) => <NavLink key={url} to={`/products/${url}`}>{title}</NavLink> )}
            </div>

            <div className='footer__column footer__brands'>
               <p>Бренды</p>
               <NavLink to='/'>Reginox</NavLink>
               <NavLink to='/'>Rodi</NavLink>
               <NavLink to='/'>Whinstone</NavLink>
               <NavLink to='/'>Rerih</NavLink>
               <NavLink to='/'>Status</NavLink>
               <NavLink to='/'>Bone Crusher</NavLink>
               <NavLink to='/'>Armando Vicario</NavLink>
               <NavLink to='/'>Webert</NavLink>
               <NavLink to='/'>Effepi</NavLink>
               <NavLink to='/'>Glionna Bagno</NavLink>
               <NavLink to='/'>Аквафор</NavLink>
            </div>
         </div>
      </div>
   )
}

export default FooterLinks