import { useMemo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuLinks } from '../../../redux/selectors';
import { useMediaQuery } from 'react-responsive';
import DropDown from '../drop-down/drop-down.component';
import cn from 'classnames';
import styles from './nav-links.module.css';


const NavLinks = ({ menuLinks, isHome }) => {
    const match = useRouteMatch('/products/:url?');
    const routeUrl = match?.params?.url;
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const isLarge = useMediaQuery({ query: '(min-width: 1600px)' })

    const { navLinks, dropDownLinks } = useMemo(() => {
        return { navLinks: menuLinks.slice(0, 6), dropDownLinks: menuLinks.slice(6) };
    }, []);//eslint-disable-line

    if (!isDesktop) return null;

    return (
        <nav className={styles.nav}>
            {(isLarge ? menuLinks : navLinks).map(({ title, titleShort, url }) => (
                <Link
                    to={`/products/${url}/all`}
                    key={url}
                    className={cn(styles.link, { 'link_active': url === routeUrl })}>
                    {titleShort || title}
                </Link>
            ))}

            {!isLarge && <DropDown isHome={isHome} links={dropDownLinks} routeUrl={routeUrl} />}
        </nav>
    );
};

const mapStateToProps = (state) => ({ menuLinks: menuLinks(state) });

export default connect(mapStateToProps)(NavLinks);