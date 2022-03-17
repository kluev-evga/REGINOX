import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { product } from '../../../redux/selectors';
import cn from 'classnames';
import { ReactComponent as Cart } from '../../../assets/svg/cart.svg';
import styles from './product-card.module.css';


const ProductCard = ({ tiles, product }) => {
    const { img, alt, name, price } = product;
    return (
        <div className={cn(styles.card, { [styles.tiles]: tiles })}>
            <Link to='/' className={styles.link}>
                <img src={process.env.PUBLIC_URL + img} alt={alt} className={styles.img} />
                <div className={styles.card_text}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.price}>{price} руб</p>
                </div>
            </Link>
            <button className={styles.button + ' button-block'}>
                <Cart />
                В корзину
            </button>
        </div>
    );
};

const mapStateToProps = (state, { url, id }) => ({
    product: product(state, url, id)
});

export default connect(mapStateToProps)(ProductCard);