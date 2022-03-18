import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import cn from 'classnames';
import { ReactComponent as CheckIcon } from '../../../assets/svg/checked.svg';
import styles from './categories-section.module.css';


const CategoriesSection = ({ title, filters }) => {
    const match = useRouteMatch('/products/:group/:category?');
    const history = useHistory();
    const location = useLocation();
    const search = location.search;
    const isActive = match.params.category;

    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            {filters.map(({ title, url, count }, i) =>
                <button
                    className={cn(styles.button, { [styles.active]: isActive === url })}
                    key={i}
                    onClick={() => history.push({ pathname: url, search: search })}
                >
                    <CheckIcon className={styles.checkmark} />
                    {title}
                    <span>{count}</span>
                </button>
            )}
        </div>
    );
};

export default CategoriesSection;