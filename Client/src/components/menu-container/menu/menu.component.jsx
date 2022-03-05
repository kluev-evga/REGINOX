import { connect } from 'react-redux';
import { selectCatalog } from '../../../redux/selectors';
import { NavLink } from 'react-router-dom';
import MenuItem from '../menu-item/menu-item.component';
import styles from './menu.module.css';


const MenuBlock = ({ catalog }) => (
    <div className={styles.menu}>

        {catalog.map((item, index) => <MenuItem key={item.id} index={index} {...item} />)}

        <div className={styles.pages_links}>
            <NavLink to='/promo' className={styles.link} activeClassName='link_active'>Акции</NavLink>
            <NavLink to='/latest' className={styles.link} activeClassName='link_active'>Новинки</NavLink>
            <NavLink to='/delivery' className={styles.link} activeClassName='link_active'>Доставка и оплата</NavLink>
            <NavLink to='/contacts' className={styles.link} activeClassName='link_active'>Контакты</NavLink>
        </div>

    </div>
);

const mapStateToProps = (state) => ({
    catalog: selectCatalog(state)
})

export default connect(mapStateToProps)(MenuBlock);