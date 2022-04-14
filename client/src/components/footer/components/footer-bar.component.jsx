import { NavLink } from 'react-router-dom'
import { ReactComponent as Facebook } from '../../../assets/svg/facebook.svg'
import { ReactComponent as Twitter } from '../../../assets/svg/twitter.svg'
import { ReactComponent as Vkontakte } from '../../../assets/svg/vkontakte.svg'
import { ReactComponent as Instagram } from '../../../assets/svg/instagram.svg'
import { ReactComponent as Squares } from '../../../assets/svg/squares-lg.svg'
import { ReactComponent as PRHolding } from '../../../assets/svg/PRHolding.svg'


const FooterBar = () => (
   <div>
      <div className='footer__bar-background'>
         <div className='container'>
            <div className='footer__bar-container'>
               <div className='footer__logo'>
                  <img
                     src={process.env.PUBLIC_URL + '/assets/barcode.webp'}
                     alt='barcode'
                     width='160'
                     height='60'
                  />
                  <PRHolding />
               </div>
               <div className='footer__socials'>
                  <a
                     href='https://facebook.com'
                     className='link_primary'
                     aria-label='фейсбук'
                     target='_blank'
                     rel='noreferrer'>
                     <Facebook />
                  </a>
                  <a
                     href='https://twitter.com'
                     className='link_primary'
                     aria-label='твиттер'
                     target='_blank'
                     rel='noreferrer'>
                     <Twitter />
                  </a>
                  <a
                     href='https://vkontakte.com'
                     className='link_primary'
                     aria-label='вконтакте'
                     target='_blank'
                     rel='noreferrer'>
                     <Vkontakte />
                  </a>
                  <a
                     href='https://instagram.com'
                     className='link_primary'
                     aria-label='инстаграм'
                     target='_blank'
                     rel='noreferrer'>
                     <Instagram />
                  </a>
               </div>
               <Squares className='footer__squares' />
            </div>
         </div>
      </div>

      <div className='container'>
         <div className='footer__policy'>
            <NavLink
               to='/policy'
               className={({isActive}) => isActive ? 'link_active' : 'link_secondary'}>
               Политика конфеденциальности
            </NavLink>
            <span>2020 © Reginox-shop</span>
         </div>
      </div>
   </div>
)

export default FooterBar