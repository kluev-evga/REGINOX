import { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import Categories from '../categories/categories.component';
import { ReactComponent as ChevronIcon } from '../../../assets/svg/chevron.svg';
import styles from './menu-item.module.css';


const MenuItem = ({ id, url, name, index }) => {
    const [isOpen, setOpen] = useState(index < 1 ? true : false);

    const toggleOpen = useCallback(() => setOpen(!isOpen), [isOpen, setOpen]);

    return (
        <div>
            <div className={styles.link_contaier}>

                <NavLink
                    to={`/products/${url}`}
                    className={styles.link}
                    activeClassName='link_active'
                >
                    {name}
                </NavLink>

                <button onClick={toggleOpen}>
                    <ChevronIcon />
                </button>

            </div>

            {isOpen && <Categories id={id} url={url} />}
        </div>
    );
};

export default MenuItem;