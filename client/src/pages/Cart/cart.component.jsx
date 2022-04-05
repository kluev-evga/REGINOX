import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cartItemsArray } from '../../redux/selectors';
import withMenuLoader from '../../hoc/with-menu-loader';
import CartItem from './cart-item/cart-item.component';
import CartSummary from './cart-summary/cart-summary.component';
import styles from './cart.module.css';


const Cart = ({ cartItems }) => (
    <div className={"container"} >
        <div className={"breadcrumbs"}>
            <Link to='/'>Главная</Link> / корзина
        </div>
        <h1 className={'title'}>Корзина</h1>

        <div className={styles.wrapper}>

            <div className={styles.container}>
                {cartItems.map(id => <CartItem key={id} id={id} />)}
                {!cartItems.length && <p>В корзине пусто</p>}
            </div>

            {!!cartItems.length && <CartSummary />}
        </div>
    </div>
)

const mapStateToProps = state => ({ cartItems: cartItemsArray(state) })

export default withMenuLoader(connect(mapStateToProps)(Cart))