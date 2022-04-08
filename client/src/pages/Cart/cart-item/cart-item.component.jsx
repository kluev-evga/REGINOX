import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cartItemCount, cartItem } from '../../../redux/selectors';
import { changeCartItemCount, removeItemFromCart } from '../../../redux/actions';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';
import { ReactComponent as PlusIcon } from '../../../assets/svg/plus.svg';
import { ReactComponent as MinusIcon } from '../../../assets/svg/minus.svg';
import { ReactComponent as RublIcon } from '../../../assets/svg/rubl.svg';
import styles from './cart-item.module.css';


const CartItem = ({ changeCartItemCount, removeItemFromCart, cartItemCount, cartItem }) => {
    const { id, title, p, discount, img, url, productUrl } = cartItem;
    const increase = () => cartItemCount < 99 && changeCartItemCount(id, cartItemCount + 1);
    const decrease = () => cartItemCount > 0 && changeCartItemCount(id, cartItemCount - 1);

    return (
        <div className={styles.container}>
            <Link to={`/products/${url}/all/${productUrl}`}>
                <img src={process.env.PUBLIC_URL + img} alt='product item' />
            </Link>
            <div>
                <h2>{title}</h2>
                <p className={styles.price}>
                    {p.toLocaleString('ru-RU')} руб<RublIcon />
                    {!!discount && <span className={styles.promo}>-{discount} %</span>}
                </p>
            </div>
            <div>
                <div className={styles.count}>
                    <div>
                        <button onClick={decrease}><MinusIcon /></button>
                        <span>{cartItemCount}</span>
                        <button onClick={increase}><PlusIcon /></button>
                    </div>
                    <button
                        className={styles.clear}
                        onClick={() => removeItemFromCart(id)}>
                        <CrossIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, { id }) => ({
    cartItemCount: cartItemCount(state, id),
    cartItem: cartItem(state, id)
})

export default connect(mapStateToProps, { changeCartItemCount, removeItemFromCart })(CartItem)