import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { catalogCategories } from '../../../redux/selectors';
import styles from './categories.module.css';


const Categories = ({ categories, url }) => {
    return (
        <div className={styles.categories}>
            {
                categories.map(({ id, name, url: query }) => (
                    <Link
                        to={`/products/${url}?category=${query}`}
                        key={id}
                    >
                        {name}
                    </Link>
                ))
            }
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    categories: catalogCategories(state, props)
});

export default connect(mapStateToProps)(Categories);