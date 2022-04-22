import { useEffect, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartLoaded, cartItemsArray, cartEntities, cartHasItems } from '../../redux/selectors'
import { loadCart } from '../../redux/actions'
import CartItem from './cart-item.component'
import CartSummary from '../../components/summary/summary.component'
import Loader from '../../components/loader/loader.coponent'
import { ReactComponent as EmptyIcon } from '../../assets/svg/empty.svg'


const Cart = () => {
   const ref = useRef()
   const dispatch = useDispatch()
   const isLoading = !useSelector(cartLoaded)
   const cartItems = useSelector(cartItemsArray)
   const cartItemEntities = useSelector(cartEntities)
   const hasItems = useSelector(cartHasItems);

   const itemsToLoad = useMemo( () => cartItems.filter(id => cartItemEntities[id] ? false : id), [cartItemEntities] ) //eslint-disable-line
   useEffect(() => { dispatch(loadCart(itemsToLoad)) }, []) //eslint-disable-line
   useEffect(() => {ref.current.scrollIntoView({block: "start"})}, [])
   if (isLoading || itemsToLoad.length !== 0) return <Loader />

   return (
      <div className='container cart' ref={ref}>
         <div className='breadcrumbs'> <Link to='/'>Главная</Link> / корзина </div>
         <h1 className='title'>Корзина</h1>

         {hasItems
            ? <div className='cart__container'>
               <div className='cart__items-container'>
                  {cartItems.map(id => <CartItem key={id} id={id} /> )}
               </div>
               <CartSummary>
                  <Link to='order' className='button-form'>Перейти к оплате</Link>
               </CartSummary>
            </div>
            : <EmptyIcon height='300' style={{margin: '0 auto'}}/>
         }
      </div>
   )
}

export default Cart