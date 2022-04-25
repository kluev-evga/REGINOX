import { NavLink } from 'react-router-dom'
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg'
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg'
import { ReactComponent as Vkontakte } from '../../assets/svg/vkontakte.svg'
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg'
import { ReactComponent as Squares } from '../../assets/svg/squares-lg.svg'
import { ReactComponent as PRHolding } from '../../assets/svg/PRHolding.svg'


const FooterBar = () => (
   <div>
      <div className='footer__bar-background'>
         <div className='container'>
            <div className='footer__bar-container'>
               <div className='footer__logo'>
                  <img
                     src={'/assets/barcode.webp'}
                     alt='barcode'
                     width='160'
                     height='60'
                     loading='lazy'
                  />
                  <PRHolding />
               </div>
               <div className='footer__socials'>
                  <a
                     href='https://facebook.com'
                     aria-label='фейсбук'
                     target='_blank'
                     rel='noreferrer'>
                     <Facebook />
                  </a>
                  <a
                     href='https://twitter.com'
                     aria-label='твиттер'
                     target='_blank'
                     rel='noreferrer'>
                     <Twitter />
                  </a>
                  <a
                     href='https://vkontakte.com'
                     aria-label='вконтакте'
                     target='_blank'
                     rel='noreferrer'>
                     <Vkontakte />
                  </a>
                  <a
                     href='https://instagram.com'
                     aria-label='инстаграм'
                     target='_blank'
                     rel='noreferrer'>
                     <Instagram />
                  </a>
               </div>
               <Squares className='footer__squares' width="238" height="82" />
            </div>
         </div>
      </div>

      <div className='container'>
         <div className='footer__policy'>
            <NavLink to='policy'>Политика конфеденциальности</NavLink>
            <p>2020 © Reginox-shop</p>
         </div>
      </div>
   </div>
)

export default FooterBar