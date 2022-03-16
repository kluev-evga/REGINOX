import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { catalogLinks } from '../../../redux/selectors';
import { useMediaQuery } from 'react-responsive';
import DropDown from '../drop-down/drop-down.component';
import styles from './nav-links.module.css';


const NavLinks = ({ catalogLinks }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

    const navLinks = useMemo(
        () => catalogLinks.slice(0, 6)
            .map(({ id, title, url }) => (
                {
                    id,
                    title: title.split(' ').slice(-1).join(),
                    url
                }
            ))
        , [catalogLinks]
    );

    if (!isDesktop) return null;

    return (
        <nav className={styles.nav}>
            {
                navLinks.map(({ id, title, url }) => (
                    <NavLink
                        to={`/products/${url}/all`}
                        key={id}
                        className={styles.link}
                        activeClassName='link_active'
                    >
                        {title}
                    </NavLink>
                ))
            }
            <DropDown />
        </nav>
    );
};

const mapStateToProps = (state) => ({
    catalogLinks: catalogLinks(state)
});

export default connect(mapStateToProps)(NavLinks);