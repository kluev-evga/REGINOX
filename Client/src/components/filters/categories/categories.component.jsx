import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { productCategories } from '../../../redux/selectors';
import styles from './categories.module.css';


const Categories = ({ categories }) => {
    const history = useHistory();
    const location = useLocation();
    const search = location.search;

    const handleClick = (url) => history.push({ pathname: url, search: search });

    return (
        <div className={styles.container}>
            <p className={styles.title}>Категории</p>
            {categories.map(({ name, url, id, count }) =>
                <button
                    className={styles.link}
                    key={id}
                    onClick={() => handleClick(url)}
                >
                    {name}
                    <span>{count}</span>
                </button>
            )}
        </div>
    )
};

const mapStateToProps = state => ({
    categories: productCategories(state)
});

export default connect(mapStateToProps)(Categories);