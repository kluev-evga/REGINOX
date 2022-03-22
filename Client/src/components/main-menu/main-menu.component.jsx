import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuLinks, menuCategories, menuLoaded } from '../../redux/selectors';
import MenuGroup from './menu-group/menu-group.component';
import styles from './main-menu.module.css';


const MainMenu = ({ loaded, links, categories }) => {
    if (!loaded) return null;

    return (
        <div className={styles.menu}>

            {links.map(({ title, url, id }) => (
                categories[id]
                    ? <MenuGroup key={id} categories={categories[id]} url={url} title={title} />
                    : <NavLink key={id} to={`/products/${url}`} className={styles.link} activeClassName='menu-active-link'>{title}</NavLink>
            ))}

            <div className={styles.links_container}>
                <NavLink to='/promo' activeClassName='menu-active-link'>Акции</NavLink>
                <NavLink to='/latest' activeClassName='menu-active-link'>Новинки</NavLink>
                <NavLink to='/delivery' activeClassName='menu-active-link'>Доставка и оплата</NavLink>
                <NavLink to='/contacts' activeClassName='menu-active-link'>Контакты</NavLink>
            </div>

        </div>
    );
};

const mapStateToProps = (state) => ({
    loaded: menuLoaded(state),
    links: menuLinks(state),
    categories: menuCategories(state)
})

export default connect(mapStateToProps)(MainMenu);