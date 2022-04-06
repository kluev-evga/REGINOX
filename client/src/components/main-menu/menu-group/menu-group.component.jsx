import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeMenu } from '../../../redux/actions';
import Collapsible from 'react-collapsible';
import { ReactComponent as ChevronDownIcon } from '../../../assets/svg/chevron-down.svg';
import { ReactComponent as ChevronUpIcon } from '../../../assets/svg/chevron-up.svg';
import styles from './menu-group.module.css';
import '../main-menu.css';


const MenuGroup = ({ categories, url, title, closeMenu }) => {
    const time = Math.sqrt(categories.length) * 35;

    return (
        <div>
            <div className={styles.container}>
                <Collapsible
                    trigger={<>{title}<ChevronDownIcon /></>}
                    triggerWhenOpen={<>{title}<ChevronUpIcon /></>}
                    triggerTagName={'button'}
                    transitionTime={time}
                    triggerClassName={'menu-button ' + styles.button}
                    triggerOpenedClassName={'menu-button ' + styles.button}>

                    {<div className={styles.categories}>
                        {categories.map(({ title, categoryUrl }, i) => (
                            <NavLink
                                key={i}
                                to={`/products/${url}/${categoryUrl}`}
                                className='menu-link'
                                activeClassName='menu-active-link'
                                onClick={closeMenu}>
                                {title}
                            </NavLink>))}
                    </div>}
                </Collapsible>
            </div>
        </div>
    )
}

export default connect(null, { closeMenu })(MenuGroup)