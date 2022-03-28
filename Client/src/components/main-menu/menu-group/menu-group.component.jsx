import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { ReactComponent as ChevronIcon } from '../../../assets/svg/chevron-down.svg';
import styles from './menu-group.module.css';
import '../main-menu.css';


const MenuGroup = ({ categories, url, title }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setOpen(!isOpen)}
                className={cn('menu-button', styles.button)}>
                {title}
                <ChevronIcon />
            </button>

            {isOpen &&
                <div className={styles.categories}>
                    {categories.map(({ title, categoryUrl }) => (
                        <NavLink
                            key={categoryUrl}
                            to={`/products/${url}/${categoryUrl}`}
                            className='menu-link'
                            activeClassName='menu-active-link'>
                            {title}
                        </NavLink>))}
                </div>}
        </div>
    )
}

export default MenuGroup;