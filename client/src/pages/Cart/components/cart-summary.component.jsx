import { connect } from 'react-redux'
import { cartItems, cartItemsArray, cartEntities } from '../../../redux/selectors'
import { ReactComponent as RublIcon } from '../../../assets/svg/rubl.svg'


const CartSummary = ({ cartItems, cartItemsArray, cartEntities }) => {
   const { total, count, grossTotal } = cartItemsArray.reduce(
      (acc, id) => {
         const { p, discountedPrice } = cartEntities[id]
         const count = cartItems[id]
         acc.total = acc.total + discountedPrice * count
         acc.count = acc.count + count
         acc.grossTotal = acc.grossTotal + p * count
         return acc
      },
      { total: 0, count: 0, grossTotal: 0 }
   )

   const totalPrice = total.toLocaleString('ru-RU')
   const grossTotalPrice = grossTotal.toLocaleString('ru-RU')
   const discount = parseFloat(Number((100 - (total * 100) / grossTotal).toFixed(1)))

   return (
      <div className='cart__summary'>
         <h2>Ваша корзина</h2>

         <div className='cart__summary-price'>
            <p>Товары<span>({count})</span></p>
            <span>
               {grossTotalPrice} <RublIcon />
            </span>
            {!!discount && <p>Скидка</p>}
            {!!discount && <span>{discount} %</span>}
         </div>

         <div className='cart__summary-price-total'>
            <p>Итого</p>
            <span>
               {totalPrice} <RublIcon />
            </span>
         </div>

         {!!total && <button className='button-form'>Перейти к оплате</button>}
      </div>
   )
}

const mapStateToProps = state => ({
   cartEntities: cartEntities(state),
   cartItems: cartItems(state),
   cartItemsArray: cartItemsArray(state),
})

export default connect(mapStateToProps)(CartSummary)