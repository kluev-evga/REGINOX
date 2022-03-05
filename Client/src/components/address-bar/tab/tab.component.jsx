import cn from 'classnames';
import { ReactComponent as Chevron } from '../../../assets/svg/chevron.svg';
import { ReactComponent as Phone } from '../../../assets/svg/phone.svg';
import { ReactComponent as Mail } from '../../../assets/svg/mail.svg';
import { ReactComponent as Globe } from '../../../assets/svg/globe.svg';
import styles from './tab.module.css';


const Tab = ({ id, name, address, phone, phoneText, mail, site, activeId, toggleTab }) => (
    <li className={styles.tab_item}>
        <button
            onClick={() => toggleTab(id)}
            className={cn('button_primary', styles.button, { [styles.button_active]: id === activeId })}
        >
            {name}
            <Chevron />
        </button>

        <div className={cn(styles.tab, { [styles.tab_open]: id === activeId })}>
            <address>{address}</address>
            <a href={'tel:' + phone} className={styles.link + ' link_secondary'}>
                <Phone />
                {phoneText}
            </a>
            <a href={'mailto:' + mail} className={styles.link + ' link_secondary'}>
                <Mail />
                {mail}
            </a>
            <a
                href={'https://' + site}
                className={styles.link + ' link_secondary'}
                target="_blank"
                rel='noreferrer'
            >
                <Globe />
                {site}
            </a>
        </div>
    </li>
);

export default Tab;