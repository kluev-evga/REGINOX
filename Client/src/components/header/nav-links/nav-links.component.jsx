import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuLinks } from '../../../redux/selectors';
import { useMediaQuery } from 'react-responsive';
import DropDown from '../drop-down/drop-down.component';
import styles from './nav-links.module.css';


const NavLinks = ({ menuLinks, isHome }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const isLarge = useMediaQuery({ query: '(min-width: 1600px)' })

    const { navLinks, dropDownLinks } = useMemo(() => {
        return { navLinks: menuLinks.slice(0, 6), dropDownLinks: menuLinks.slice(6).reverse() };
    }, []);//eslint-disable-line

    if (!isDesktop) return null;

    return (
        <nav className={styles.nav}>
            {(isLarge ? [...navLinks, ...dropDownLinks] : navLinks).map(({ id, title, titleShort, url }) => (
                <NavLink
                    to={`/products/${url}/all`}
                    key={id}
                    className={styles.link}
                    activeClassName='link_active'>
                    {titleShort || title}
                </NavLink>
            ))}

            {!isLarge && <DropDown isHome={isHome} links={dropDownLinks} />}
        </nav>
    );
};

const mapStateToProps = (state) => ({ menuLinks: menuLinks(state) });

export default connect(mapStateToProps)(NavLinks);