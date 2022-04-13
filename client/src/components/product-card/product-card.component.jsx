import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { cartItemCount, compareItem } from '../../redux/selectors'
import {
   changeCartItemCount,
   removeItemFromCart,
   toggleCompareItem,
} from '../../redux/actions'
import cn from 'classnames'
import { ReactComponent as Cart } from '../../assets/svg/cart.svg'
import { ReactComponent as RublIcon } from '../../assets/svg/rubl.svg'
import { ReactComponent as StarIcon } from '../../assets/svg/star.svg'
import { ReactComponent as CompareIcon } from '../../assets/svg/compare.svg'
import styles from './product-card.module.css'

const RatingBlock = ({ r, reviewers }) => (
   <div className={styles.rating}>
      {[...Array(5)].map((_, i) => (
         <StarIcon key={i} className={r > i + 0.5 ? '' : styles.clear} />
      ))}
      <span>({reviewers})</span>
   </div>
)

const Button = ({ children, noFocus, ...rest }) =>
   noFocus ? (
      <span {...rest}>{children}</span>
   ) : (
      <button {...rest}>{children}</button>
   )

const ProductCard = ({
   tiles,
   product,
   withRating = true,
   categoryUrl = 'all',
   noFocus,
}) => {
   const {
      id,
      img,
      alt,
      title,
      url,
      productUrl,
      reviewers,
      p,
      r,
      promo,
      newItem,
   } = product
   const count = useSelector(state => cartItemCount(state, id))
   const inCompare = useSelector(state => compareItem(state, id))
   const incart = isFinite(count)
   const price = p.toLocaleString('ru-RU')

   const [hover, setHover] = useState(false)

   const dispatch = useDispatch()
   const handleClick = () =>
      !incart
         ? dispatch(changeCartItemCount(id, 1))
         : dispatch(removeItemFromCart(id))
   const addToCompare = () => dispatch(toggleCompareItem(id))

   return (
      <div
         className={cn(
            styles.card,
            { [styles.row]: !tiles },
            { [styles.promo]: promo },
            { [styles.new_item]: newItem },
            { [styles.hover]: hover }
         )}>
         <Link
            to={`/products/${url}/${categoryUrl}/${productUrl}`}
            className={styles.link}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <img
               src={process.env.PUBLIC_URL + img}
               alt={alt}
               className={styles.img}
               width='600'
               height='600'
            />
         </Link>

         {withRating && <RatingBlock r={r} reviewers={reviewers} />}
         <p className={styles.title}>{title}</p>

         <p className={styles.price}>
            {price}
            <RublIcon />
         </p>

         <Button
            noFocus={noFocus}
            className={cn(styles.btn_cart, { [styles.active]: incart })}
            onClick={handleClick}>
            <Cart /> {incart ? 'Товар в корзине' : 'В корзину'}
         </Button>

         <button
            className={cn(styles.btn_compare, { [styles.active]: inCompare })}
            onClick={addToCompare}>
            <CompareIcon />
         </button>
      </div>
   )
}

export default ProductCard
