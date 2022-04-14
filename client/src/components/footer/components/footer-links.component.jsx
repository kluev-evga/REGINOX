import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { menuLinks } from '../../../redux/selectors'
import { useMediaQuery } from 'react-responsive'
import cn from 'classnames'


const FooterLinks = () => {
   const isDesktopXL = useMediaQuery({ query: '(min-width: 1400px)' })
   const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
   const links = useSelector(menuLinks)

   return (
      <div className='container'>
         <div className='footer__container'>

            <div className='footer__row'>
               <p>О компании</p>
               <NavLink className='footer__link' to='/why-us'>Почему мы</NavLink>
               <NavLink className='footer__link' to='/partners'>Наши партнеры</NavLink>
               <NavLink className='footer__link' to='/sertificates'>Сертификаты и гарантии</NavLink>
               <NavLink className='footer__link' to='/articles'>Статьи</NavLink>
               <NavLink className='footer__link' to='/information'>Информация</NavLink>
               <NavLink className='footer__link' to={`/catalogs?size=${isDesktopXL ? 4 : isTablet ? 3 : 2}`}>Каталоги</NavLink>
               <NavLink className='footer__link' to='/delivery'>Доставка и оплата</NavLink>
               <NavLink className='footer__link' to='/contacts'>Контакты</NavLink>
            </div>

            <div className='footer__row'>
               <p>Каталог</p>
               {links.map(({ title, url }) => (
                  <NavLink key={url} to={`/products/${url}`} className='footer__link'>
                     {title}
                  </NavLink>
               ))}
            </div>

            <div className={cn('footer__row', 'footer__brands')}>
               <p>Бренды</p>
               <NavLink className='footer__link' to='/'>Reginox</NavLink>
               <NavLink className='footer__link' to='/'>Rodi</NavLink>
               <NavLink className='footer__link' to='/'>Whinstone</NavLink>
               <NavLink className='footer__link' to='/'>Rerih</NavLink>
               <NavLink className='footer__link' to='/'>Status</NavLink>
               <NavLink className='footer__link' to='/'>Bone Crusher</NavLink>
               <NavLink className='footer__link' to='/'>Armando Vicario</NavLink>
               <NavLink className='footer__link' to='/'>Webert</NavLink>
               <NavLink className='footer__link' to='/'>Effepi</NavLink>
               <NavLink className='footer__link' to='/'>Glionna Bagno</NavLink>
               <NavLink className='footer__link' to='/'>Аквафор</NavLink>
            </div>
         </div>
      </div>
   )
}

export default FooterLinks