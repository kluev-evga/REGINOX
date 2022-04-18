import { Link } from 'react-router-dom'
import CartSummary from '../../components/summary/summary.component'
import withMenuLoader from '../../hoc/with-menu-loader'
import { ReactComponent as DotIcon } from '../../assets/svg/dot.svg'


const Order = () => (
   <div className='container order'>
      <div className='breadcrumbs'> <Link to='/'>Главная</Link> / <Link to='/cart'>Корзина</Link> / Оформление заказа </div>
      <h1 className='title'>Оформление заказа</h1>

      <form>
         <div className="order__container">

            <div className='order__form'>

               <div className='order__form-section'>
                  <h2>Тип плательщика</h2>
                  <div className='order__section-radio-btn'>
                     <label>
                        <input type="radio" name='payer' checked/>
                        <DotIcon/>
                        Физическое лицо
                     </label>
                     <label>
                        <input type="radio" name='payer'/>
                        <DotIcon/>
                        Юридическое лицо
                     </label>
                  </div>
               </div>


               <div className='order__section-credentials'>
                  <h2>Информация о покупателе</h2>
                  <input type="text" placeholder='ФИО'/>
                  <input type="text" placeholder='E-mail'/>
                  <input type="text" placeholder='Телефон'/>
                  <input type="text" placeholder='Адрес доставки'/>
               </div>


               <div className='order__form-section'>
                  <h2>Магазин, который обслуживает ваш заказ</h2>
                  <div className='order__section-radio-btn'>
                     <label>
                        <input type="radio" name='store' checked/>
                        <DotIcon/>
                        м. Профсоюзная
                     </label>
                     <label>
                        <input type="radio" name='store'/>
                        <DotIcon/>
                        м. Волгорадский проспект
                     </label>
                  </div>
               </div>


               <div className='order__form-section'>
                  <h2>Служба доставки</h2>
                  <div className='order__section-radio-box'>
                     <label>
                        <input type="radio" name='organization' checked/>
                        <div>
                           <h3>Доставка курьером</h3>
                           <p>Заказ приедет по выбранному адресу</p>
                           <b>500 рублей</b>
                        </div>
                     </label>
                     <label>
                        <input type="radio" name='organization'/>
                        <div>
                           <h3>Самовывоз</h3>
                           <p>Можно забрать ежедневно с 10:00 — 18:00</p>
                        </div>
                     </label>
                  </div>
               </div>


               <div className='order__form-section'>
                  <h2>Способ оплаты</h2>
                  <div className='order__section-radio-btn'>
                     <label>
                        <input type="radio" name='payment' checked/>
                        <DotIcon/>
                        Онлайн
                     </label>
                     <label>
                        <input type="radio" name='payment'/>
                        <DotIcon/>
                        Наличными
                     </label>
                  </div>
               </div>


               <div class="order__form-textarea">
                  <h2>Дополнительно</h2>
                  <textarea name="" id="" cols="30" rows="10" placeholder='Комментарий к заказу'></textarea>
               </div>

            </div>

            <CartSummary/>
         </div>
      </form>
   </div>
)

export default withMenuLoader(Order)