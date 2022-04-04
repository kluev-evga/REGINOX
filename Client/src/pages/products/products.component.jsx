import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuTitleByUrl, queryString } from '../../redux/selectors';
import { setQueryString } from '../../redux/actions';
import { useMediaQuery } from 'react-responsive';
import Filters from '../../components/filters/filters-container.component';
import ProductsContainer from './products-container/products-container.component';
import styles from './products.module.css';


const Products = ({ getTitle, queryString, match, location, history, setQueryString }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const url = match.params.url;
    const title = getTitle(url);

    useEffect(() => queryString && history.push({ search: queryString }), [])//eslint-disable-line
    useEffect(() => setQueryString(url, location.search), [location.search]);//eslint-disable-line

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

const mapStateToProps = (state, props) => ({
    getTitle: menuTitleByUrl(state),
    queryString: queryString(state, props)
})

export default connect(mapStateToProps, { setQueryString })(Products)