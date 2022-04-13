import cn from 'classnames'
import { ReactComponent as Phone } from '../../../../assets/svg/phone.svg'
import { ReactComponent as Mail } from '../../../../assets/svg/mail.svg'
import { ReactComponent as Globe } from '../../../../assets/svg/globe.svg'
import styles from './tab-content.module.css'

const TabContent = ({ address, phone, phoneText, mail, site, isActive }) => (
   <div className={cn(styles.tab, { [styles.open]: isActive })}>
      <address>{address}</address>
      <a href={`tel:${phone}`} className={cn(styles.link, 'link_secondary')}>
         <Phone />
         {phoneText}
      </a>
      <a href={`mailto:${mail}`} className={cn(styles.link, 'link_secondary')}>
         <Mail />
         {mail}
      </a>
      <a
         href={`https://${site}`}
         className={cn(styles.link, 'link_secondary')}
         target='_blank'
         rel='noreferrer'>
         <Globe />
         {site}
      </a>
   </div>
)

export default TabContent
