import { NavLink } from 'react-router-dom';
import Categories from '../categories/categories.component';
import styles from './menu-item.module.css';


const MenuItem = ({ id, url, name, index, withCategories }) => (
    <div>
        {withCategories
            ? <Categories id={id} url={url} name={name} index={index} />
            : <NavLink to={`/products/${url}`} className={styles.link} activeClassName='menu-active-link'>{name}</NavLink>
        }
    </div>
);

export default MenuItem;