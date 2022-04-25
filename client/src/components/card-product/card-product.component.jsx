import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { cartItemCount, compareItem } from '../../redux/selectors'
import { changeCartItemCount, removeItemFromCart, toggleCompareItem } from '../../redux/actions'
import cn from 'classnames'
import { currency } from '../../utils/currency'
import Rating from '../rating/rating.component'
import { ReactComponent as CartIcon } from '../../assets/svg/cart.svg'
import { ReactComponent as CompareIcon } from '../../assets/svg/compare.svg'


const CardProduct = ({ tiles, product, withRating = true }) => {
   const { id, img, alt, title, url, productUrl, reviewers, p, r, promo, newItem } = product
   const count = useSelector(state => cartItemCount(state, id))
   const inCompare = useSelector(state => compareItem(state, id))
   const incart = isFinite(count)
   const [hover, setHover] = useState(false)
   const dispatch = useDispatch()
   const handleClick = () => !incart ? dispatch(changeCartItemCount(id, 1)) : dispatch(removeItemFromCart(id))
   const addToCompare = () => dispatch(toggleCompareItem(id))

   return (
      <div
         className={cn(
            'card-product',
            { 'row': !tiles },
            { 'promo': promo },
            { 'new': newItem },
            { 'hover': hover }
         )}>
         <Link
            className='card-product__link'
            to={`/products/${url}/${productUrl}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <img src={img} alt={alt} width='600' height='600' />
         </Link>

         {withRating &&
            <Rating r={r} wrapperClass='card-product__rating'>
               <span>({reviewers})</span>
            </Rating>
         }
         <p className='card-product__title'>{title}</p>
         <p className='card-product__price'>{currency(p)}</p>

         <button
            className={cn('card-product__btn-cart', { 'active': incart })}
            onClick={handleClick}>
            <CartIcon /> {incart ? 'Товар в корзине' : 'В корзину'}
         </button>

         <button
            className={cn('card-product__btn-compare', { 'active': inCompare })}
            onClick={addToCompare}
            aria-label={`добавить в сравнить товары ${title}`}
         >
            <CompareIcon />
         </button>
      </div>
   )
}

export default CardProduct