import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuLinks } from '../../../redux/selectors';
import styles from './footer-links.module.css';


const FooterLinks = ({ menuLinks }) => (
    <div className="container">
        <div className={styles.wrapper}>

            <div className={styles.row}>
                <p>О компании</p>
                <NavLink to='/why-us' className='link_secondary' activeClassName='link_active'>Почему мы</NavLink>
                <NavLink to='/partners' className='link_secondary' activeClassName='link_active'>Наши партнеры</NavLink>
                <NavLink to='/sertificates' className='link_secondary' activeClassName='link_active'>Сертификаты и гарантии</NavLink>
                <NavLink to='/articles' className='link_secondary' activeClassName='link_active'>Статьи</NavLink>
                <NavLink to='/information' className='link_secondary' activeClassName='link_active'>Информация</NavLink>
                <NavLink to='/catalogs?size=6' className='link_secondary' activeClassName='link_active'>Каталоги</NavLink>
                <NavLink to='/delivery' className='link_secondary' activeClassName='link_active'>Доставка и оплата</NavLink>
                <NavLink to='/contacts' className='link_secondary' activeClassName='link_active'>Контакты</NavLink>
            </div>

            <div className={styles.row}>
                <p>Каталог</p>
                {menuLinks.map(({ id, title, url }) => (
                    <NavLink
                        to={`/products/${url}/all`}
                        key={id}
                        className='link_secondary'
                        activeClassName='link_active'
                    >
                        {title}
                    </NavLink>
                ))}
            </div>

            <div className={styles.row + ' ' + styles.brands}>
                <p>Бренды</p>
                <a href='/' className='link_secondary'>Reginox</a>
                <a href='/' className='link_secondary'>Rodi</a>
                <a href='/' className='link_secondary'>Whinstone</a>
                <a href='/' className='link_secondary'>Rerih</a>
                <a href='/' className='link_secondary'>Status</a>
                <a href='/' className='link_secondary'>Bone Crusher</a>
                <a href='/' className='link_secondary'>Armando Vicario</a>
                <a href='/' className='link_secondary'>Webert</a>
                <a href='/' className='link_secondary'>Effepi</a>
                <a href='/' className='link_secondary'>Glionna Bagno</a>
                <a href='/' className='link_secondary'>Аквафор</a>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({ menuLinks: menuLinks(state) });

export default connect(mapStateToProps)(FooterLinks);