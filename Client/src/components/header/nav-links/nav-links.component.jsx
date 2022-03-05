import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCatalog } from '../../../redux/selectors';
import { useMediaQuery } from 'react-responsive';
import DropDown from '../drop-down/drop-down.component';
import styles from './nav-links.module.css';


const NavLinks = ({ catalog }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

    const navLinks = useMemo(
        () => catalog.slice(0, 6)
            .map(({ id, name, url }) => (
                {
                    id,
                    name: name.split(' ').slice(-1).join(),
                    url
                }
            ))
        , [catalog]
    );

    if (!isDesktop) return null;

    return (
        <nav className={styles.nav}>
            {
                navLinks.map(({ id, name, url }) => (
                    <NavLink
                        to={`/products/${url}`}
                        key={id}
                        className={styles.link}
                        activeClassName='link_active'
                    >
                        {name}
                    </NavLink>
                ))
            }
            <DropDown />
        </nav>
    );
};

const mapStateToProps = (state) => ({
    catalog: selectCatalog(state)
});

export default connect(mapStateToProps)(NavLinks);



