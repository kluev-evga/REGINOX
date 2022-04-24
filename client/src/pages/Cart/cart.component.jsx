import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { cartHasItems } from '../../redux/selectors'
import CartItem from './cart-item.component'
import CartSummary from '../../components/summary/summary.component'
import { ReactComponent as EmptyIcon } from '../../assets/svg/empty.svg'
import './cart.scss'


const Cart = ({cartItems}) => {
   const ref = useRef()
   const hasItems = useSelector(cartHasItems);
   useEffect(() => {ref.current.scrollIntoView({block: "start"})}, [])

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