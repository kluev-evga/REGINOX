import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { productCategories } from '../../../redux/selectors';
import styles from './categories.module.css';


const Categories = ({ categoriesList }) => {
    const { url: subUrl, categories } = categoriesList;
    return (
        <div className={styles.container}>
            <p className={styles.title}>Категории</p>
            {categories.map(({ name, url, id }) =>
                <NavLink className={styles.link} key={id} to={`/products/${subUrl}/${url}`}>
                    {name}
                    <span>{10}</span>
                </NavLink>
            )}
        </div>
    )
};

const mapStateToProps = state => ({
    categoriesList: productCategories(state)
});

export default connect(mapStateToProps)(Categories);