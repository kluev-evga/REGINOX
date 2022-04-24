import cn from 'classnames'
import { ReactComponent as Phone } from '../../../../assets/svg/phone.svg'
import { ReactComponent as Mail } from '../../../../assets/svg/mail.svg'
import { ReactComponent as Globe } from '../../../../assets/svg/globe.svg'


const TabContent = ({ address, phone, phoneText, mail, site, isActive }) => (
   <div className={cn('home-address__tab', {'active': isActive })}>
      <address>{address}</address>
      <a href={`tel:${phone}`} className='home-address__link' target='_blank' rel='noreferrer'>
         <Phone />
         {phoneText}
      </a>
      <a href={`mailto:${mail}`} className='home-address__link' target='_blank' rel='noreferrer'>
         <Mail />
         {mail}
      </a>
      <a href={`https://${site}`} className='home-address__link' target='_blank' rel='noreferrer'>
         <Globe />
         {site}
      </a>
   </div>
)

export default TabContent