import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuTitleByUrl } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive';
import Filters from '../../components/filters/filters-container.component';
import ProductsContainer from './products-container/products-container.component';
import styles from './products.module.css';


const Products = ({ getTitle, match }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const title = getTitle(match.params.url);

    return (
        <div className="container">
            <div className="breadcrumbs">
                <Link to='/'>Главная</Link> / {title}
            </div>
            <h1 className="title">{title}</h1>

            <div className={styles.wrapper}>
                {isDesktop && <Filters />}
                <ProductsContainer />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ getTitle: menuTitleByUrl(state) });

export default connect(mapStateToProps)(Products);