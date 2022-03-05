import { useState, useMemo, useCallback } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCatalog } from '../../../redux/selectors';
import cn from 'classnames';
import { ReactComponent as Chevron } from '../../../assets/svg/chevron.svg';
import styles from './drop-down.module.css';


const DropDown = ({ catalog }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [interval, setInterval] = useState();
    const routeMatch = useRouteMatch('/:slug?');

    const toggleMenu = useCallback(() => setIsOpen(!isOpen), [setIsOpen, isOpen]);
    const closeMenu = useCallback(() => setIsOpen(false), [setIsOpen]);
    const onLeave = useCallback(() => setInterval(setTimeout(() => setIsOpen(false), 300)), [setIsOpen]);
    const onEnter = useCallback(() => clearInterval(interval), [interval]);

    const isHome = useMemo(() => routeMatch.params.slug === 'home', [routeMatch]);
    const subMenu = useMemo(() => catalog.slice(6).reverse(), [catalog]);

    return (
        <div onMouseLeave={onLeave} onMouseEnter={onEnter} className={cn(styles.sub_menu, { [styles.open]: isOpen, [styles.reversed]: isHome })} >

            <button onClick={toggleMenu} >
                Другая продукция
                <Chevron />
            </button>

            <div className={styles.sub_menu_container}>
                {
                    subMenu.map(({ id, name, url }) => (
                        <NavLink
                            to={`/products/${url}`}
                            key={id}
                            onClick={closeMenu}
                            activeClassName='link_active'
                        >
                            {name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    catalog: selectCatalog(state)
});

export default connect(mapStateToProps)(DropDown);