import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeCartItemCount, removeItemFromCart } from '../../../redux/actions';
import { cartItemCount } from '../../../redux/selectors';
import cn from 'classnames';
import { ReactComponent as CartIcon } from '../../../assets/svg/cart.svg';
import { ReactComponent as CompareIcon } from '../../../assets/svg/compare.svg';
import { ReactComponent as PlusIcon } from '../../../assets/svg/plus.svg';
import { ReactComponent as MinusIcon } from '../../../assets/svg/minus.svg';
import { ReactComponent as RublIcon } from '../../../assets/svg/rubl.svg';
import styles from './slider-panel.module.css';


const SliderPanel = ({ id, price, changeCartItemCount, removeItemFromCart, cartItemCount }) => {
    const incart = isFinite(cartItemCount);
    const history = useHistory();

    const increase = () => incart ? changeCartItemCount(id, cartItemCount + 1) : changeCartItemCount(id, 1);
    const decrease = () => incart && cartItemCount > 0 ? changeCartItemCount(id, cartItemCount - 1) : removeItemFromCart(id);
    const addItem = () => !incart && increase();
    const openCart = () => history.push('/home/cart');

    return (
        <div className={styles.container}>
            <div className={styles.articul}>Артикул:<span>{id}</span></div>

            <div className={styles.price}>
                <span>{price} <RublIcon /></span>
                <button className={styles.compare}>
                    <CompareIcon />Сравнить
                </button>
            </div>

            <div className={styles.count}>
                <span>Количество</span>
                <div>
                    <button onClick={decrease}><MinusIcon /></button>
                    <span>{cartItemCount || 0}</span>
                    <button onClick={increase}><PlusIcon /></button>
                </div>
            </div>

            <div className={styles.buy}>
                <button>Купить в один клик</button>
                <button
                    onClick={incart ? openCart : addItem}
                    className={cn({ [styles.active]: incart })}>
                    <CartIcon />
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, { id }) => ({ cartItemCount: cartItemCount(state, id) })

export default connect(mapStateToProps, { changeCartItemCount, removeItemFromCart })(SliderPanel)