import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { cartItemCount } from '../../../redux/selectors'
import { changeCartItemCount, submitOrder } from '../../../redux/actions'
import cn from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { validation, Error, PhoneInput } from '../../../utils/form'
import ProductsCountPanel from '../../../components/products-count-panel/products-count-panel.component';


const initialValues = { name: '', email: '', phone: '' }
const { name, email, phone } = validation
const validationSchema = Yup.object().shape({ name, email, phone })


const ModalContent = ({ id, img, title, close }) => {
   const dispatch = useDispatch()
   const count = useSelector(state => cartItemCount(state, id))

   const incart = isFinite(count)
   const increase = () =>
      incart ? count < 99 && dispatch(changeCartItemCount(id, count + 1)) : dispatch(changeCartItemCount(id, 1))
   const decrease = () =>
      incart && count > 1 && dispatch(changeCartItemCount(id, count - 1))

   const handleSubmit = (values) => { dispatch(submitOrder(values)) }

   return (
      <div className='product-modal__container'>

         <h2>Форма быстрого заказа</h2>

         <div className='product-modal__item-container'>
            <img src={img} alt={title} />
            <ProductsCountPanel wrapperClass='product-modal__item-count' increase={increase} decrease={decrease} count={count} />
            <h3>{title}</h3>
         </div>

         <div className="product-modal__form-wrapper">
            <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={handleSubmit}
            >
               {({ errors, touched }) =>
                  <Form className='product-modal__form' id='fastOrder'>
                     <label className={cn({ 'invalid': errors.name && touched.name })}>
                        <Field type="text" name='name' placeholder='ФИО' autoComplete='off' />
                        <ErrorMessage component={Error} name="name" />
                     </label>

                     <label className={cn({ 'invalid': errors.email && touched.email })}>
                        <Field type="text" name='email' placeholder='E-mail' autoComplete='off' />
                        <ErrorMessage component={Error} name="email" />
                     </label>

                     <label className={cn({ 'invalid': errors.phone && touched.phone })}>
                        <Field name="phone" component={PhoneInput} />
                        <ErrorMessage component={Error} name="phone" />
                     </label>
                  </Form>
               }
            </Formik>

            <p className='product-modal__text'>Отправьте заказ и мы Вам перезвоним. Специалист нашего интернет-магазина уточнит, где и когда будет удобно получить заказ.</p>
            <p className='product-modal__text'>Перед отправкой заказа, убедитесь в правильном заполнении данных.</p>
            <hr />
            <p className='product-modal__text-small'>Возможно пред отправкой заказа вас заинтерсует информация:</p>
            <Link to='/delivery' onClick={close}>Доставка и оплата</Link>
            <Link to='/sertificates' onClick={close}>Гарантии</Link>
         </div>

         <div className="product-modal__btn-container">
            <button className='product-modal__submit' type='submit' form='fastOrder'>Отправить</button>
            <p className='form-agreement'>Нажимая кнопку отправить вы даете согласие на обработку пресональных данных</p>
         </div>
      </div>
   )
}

export default ModalContent