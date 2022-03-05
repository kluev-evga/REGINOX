import { Link } from 'react-router-dom';
import cn from 'classnames';
import { ReactComponent as Cart } from '../../../assets/svg/cart.svg';
import styles from './product-card.module.css';


const ProductCard = ({ tiles, img, alt, name, price }) => (
    <div className={cn(styles.card, { [styles.tiles]: tiles })}>
        <Link to='/' className={styles.link}>
            <img src={img} alt={alt} className={styles.img} />
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

export default ProductCard;