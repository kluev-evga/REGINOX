import { useSelector, useDispatch } from 'react-redux'
import { changeCartItemCount, removeItemFromCart, toggleCompareItem } from '../../../redux/actions'
import { cartItemCount, compareItem } from '../../../redux/selectors'
import cn from 'classnames'
import ModalBuy from '../modal/product-modal.component'
import { currency } from '../../../utils/currency'
import { ReactComponent as CartIcon } from '../../../assets/svg/cart.svg'
import { ReactComponent as CompareIcon } from '../../../assets/svg/compare.svg'
import { ReactComponent as PlusIcon } from '../../../assets/svg/plus.svg'
import { ReactComponent as MinusIcon } from '../../../assets/svg/minus.svg'


const SliderPanel = ({ id, price, discount }) => {
   const dispatch = useDispatch()
   const itemsCount = useSelector(state => cartItemCount(state, id))
   const isCompareItem = useSelector(state => compareItem(state, id))

   const incart = isFinite(itemsCount)
   const increase = () =>
      incart ? itemsCount < 99 && dispatch(changeCartItemCount(id, itemsCount + 1)) : dispatch(changeCartItemCount(id, 1))
   const decrease = () =>
      incart && itemsCount > 1 ? dispatch(changeCartItemCount(id, itemsCount - 1)) : dispatch(removeItemFromCart(id))
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
               className={cn('product-panel__compare', { 'active': isCompareItem })}
               onClick={() => dispatch(toggleCompareItem(id))}>
               <CompareIcon />
               Сравнить
            </button>
         </div>

         <div className='product-panel__count'>
            <span>Количество</span>
            <div>
               <button onClick={decrease} aria-label='уменьшить количество'>
                  <MinusIcon />
               </button>
               <span>{itemsCount || 0}</span>
               <button onClick={increase} aria-label='увеличить количество'>
                  <PlusIcon />
               </button>
            </div>
         </div>

         <div className='product-panel__buy'>
            <ModalBuy/>
            <button
               onClick={onCartButtonClick}
               className={cn('product-panel__buy-cart',{ 'active': incart })}>
               <CartIcon />
               <span>Товар в корзине</span>
            </button>
         </div>
      </div>
   )
}

export default SliderPanel