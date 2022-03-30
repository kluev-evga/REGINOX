import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuTitleByUrl, productItem } from '../../redux/selectors';
import TabsContainer from './tabs-container/tabs-container.component';
import Slider from './slider/slider.component';
import styles from './product.module.css';







const Product = ({ match, getTitle, productItem }) => {
    const { url, categoryUrl, productUrl } = match.params;
    const linkTitle = getTitle(url);

    const product = productItem(productUrl);
    const title = product.title;

    const { slider, specs } = product;


    return (
        <div className="container">
            <div className="breadcrumbs">
                <Link to='/'>Главная</Link> / <Link to={`/products/${url}/${categoryUrl}`}>{linkTitle}</Link> / {title}
            </div>

            <div className={styles.wrapper}>
                <h1 className={styles.title}>{title}</h1>

                <Slider slider={slider} />
                <TabsContainer specs={specs} />

            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    getTitle: menuTitleByUrl(state),
    productItem: productItem(state)
});

export default connect(mapStateToProps)(Product);