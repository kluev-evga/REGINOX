import { connect } from 'react-redux';
import { cartItemCount, productItemById } from '../../../redux/selectors';
import { changeCartItemCount, removeItemFromCart } from '../../../redux/actions';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';
import { ReactComponent as PlusIcon } from '../../../assets/svg/plus.svg';
import { ReactComponent as MinusIcon } from '../../../assets/svg/minus.svg';
import { ReactComponent as RublIcon } from '../../../assets/svg/rubl.svg';
import styles from './cart-item.module.css';


const CartItem = ({ id, changeCartItemCount, removeItemFromCart, cartItemCount, productItem }) => {
    const increase = () => cartItemCount < 99 && changeCartItemCount(id, cartItemCount + 1);
    const decrease = () => cartItemCount > 0 ? changeCartItemCount(id, cartItemCount - 1) : removeItemFromCart(id);
    const { price, discount, img, title } = productItem;

    return (
        <div className={styles.container}>
            <img src={process.env.PUBLIC_URL + img} alt='product item' />
            <div>
                <h2>{title}</h2>
                <p className={styles.price}>
                    {price} руб<RublIcon />
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
    productItem: productItemById(state, id),
})

export default connect(mapStateToProps, { changeCartItemCount, removeItemFromCart })(CartItem)