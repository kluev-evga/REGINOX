import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ChevronIcon } from '../../../assets/svg/chevron.svg';
import styles from './menu-group.module.css';


const MenuGroup = ({ categories, url, title }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setOpen(!isOpen)}
                className={styles.button}>
                {title}
                <ChevronIcon />
            </button>

            {isOpen &&
                <div className={styles.categories}>
                    {categories.map(({ title, categoryUrl }) => (
                        <NavLink key={categoryUrl} to={`/products/${url}/${categoryUrl}`} activeClassName='menu-active-link'>
                            {title}
                        </NavLink>
                    ))}
                </div>
            }
        </div>
    );
};

export default MenuGroup;