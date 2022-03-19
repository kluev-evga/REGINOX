import { useState, useMemo, useCallback } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { catalogLinks } from '../../../redux/selectors';
import cn from 'classnames';
import { ReactComponent as Chevron } from '../../../assets/svg/chevron.svg';
import styles from './drop-down.module.css';


const DropDown = ({ catalogLinks }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [interval, setInterval] = useState();
    const routeMatch = useRouteMatch('/:slug?');

    const onLeave = useCallback(() => setInterval(setTimeout(() => setIsOpen(false), 300)), []);
    const onEnter = useCallback(() => clearInterval(interval), [interval]);

    const isHome = useMemo(() => routeMatch.params.slug === 'home', [routeMatch]);
    const subMenu = useMemo(() => catalogLinks.slice(6).reverse(), [catalogLinks]);

    return (
        <div
            onMouseLeave={onLeave}
            onMouseEnter={onEnter}
            className={cn(
                styles.sub_menu,
                {
                    [styles.open]: isOpen,
                    [styles.reversed]: isHome
                })} >

            <button onClick={() => setIsOpen(!isOpen)} >
                Другая продукция
                <Chevron />
            </button>

            <div className={styles.sub_menu_container}>
                <div>
                    {subMenu.map(({ id, title, url }) => (
                        <NavLink
                            to={`/products/${url}/all`}
                            key={id}
                            onClick={() => setIsOpen(false)}
                            activeClassName='link_active'
                        >
                            {title}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    catalogLinks: catalogLinks(state)
});

export default connect(mapStateToProps)(DropDown);