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


const SliderPanel = ({ id, price, discount, changeCartItemCount, removeItemFromCart, cartItemCount }) => {
    const incart = isFinite(cartItemCount);
    const increase = () => incart ? cartItemCount < 99 && changeCartItemCount(id, cartItemCount + 1) : changeCartItemCount(id, 1);
    const decrease = () => incart && cartItemCount > 1 ? changeCartItemCount(id, cartItemCount - 1) : removeItemFromCart(id);
    const addItem = () => !incart && increase();

    return (
        <div className={styles.container}>
            <div className={styles.articul}>Артикул:<span>{id}</span></div>

            <div className={styles.price}>
                <span>
                    {price.toLocaleString('ru-RU')} <RublIcon />
                    {!!discount && <b> -{discount}%</b>}
                </span>
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

            {cartItemCount === 99 && <span>Телефон для оптовых клиентов: <a className='link_secondary' href="tel:84952298559">8 (495) 229 85 59</a></span>}

            <div className={styles.buy}>
                <button>Купить в один клик</button>
                <button
                    onClick={addItem}
                    className={cn({ [styles.active]: incart })}>
                    <CartIcon />
                    <span>Товар в корзине</span>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, { id }) => ({ cartItemCount: cartItemCount(state, id) })

export default connect(mapStateToProps, { changeCartItemCount, removeItemFromCart })(SliderPanel)