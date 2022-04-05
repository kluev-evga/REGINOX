import { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { ReactComponent as ChevronDown } from '../../../assets/svg/chevron-down.svg';
import { ReactComponent as ChevronUp } from '../../../assets/svg/chevron-up.svg';
import styles from './drop-down.module.css';


const DropDown = ({ links, isHome }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [interval, setInterval] = useState();
    const onLeave = useCallback(() => setInterval(setTimeout(() => setIsOpen(false), 300)), []);
    const onEnter = useCallback(() => clearInterval(interval), [interval]);

    return (
        <div
            onMouseLeave={onLeave}
            onMouseEnter={onEnter}
            className={cn(styles.sub_menu, { [styles.open]: isOpen, [styles.reversed]: isHome })}>

            <button onClick={() => setIsOpen(!isOpen)} >
                Другие товары
                {isOpen ? <ChevronUp /> : <ChevronDown />}
            </button>

            <div className={styles.sub_menu_container}>
                <div>
                    {links.map(({ title, titleShort, url }) => (
                        <NavLink
                            to={`/products/${url}/all`}
                            key={url}
                            onClick={() => setIsOpen(false)}
                            activeClassName='link_active'>
                            {titleShort || title}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DropDown