import { connect } from 'react-redux';
import { selectCatalog } from '../../../redux/selectors';
import { NavLink } from 'react-router-dom';
import MenuItem from '../menu-item/menu-item.component';
import styles from './menu.module.css';


const MenuBlock = ({ catalog }) => {

    return (
        <div className={styles.menu}>

            {catalog.map((item, index) =>
                <MenuItem
                    key={item.id}
                    {...item}
                    index={index}
                    withCategories={!!item.categories} />
            )}

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
    catalog: selectCatalog(state)
})

export default connect(mapStateToProps)(MenuBlock);