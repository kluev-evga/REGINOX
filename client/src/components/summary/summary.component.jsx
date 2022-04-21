import { useSelector } from 'react-redux'
import { cartItems, cartItemsArray, cartEntities } from '../../redux/selectors'
import { currency } from '../../utils/currency'


const CartSummary = ({ children }) => {
   const items = useSelector(cartItems)
   const itemsArr = useSelector(cartItemsArray)
   const entities = useSelector(cartEntities)

   const { total, count, grossTotal } = itemsArr.reduce(
      (acc, id) => {
         const { p, discountedPrice } = entities[id]
         const count = items[id]
         acc.total = acc.total + discountedPrice * count
         acc.count = acc.count + count
         acc.grossTotal = acc.grossTotal + p * count
         return acc
      },
      { total: 0, count: 0, grossTotal: 0 }
   )
   const discount = parseFloat(Number((100 - (total * 100) / grossTotal).toFixed(1)))

   return (
      <div className='summary'>
         <h2>Ваша корзина</h2>

         <div className='summary__price'>
            <p>Товары<span>({count})</span></p>
            <span>{currency(grossTotal)}</span>
            {Boolean(discount) && <p>Скидка</p>}
            {Boolean(discount) && <span>{discount} %</span>}
         </div>

         <div className='summary__price-total'>
            <p>Итого</p><span>{currency(total)}</span>
         </div>

         {children}
      </div>
   )
}

export default CartSummary