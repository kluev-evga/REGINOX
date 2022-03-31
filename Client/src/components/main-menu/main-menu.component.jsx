import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeMenu } from '../../redux/actions';
import { menuLinks, menuCategories, menuLoaded } from '../../redux/selectors';
import cn from 'classnames'
import MenuGroup from './menu-group/menu-group.component';
import styles from './main-menu.module.css';
import './main-menu.css';


const MainMenu = ({ loaded, links, categories, closeMenu }) => {
    if (!loaded) return null;

    return (
        <div className={styles.menu}>

            {links.map(({ title, url }) => (
                categories[url]
                    ? <MenuGroup key={url} categories={categories[url]} url={url} title={title} />
                    : <NavLink
                        key={url}
                        to={`/products/${url}`}
                        className={cn('menu-link', styles.link)}
                        activeClassName='menu-active-link'>
                        {title}
                    </NavLink>
            ))}

            <div className={styles.links_container}>
                <NavLink to='/promo' onClick={closeMenu} className='menu-link' activeClassName='menu-active-link'>Акции</NavLink>
                <NavLink to='/latest' onClick={closeMenu} className='menu-link' activeClassName='menu-active-link'>Новинки</NavLink>
                <NavLink to='/delivery' onClick={closeMenu} className='menu-link' activeClassName='menu-active-link'>Доставка и оплата</NavLink>
                <NavLink to='/contacts' onClick={closeMenu} className='menu-link' activeClassName='menu-active-link'>Контакты</NavLink>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    loaded: menuLoaded(state),
    links: menuLinks(state),
    categories: menuCategories(state)
})

export default connect(mapStateToProps, { closeMenu })(MainMenu)