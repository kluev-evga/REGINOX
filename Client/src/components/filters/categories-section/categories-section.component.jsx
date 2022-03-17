import { useHistory, useLocation } from 'react-router-dom';
import styles from './categories-section.module.css';


const CategoriesSection = ({ title, filters }) => {
    const history = useHistory();
    const location = useLocation();
    const search = location.search;


    console.log(location.search);

    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            {filters.map(({ title, url, count }, i) =>
                <button
                    className={styles.link}
                    key={i}
                    onClick={() => history.push({ pathname: url, search: search })}
                >
                    {title}
                    <span>{count}</span>
                </button>
            )}
        </div>
    );
};

export default CategoriesSection;