import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { cartItemCount, cartEntity } from '../../redux/selectors'
import cn from 'classnames'
import { changeCartItemCount, removeItemFromCart } from '../../redux/actions'
import { ReactComponent as CrossIcon } from '../../assets/svg/cross.svg'
import { ReactComponent as PlusIcon } from '../../assets/svg/plus.svg'
import { ReactComponent as MinusIcon } from '../../assets/svg/minus.svg'


const CartItem = ({id}) => {
   const [hover, setHover] = useState(false)
   const dispatch = useDispatch()
   const itemsCount = useSelector(state => cartItemCount(state, id))
   const { title, p, discount, img, url, productUrl } = useSelector(state => cartEntity(state, id))
   const increase = () => itemsCount < 99 && dispatch(changeCartItemCount(id, itemsCount + 1))
   const decrease = () => itemsCount > 0 && dispatch(changeCartItemCount(id, itemsCount - 1))
   const clearItem = useCallback(() =>  dispatch(removeItemFromCart(id)), []) // eslint-disable-line

   return (
      <div className={cn('cart__product', {'hover': hover })}>
         <Link
            to={`/products/${url}/${productUrl}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <img src={process.env.PUBLIC_URL + img} alt='product item' />
         </Link>
         <div>
            <h2>{title}</h2>
            <p className='cart__product-price'>
               {p.toLocaleString('ru-RU', {style: 'currency',  minimumFractionDigits:0, currency:'RUB'})}
               {!!discount && <span className='cart__product-promo'>-{discount} %</span> }
            </p>
         </div>
         <div>
            <div className='cart__product-count'>
               <div>
                  <button onClick={decrease}>
                     <MinusIcon />
                  </button>
                  <span>{itemsCount}</span>
                  <button onClick={increase}>
                     <PlusIcon />
                  </button>
               </div>
               <button onClick={clearItem}>
                  <CrossIcon className='cart__product-clear-icon' />
               </button>
            </div>
         </div>
      </div>
   )
}

export default CartItem