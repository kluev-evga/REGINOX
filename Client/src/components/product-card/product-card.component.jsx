import { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { ReactComponent as Cart } from '../../assets/svg/cart.svg';
import styles from './product-card.module.css';


const ProductCard = ({ tiles, product, url }) => {
    const [hover, setHover] = useState(false);
    const { img, alt, title, price, productUrl, promo, newItem } = product;

    return (
        <div className={cn(
            styles.card,
            { [styles.row]: !tiles },
            { [styles.promo]: promo },
            { [styles.new_item]: newItem },
            { [styles.hover]: hover })}>
            <p className={styles.title}>{title}</p>
            <Link
                to={`/products/${url}/${productUrl}`}
                className={styles.link}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <img
                    src={process.env.PUBLIC_URL + img} alt={alt}
                    className={styles.img} />
            </Link>
            <p className={styles.price}>{price} руб</p>
            <button className={styles.button + ' button-block'}>
                <Cart /> В корзину
            </button>
        </div>
    );
};

export default ProductCard;