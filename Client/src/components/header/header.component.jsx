import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openMainMenu } from '../../redux/actions';
import { menuLoaded, appStatus, appIsHomePage, appIsPopUp } from '../../redux/selectors';
import cn from 'classnames';

import NavLinks from './nav-links/nav-links.component';
import Logo from '../logo/logo.component';

import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg';
import { ReactComponent as Account } from '../../assets/svg/account.svg';
import { ReactComponent as Cart } from '../../assets/svg/cart.svg';
import { ReactComponent as Compare } from '../../assets/svg/compare.svg';
import { ReactComponent as Search } from '../../assets/svg/search.svg';
import styles from './header.module.css';


const Header = ({ openMainMenu, isHome, loaded, status, isPopUp }) => {
    if (status || isPopUp || !loaded) return null;

    return (
        <header className={cn(styles.header, { [styles.reversed]: isHome })}>
            <div className="container">

                <div className={styles.row_top}>
                    <p>Пн-Вс 10-19</p>
                    <a href="tel:84952298559">8 (495) 229 85 59</a>
                </div>

                <div className={styles.row_bottom}>
                    <button
                        onClick={openMainMenu}
                        className={cn(styles.burger)}
                        aria-label='главное меню'>
                        <MenuIcon />
                    </button>
                    <div className={styles.logo}>

                        {isHome ? <Logo reversed /> : <Link to='/home' aria-label='домашняя страница' ><Logo /></Link>}

                    </div>
                    <div className={styles.buttons_container}>
                        <button aria-label='сравнить'><Compare /></button>
                        <button aria-label='аккаунт'><Account /></button>
                        <button aria-label='поиск по каталогу'><Search /></button>
                        <button aria-label='корзина'><Cart /></button>
                    </div>

                    <NavLinks key={isHome} isHome={isHome} />

                </div>
            </div>
        </header>
    );
};

const mapStateToProps = state => ({
    loaded: menuLoaded(state),
    status: appStatus(state),
    isHome: appIsHomePage(state),
    isPopUp: appIsPopUp(state),
});

export default connect(mapStateToProps, { openMainMenu })(Header);