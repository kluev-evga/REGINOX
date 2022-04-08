import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cartItemsArray, cartloading } from '../../redux/selectors';
import { loadCart } from '../../redux/actions';
import CartItem from './cart-item/cart-item.component';
// import CartSummary from './cart-summary/cart-summary.component';
import Loader from '../../components/loader/loader.coponent';
import styles from './cart.module.css';



const Cart = ({ cartItems, loading, loadCart }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
        loadCart(cartItems.join('_'))
    }, []);//eslint-disable-line

    useEffect(() => { !loading && setLoaded(true) }, [loading]);

    if (cartItems.length && (loading || !loaded)) return <Loader />;

    console.log(cartItems);

    return (
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


            </div>
        </div>
    )
}

// {!!cartItems.length && <CartSummary />}

const mapStateToProps = state => ({
    cartItems: cartItemsArray(state),
    loading: cartloading(state),
})

export default connect(mapStateToProps, { loadCart })(Cart)