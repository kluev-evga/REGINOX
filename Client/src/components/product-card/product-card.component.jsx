import { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { ReactComponent as Cart } from '../../assets/svg/cart.svg';
import { ReactComponent as RublIcon } from '../../assets/svg/rubl.svg';
import { ReactComponent as StarIcon } from '../../assets/svg/star.svg';
import styles from './product-card.module.css';


const RatingBlock = ({ r, reviewers }) => (
    <div className={styles.rating}>
        {[...Array(5)].map((_, i) => <StarIcon key={i} className={r > i ? '' : styles.clear} />)}
        <span>({reviewers})</span>
    </div>
)

const ProductCard = ({ tiles, product, withRating = true, categoryUrl = 'all' }) => {
    const [hover, setHover] = useState(false);
    const { img, alt, title, url, productUrl, reviewers, price, r, promo, newItem, } = product;

    return (
        <div className={cn(
            styles.card,
            { [styles.row]: !tiles },
            { [styles.promo]: promo },
            { [styles.new_item]: newItem },
            { [styles.hover]: hover })}>

            <Link
                to={`/products/${url}/${categoryUrl}/${productUrl}`}
                className={styles.link}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <img
                    src={process.env.PUBLIC_URL + img} alt={alt}
                    className={styles.img}
                    width='600'
                    height='600' />
            </Link>

            {withRating && <RatingBlock r={r} reviewers={reviewers} />}
            <p className={styles.title}>{title}</p>

            <p className={styles.price}>
                {price}
                <RublIcon />
            </p>

            <button className={styles.button + ' button-block'}>
                <Cart /> В корзину
            </button>
        </div>
    )
}

export default ProductCard