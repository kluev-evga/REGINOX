import { connect } from 'react-redux';
import { productItemsById, cartItems, cartItemsArray } from '../../../redux/selectors';
import styles from './cart-summary.module.css';


const CartSummary = ({ cartItems, cartItemsArray, productItems }) => {
    const { total, count, grossTotal } = cartItemsArray.reduce((acc, id) => {
        const { price, discountedPrice } = productItems[id];
        const itemPrice = discountedPrice ? discountedPrice : price;
        const count = cartItems[id];
        acc.total = acc.total + itemPrice * count;;
        acc.count = acc.count + count;
        acc.grossTotal = acc.grossTotal + price * count;
        return acc
    }, { total: 0, count: 0, grossTotal: 0 });

    const totalPrice = total.toLocaleString('ru-RU');
    const grossTotalPrice = grossTotal.toLocaleString('ru-RU');
    const discount = parseFloat(Number((100 - total * 100 / grossTotal).toFixed(1)));

    return (
        <div className={styles.summary}>
            <h2>Ваша корзина</h2>

            <div className={styles.price}>
                <p>Товары<span>({count})</span></p>
                <span>{grossTotalPrice} руб</span>
                {!!discount && <p>Скидка</p>}
                {!!discount && <span>{discount} %</span>}
            </div>

            <div className={styles.total}>
                <p>Итого</p>
                <span>{totalPrice} руб</span>
            </div>

            {!!total && <button className='button-block'>Перейти к оплате</button>}

        </div>
    )
}

const mapStateToProps = state => ({
    productItems: productItemsById(state),
    cartItems: cartItems(state),
    cartItemsArray: cartItemsArray(state)
})

export default connect(mapStateToProps)(CartSummary)