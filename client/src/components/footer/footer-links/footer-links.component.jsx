import { NavLink, Link, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { menuLinks } from '../../../redux/selectors';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import styles from './footer-links.module.css';


const FooterLinks = () => {
    const isDesktopXL = useMediaQuery({ query: '(min-width: 1400px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const match = useRouteMatch('/products/:url?');
    const routeUrl = match?.params?.url;
    const links = useSelector(menuLinks);

    return (
        <div className="container">
            <div className={styles.wrapper}>

                <div className={styles.row}>
                    <p>О компании</p>
                    <NavLink to='/why-us' className='link_secondary' activeClassName='link_active'>Почему мы</NavLink>
                    <NavLink to='/partners' className='link_secondary' activeClassName='link_active'>Наши партнеры</NavLink>
                    <NavLink to='/sertificates' className='link_secondary' activeClassName='link_active'>Сертификаты и гарантии</NavLink>
                    <NavLink to='/articles' className='link_secondary' activeClassName='link_active'>Статьи</NavLink>
                    <NavLink to='/information' className='link_secondary' activeClassName='link_active'>Информация</NavLink>
                    <NavLink to={`/catalogs?size=${isDesktopXL ? 4 : isTablet ? 3 : 2}`} className='link_secondary' activeClassName='link_active'>Каталоги</NavLink>
                    <NavLink to='/delivery' className='link_secondary' activeClassName='link_active'>Доставка и оплата</NavLink>
                    <NavLink to='/contacts' className='link_secondary' activeClassName='link_active'>Контакты</NavLink>
                </div>

                <div className={styles.row}>
                    <p>Каталог</p>
                    {links.map(({ title, url }) => (
                        <Link key={url} to={`/products/${url}/all`} className={cn('link_secondary', { 'link_active': url === routeUrl })}>
                            {title}
                        </Link>
                    ))}
                </div>

                <div className={cn(styles.row, styles.brands)}>
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
    )
}

export default FooterLinks