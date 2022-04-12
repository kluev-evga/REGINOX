import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import TabsBlock from './tabs-block/tabs-block.component';
import PhoneView from './phone-view/phone-view.component';
import withMenuLoader from '../../hoc/with-menu-loader.js';
import styles from './contacts.module.css';


const Contacts = () => {
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

    return (
        <div>
            <div className="container">
                <div className="breadcrumbs">
                    <Link to='/home'>Главная</Link>  / Контакты
                </div>
                <h1 className='title'>контакты</h1>

                <div className={styles.wrapper}>
                    {isTablet ? <TabsBlock /> : <PhoneView />}
                </div>

            </div>

            <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26127.072906470396!2d37.6563681634861!3d55.783043858561975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5357a6e6be305%3A0xa2457411e2ccaddb!2sReginox!5e0!3m2!1sen!2sru!4v1645674166765!5m2!1sen!2sru" title="карта проезда" width="100%" height="460" style={{ 'border': 'none' }} allowFullScreen="" loading="lazy"></iframe>
        </div>
    )
}

export default withMenuLoader(Contacts);