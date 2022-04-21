import { useState } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import InputMask from "react-input-mask";
import CartSummary from '../../components/summary/summary.component'
import withMenuLoader from '../../hoc/with-menu-loader'

import ModalOrder from './order-modal.component';

import { useDispatch } from 'react-redux';
import { submitOrder } from '../../redux/actions'




const initialValues = {
   payer: '',
   name: '',
   email: '',
   phone: '',
   address: '',
   store: '',
   delivery: '',
   payment: '',
   commments: '',
}

const validationSchema = Yup.object().shape({
   payer: Yup.string().required('не указан тип плательщика'),
   name: Yup.string()
      .max(30, 'должно быть не болеее 30 символов')
      .matches(/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u, {message:'укажите ваше имя'})
      .required('Обязательное поле'),
   email: Yup.string()
      .email('Некорректный имейл')
      .required('Обязательное поле'),
   phone: Yup.string()
      .matches(/[(]{1}[0-9]{3}[)]{1}[-\s0-9]*$/g, {message:'некорректный номер'})
      .required('Обязательное поле'),
   address: Yup.string()
      .max(100, 'не болеее 100 символов')
      .matches(/^[#.0-9a-zA-Zа-яА-Я\s,-]+$/, {message:'некорректный адрес'})
      .required('Обязательное поле'),
   store: Yup.string().required('не указан магазин'),
   delivery: Yup.string().required('не указан способ доставки'),
   payment: Yup.string().required('не указан способ оплаты'),
})

const Error = ({children}) => <div className='error'>{children}</div>

const PhoneInput = ({ field }) =>
   <InputMask {...field} mask="+7 (999) 999-99-99" placeholder='Телефон' autoComplete='off' type="text" />

const Order = () => {
   const dispatch = useDispatch()
   const handleSubmit = (values) => { dispatch(submitOrder(values)) }

   return (
      <div className='container order'>
         <div className='breadcrumbs'>
            <Link to='/'>Главная</Link> / <Link to='/cart'>Корзина</Link> / Оформление заказа
         </div>
         <h1 className='title'>Оформление заказа</h1>

         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
         >
            {
               ({ errors, touched }) =>
                  <Form>
                     <div className="order__container">
                        <div className='order__form'>

                           <div className={cn('order__form-section', {'invalid': errors.payer && touched.payer })}>
                              <h2>Тип плательщика</h2>
                              <div className='order__section-radio-btn'>
                                 <label>
                                    <Field type="radio" name='payer' value='Физическое лицо'/>
                                    <span>Физическое лицо</span>
                                 </label>
                                 <label>
                                    <Field type="radio" name='payer' value='Юридическое лицо'/>
                                    <span>Юридическое лицо</span>
                                 </label>
                                 <ErrorMessage component={Error} name="payer" />
                              </div>
                           </div>


                           <div className='order__section-credentials'>
                              <h2>Информация о покупателе</h2>
                              <div className="order__section-credentials-fields">

                              <label className={cn({'invalid': errors.name && touched.name })}>
                                 <Field type="text" name='name' placeholder='ФИО' autoComplete='off'/>
                                 <ErrorMessage component={Error} name="name" />
                              </label>

                              <label className={cn({'invalid': errors.email && touched.email })}>
                                 <Field type="text" name='email' placeholder='E-mail' autoComplete='off'/>
                                 <ErrorMessage component={Error} name="email" />
                              </label>

                              <label className={cn({'invalid': errors.phone && touched.phone })}>
                                 <Field name="phone" component={PhoneInput} />
                                 <ErrorMessage component={Error} name="phone" />
                              </label>

                              <label className={cn({'invalid': errors.address && touched.address })}>
                                 <Field type="text" name='address' placeholder='Адрес доставки' autoComplete='off'/>
                                 <ErrorMessage component={Error} name="address" />
                              </label>

                              </div>
                           </div>


                           <div className={cn('order__form-section', {'invalid': errors.store && touched.store })}>
                              <h2>Магазин, который обслуживает ваш заказ</h2>
                              <div className='order__section-radio-btn'>
                                 <label>
                                    <Field type="radio" name='store' value='м. Профсоюзная'/>
                                    <span>м. Профсоюзная</span>
                                 </label>
                                 <label>
                                    <Field type="radio" name='store' value='м. Волгорадский проспект'/>
                                    <span>м. Волгорадский проспект</span>
                                 </label>
                                 <ErrorMessage component={Error} name="store" />
                              </div>
                           </div>


                           <div className={cn('order__form-section', {'invalid': errors.delivery && touched.delivery })}>
                              <h2>Служба доставки</h2>
                              <div className='order__section-radio-box'>
                                 <label>
                                    <Field type="radio" name='delivery' value='Доставка курьером'/>
                                    <div className='order__radio-box'>
                                       <h3>Доставка курьером</h3>
                                       <p>Заказ приедет по выбранному адресу</p>
                                       <b>500 рублей</b>
                                    </div>
                                 </label>
                                 <label>
                                    <Field type="radio" name='delivery' value='Самовывоз'/>
                                    <div className='order__radio-box'>
                                       <h3>Самовывоз</h3>
                                       <p>Можно забрать ежедневно с 10:00 — 18:00</p>
                                    </div>
                                 </label>
                                 <ErrorMessage component={Error} name="delivery" />
                              </div>
                           </div>


                           <div className={cn('order__form-section', {'invalid': errors.payment && touched.payment })}>
                              <h2>Способ оплаты</h2>
                              <div className='order__section-radio-btn'>
                                 <label>
                                    <Field type="radio" name='payment' value='Онлайн'/>
                                    <span>Онлайн</span>
                                 </label>
                                 <label>
                                    <Field type="radio" name='payment' value='Наличными'/>
                                    <span>Наличными</span>
                                 </label>
                                 <ErrorMessage component={Error} name="payment" />
                              </div>
                           </div>


                           <div className="order__form-textarea">
                              <h2>Дополнительно</h2>
                              <textarea
                                 type='text'
                                 name="commments"
                                 placeholder='Комментарий к заказу'
                                 autoComplete='off'
                              />
                           </div>

                        </div>

                        <CartSummary>
                           <ModalOrder/>
                           <p className='form-agreement'>Нажимая кнопку отправить вы даете согласие на обработку пресональных данных</p>
                        </CartSummary>

                     </div>
                  </Form>
            }
         </Formik>
      </div>
   )
}

export default withMenuLoader(Order)