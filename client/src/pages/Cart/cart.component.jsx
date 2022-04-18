import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartLoaded, cartItemsArray, cartEntities } from '../../redux/selectors'
import { loadCart } from '../../redux/actions'
import CartItem from './cart-item.component'
import CartSummary from '../../components/summary/summary.component'
import Loader from '../../components/loader/loader.coponent'
import Empty from '../../components/empty/empty.component'


const Cart = () => {
   const dispatch = useDispatch()
   const isLoading = !useSelector(cartLoaded)
   const cartItems = useSelector(cartItemsArray)
   const cartItemEntities = useSelector(cartEntities)

   const itemsToLoad = useMemo( () => cartItems.filter(id => cartItemEntities[id] ? false : id), [cartItemEntities] ) //eslint-disable-line
   useEffect(() => { dispatch(loadCart(itemsToLoad)) }, []) //eslint-disable-line
   if (isLoading || itemsToLoad.length !== 0) return <Loader />

   return (
      <div className='container cart'>

         <div className='breadcrumbs'> <Link to='/'>Главная</Link> / корзина </div>

         <h1 className='title'>Корзина</h1>

         <div className='cart__container'>
            <div className='cart__items-container'>
               {cartItems.map(id => <CartItem key={id} id={id} /> )}
               {!cartItems.length && <Empty/>}
            </div>

            <CartSummary />
         </div>
      </div>
   )
}

export default Cart