import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { cartLoaded, cartItemsArray, cartEntities } from '../../redux/selectors'
import { loadCart } from '../../redux/actions'
import CartItem from './cart-item/cart-item.component'
import CartSummary from './cart-summary/cart-summary.component'
import Loader from '../../components/loader/loader.coponent'
import styles from './cart.module.css'

const Cart = ({ cartItems, loaded, loadCart, cartEntities }) => {
   const itemsToLoad = useMemo(
      () => cartItems.filter(id => (cartEntities[id] ? false : id)),
      [cartEntities]
   ) //eslint-disable-line
   useEffect(() => {
      loadCart(itemsToLoad)
   }, []) //eslint-disable-line
   if (!loaded || itemsToLoad.length !== 0) return <Loader />

   return (
      <div className={'container'}>
         <div className={'breadcrumbs'}>
            <Link to='/home'>Главная</Link> / корзина
         </div>
         <h1 className={'title'}>Корзина</h1>

         <div className={styles.wrapper}>
            <div className={styles.container}>
               {cartItems.map(id => (
                  <CartItem key={id} id={id} />
               ))}
               {!cartItems.length && <p>В корзине ничего нет</p>}
            </div>

            <CartSummary />
         </div>
      </div>
   )
}

const mapStateToProps = state => ({
   cartItems: cartItemsArray(state),
   loaded: cartLoaded(state),
   cartEntities: cartEntities(state),
})

export default connect(mapStateToProps, { loadCart })(Cart)
