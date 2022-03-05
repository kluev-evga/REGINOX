import { useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCatalog } from '../../redux/selectors';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg';
import { ReactComponent as Vkontakte } from '../../assets/svg/vkontakte.svg';
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg';
import { ReactComponent as Squares } from '../../assets/svg/squares-lg.svg';
import { ReactComponent as PRHolding } from '../../assets/svg/PRHolding.svg';
import styles from './footer.module.css';


const Footer = ({ catalog }) => {
    const routeMatch = useRouteMatch('/:slug?');

    const notFound = useMemo(() => routeMatch.params.slug === 'not-found', [routeMatch])

    return (
        <footer className={cn(styles.footer, { [styles.short]: notFound })}>
            <div className="container">

                <div className={styles.links}>

                    <div className={styles.links_block}>
                        <p>О компании</p>
                        <NavLink to='/why-us' className='link_secondary' activeClassName='link_active'>Почему мы</NavLink>
                        <NavLink to='/partners' className='link_secondary' activeClassName='link_active'>Наши партнеры</NavLink>
                        <NavLink to='/sertificates' className='link_secondary' activeClassName='link_active'>Сертификаты и гарантии</NavLink>
                        <NavLink to='/articles' className='link_secondary' activeClassName='link_active'>Статьи</NavLink>
                        <NavLink to='/information' className='link_secondary' activeClassName='link_active'>Информация</NavLink>
                        <NavLink to='/catalogs' className='link_secondary' activeClassName='link_active'>Каталоги</NavLink>
                        <NavLink to='/delivery' className='link_secondary' activeClassName='link_active'>Доставка и оплата</NavLink>
                        <NavLink to='/contacts' className='link_secondary' activeClassName='link_active'>Контакты</NavLink>
                    </div>

                    <div className={styles.links_block}>
                        <p>Каталог</p>
                        {
                            catalog.map(({ id, name, url }) => (
                                <NavLink
                                    to={`/products/${url}`}
                                    key={id}
                                    className='link_secondary'
                                    activeClassName='link_active'
                                >
                                    {name}
                                </NavLink>
                            ))
                        }
                    </div>

                    <div className={styles.links_block + ' ' + styles.links_brands}>
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

                <div className={styles.row}>
                    <div className={styles.logo}>
                        <img src={process.env.PUBLIC_URL + '/assets/barcode.webp'} alt="barcode" width='160' height='60' />
                        <PRHolding />
                    </div>

                    <div className={styles.socials}>
                        <a href="https://facebook.com" className='link_primary' aria-label='фейсбук' target="_blank" rel='noreferrer'><Facebook /></a>
                        <a href="https://twitter.com" className='link_primary' aria-label='твиттер' target="_blank" rel='noreferrer'><Twitter /></a>
                        <a href="https://vkontakte.com" className='link_primary' aria-label='вконтакте' target="_blank" rel='noreferrer'><Vkontakte /></a>
                        <a href="https://instagram.com" className='link_primary' aria-label='инстаграм' target="_blank" rel='noreferrer'><Instagram /></a>
                    </div>

                    <Squares className={styles.squares} />
                </div>

                <div className={styles.policy}>
                    <NavLink to='/policy' className='link_secondary' activeClassName='link_active'>Политика конфеденциальности</NavLink>
                    <span>2020 © Reginox-shop</span>
                </div>

            </div>
        </footer>
    );
};

const mapStateToProps = (state) => ({
    catalog: selectCatalog(state)
})

export default connect(mapStateToProps)(Footer);