import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuTitleByUrl, productItem } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive'
import cn from 'classnames';
import Slider from './slider/slider.component';
import SliderPanel from './slider-panel/slider-panel.component';
import PhoneView from './phone-view/phone-view.component';
import TabsContainer from './tabs-container/tabs-container.component';
import styles from './product.module.css';


const Product = ({ match, getTitle, productItem }) => {
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
    const { url, categoryUrl, productUrl } = match.params;
    const { id, title, price, specs, images, promo, newItem } = productItem(productUrl);
    const linkTitle = getTitle(url);

    return (
        <div className="container">
            <div className={"breadcrumbs " + styles.breadcrumbs}>
                <Link to='/'>Главная</Link> / <Link to={`/products/${url}/${categoryUrl}`}>{linkTitle}</Link> / <div>{title}</div>
            </div>

            <div className={styles.wrapper}>
                <Slider images={images} />
                <h1 className={styles.title}>
                    {title}
                    <i> </i>
                    <span className={cn({ [styles.promo]: promo })}></span>
                    <span className={cn({ [styles.new_item]: newItem })}></span>
                </h1>
                <SliderPanel id={id} price={price} />
                {isTablet ? <TabsContainer specs={specs} /> : <PhoneView specs={specs} />}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    getTitle: menuTitleByUrl(state),
    productItem: productItem(state)
})

export default connect(mapStateToProps)(Product)