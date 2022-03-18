import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { product } from '../../../redux/selectors';
import cn from 'classnames';
import { ReactComponent as Cart } from '../../../assets/svg/cart.svg';
import styles from './product-card.module.css';


const ProductCard = ({ tiles, product }) => {
    const [hover, setHover] = useState(false);
    const { img, alt, title, price, promo, sale } = product;

    return (
        <div className={cn(
            styles.card,
            { [styles.row]: !tiles },
            { [styles.promo]: promo },
            { [styles.sale]: sale },
            { [styles.hover]: hover })}>
            <p className={styles.title}>{title}</p>
            <Link
                to='/'
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

const mapStateToProps = (state, { url, id }) => ({
    product: product(state, url, id)
});

export default connect(mapStateToProps)(ProductCard);