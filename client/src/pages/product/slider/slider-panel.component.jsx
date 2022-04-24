import { useSelector, useDispatch } from 'react-redux'
import { changeCartItemCount, removeItemFromCart, toggleCompareItem } from '../../../redux/actions'
import { cartItemCount, compareItem } from '../../../redux/selectors'
import cn from 'classnames'
import { currency } from '../../../utils/currency'
import ProductModal from '../product-modal/product-modal.component'
import ProductsCountPanel from '../../../components/products-count-panel/products-count-panel.component'
import { ReactComponent as CartIcon } from '../../../assets/svg/cart.svg'
import { ReactComponent as CompareIcon } from '../../../assets/svg/compare.svg'


const SliderPanel = ({ id, price, discount }) => {
   const dispatch = useDispatch()
   const count = useSelector(state => cartItemCount(state, id))
   const isCompare = useSelector(state => compareItem(state, id))

   const incart = isFinite(count)
   const increase = () =>
      incart ? count < 99 && dispatch(changeCartItemCount(id, count + 1)) : dispatch(changeCartItemCount(id, 1))
   const decrease = () =>
      incart && count > 1 ? dispatch(changeCartItemCount(id, count - 1)) : dispatch(removeItemFromCart(id))
   const onCartButtonClick = () => incart ? dispatch(removeItemFromCart(id)) : increase()

   return (
      <div className='product-panel'>
         <div className='product-panel__articul'>
            Артикул:<span>{id}</span>
         </div>

         <div className='product-panel__price'>
            <span>
               {currency(price)}
               {Boolean(discount) && <b> -{discount}%</b>}
            </span>
            <button
               className={cn('product-panel__compare', { 'active': isCompare })}
               onClick={() => dispatch(toggleCompareItem(id))}>
               <CompareIcon />
               Сравнить
            </button>
         </div>

         <ProductsCountPanel wrapperClass='product-panel__count' increase={increase} decrease={decrease} count={count} />

         <div className='product-panel__buy'>
            <ProductModal />
            <button
               onClick={onCartButtonClick}
               className={cn('product-panel__buy-cart', { 'active': incart })}>
               <CartIcon />
               <span>Товар в корзине</span>
            </button>
         </div>
      </div>
   )
}

export default SliderPanel