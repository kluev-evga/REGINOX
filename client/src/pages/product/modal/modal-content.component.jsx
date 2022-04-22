import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { cartItemCount } from '../../../redux/selectors'
import { changeCartItemCount, submitOrder } from '../../../redux/actions'
import cn from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import InputMask from "react-input-mask";
import { ReactComponent as PlusIcon } from '../../../assets/svg/plus.svg'
import { ReactComponent as MinusIcon } from '../../../assets/svg/minus.svg'


const initialValues = {
   name: '',
   email: '',
   phone: '',
}

const validationSchema = Yup.object().shape({
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
})

const Error = ({children}) => <div className='error'>{children}</div>

const PhoneInput = ({ field }) =>
   <InputMask {...field} mask="+7 (999) 999-99-99" placeholder='Телефон' autoComplete='off' type="text" />

const ModalContent = ({ id, img, title }) => {
   const dispatch = useDispatch()
   const itemsCount = useSelector(state => cartItemCount(state, id))
 
   const incart = isFinite(itemsCount)
   const increase = () =>
     incart ? itemsCount < 99 && dispatch(changeCartItemCount(id, itemsCount + 1)) : dispatch(changeCartItemCount(id, 1))
   const decrease = () =>
     incart && itemsCount > 1 && dispatch(changeCartItemCount(id, itemsCount - 1))

   const handleSubmit = (values) => { dispatch(submitOrder(values)) }

   return (
      <div className='product-modal__container'>

         <h2>Форма быстрого заказа</h2>

         <div className='product-modal__item-container'>
         <img src={img} alt={title}/>

         <div className='product-modal__item-count'>
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
               </Form>
            }
         </Formik>

         <p className='product-modal__text'>Отправьте заказ и мы Вам перезвоним. Специалист нашего интернет-магазина уточнит, где и когда будет удобно получить заказ.</p>
         <p className='product-modal__text'>Перед отправкой заказа, убедитесь в правильном заполнении данных.</p>
         <hr/>
         <p className='product-modal__text-small'>Возможно пред отправкой заказа вас заинтерсует информация:</p>
         <Link to='/delivery'>Доставка и оплата</Link>
         <Link to='/sertificates'>Гарантии</Link>
         </div>

         <div className="product-modal__btn-container">
         <button className='product-modal__submit' type='submit' form='fastOrder'>Отправить</button>
         <p className='form-agreement'>Нажимая кнопку отправить вы даете согласие на обработку пресональных данных</p>
         </div>
      </div>
   )
}

export default ModalContent