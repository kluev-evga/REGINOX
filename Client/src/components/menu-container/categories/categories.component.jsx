import { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { catalogCategories } from '../../../redux/selectors';
import styles from './categories.module.css';
import { ReactComponent as ChevronIcon } from '../../../assets/svg/chevron.svg';


const Categories = ({ categories, url: subUrl, name, index }) => {
    const [isOpen, setOpen] = useState(index < 1 ? true : false);
    const toggleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);

    return (
        <div>
            <button onClick={toggleOpen} className={styles.button}>{name}<ChevronIcon /></button>

            {isOpen &&
                <div className={styles.categories}>
                    {categories.map(({ id, name, url }) => (
                        <NavLink key={id} to={`/products/${subUrl}/${url}`} activeClassName='menu-active-link'>
                            {name}
                        </NavLink>
                    ))}
                </div>
            }
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    categories: catalogCategories(state, props)
});

export default connect(mapStateToProps)(Categories);