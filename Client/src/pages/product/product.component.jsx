import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuTitleByUrl, productItem } from '../../redux/selectors';
import styles from './product.module.css';


const Product = ({ match, getTitle, productItem }) => {
    const { url, categoryUrl, productUrl } = match.params;
    const linkTitle = getTitle(url);

    const product = productItem(productUrl);
    const title = product.title;


    return (
        <div className="container">
            <div className="breadcrumbs">
                <Link to='/'>Главная</Link> / <Link to={`/products/${url}/${categoryUrl}`}>{linkTitle}</Link> / {title}
            </div>
            <h1 className="title">{'title'}</h1>

            <div className={styles.wrapper}>

                asdfasdf
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    getTitle: menuTitleByUrl(state),
    productItem: productItem(state)
});

export default connect(mapStateToProps)(Product);