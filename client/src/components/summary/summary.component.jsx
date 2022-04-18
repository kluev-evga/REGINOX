import { Link, useMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { cartItems, cartItemsArray, cartEntities } from '../../redux/selectors'


const CartSummary = () => {
   const isCart = useMatch('/cart');
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

   const totalPrice = total.toLocaleString('ru-RU', {style: 'currency',  minimumFractionDigits:0, currency:'RUB'})
   const grossTotalPrice = grossTotal.toLocaleString('ru-RU', {style: 'currency', minimumFractionDigits:0, currency:'RUB'})
   const discount = parseFloat(Number((100 - (total * 100) / grossTotal).toFixed(1)))

   return (
      <div className='summary'>
         <h2>Ваша корзина</h2>

         <div className='summary__price'>
            <p>Товары<span>({count})</span></p>
            <span>{grossTotalPrice}</span>
            {!!discount && <p>Скидка</p>}
            {!!discount && <span>{discount} %</span>}
         </div>

         <div className='summary__price-total'>
            <p>Итого</p>
            <span>{totalPrice}</span>
         </div>

         {!!total && isCart && <Link to='order' className='button-form'>Перейти к оплате</Link>}
         {!isCart && <button className='button-form'>Оплатить</button>}

         <p className='form-agreement'>Нажимая кнопку отправить вы даете согласие на обработку пресональных данных</p>
      </div>
   )
}

export default CartSummary