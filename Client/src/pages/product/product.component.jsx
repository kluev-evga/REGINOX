import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuTitleByUrl, productItem } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive'
import Slider from './slider/slider.component';
import Controls from './controls/controls.component';
import InformationContainer from './information-container/information-container.component';
import TabsContainer from './tabs/tabs.component';
import styles from './product.module.css';


const Product = ({ match, getTitle, productItem }) => {
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
    const { url, categoryUrl, productUrl } = match.params;
    const { id, title, price, specs, images } = productItem(productUrl);
    const linkTitle = getTitle(url);

    return (
        <div className={"container"}>
            <div className={"breadcrumbs " + styles.breadcrumbs}>
                <Link to='/'>Главная</Link> / <Link to={`/products/${url}/${categoryUrl}`}>{linkTitle}</Link> / <div>{title}</div>
            </div>

            <div className={styles.wrapper}>
                <Slider images={images} />
                <h1 className={styles.title}>{title}</h1>
                <Controls id={id} price={price} />
                {isTablet ? <TabsContainer specs={specs} /> : <InformationContainer specs={specs} />}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    getTitle: menuTitleByUrl(state),
    productItem: productItem(state)
})

export default connect(mapStateToProps)(Product)