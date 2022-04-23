import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { submitForm } from '../../../redux/actions'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validation, Error } from '../../../utils/form'
import cn from 'classnames'
import { ReactComponent as StarIcon } from '../../../assets/svg/star.svg'


const InputStars = ({ title, name }) => {
   const [value, setValue ] = useState(0)

   return (
      <div className='product-feedback__modal-stars'>
         <p>{title}:</p>
         <div>{[...Array(5)].map((_, i) =>
            <label key={i} onClick={()=> setValue(i+1)}>
               <Field type="radio" name={name} value={i}/>
               <StarIcon className={cn({'fill': value >= i+1})} />
            </label>
         )}
         </div>
      </div>
   )
}


const initialValues = { name: '', email: '', message: '', feedbackPrice: '', feedbackQuality: '', feedbackAppearance: '' }
const { name, email, message, feedbackPrice, feedbackQuality, feedbackAppearance } = validation
const validationSchema = Yup.object().shape({name, email, message, feedbackPrice, feedbackQuality, feedbackAppearance })


const FormFeedback = ({setSubmited}) => {
   const dispatch = useDispatch()

   const handleSubmit = (values) => {
      setSubmited(true)
      dispatch(submitForm({...values, formType: 'feedback'}))
   }

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={handleSubmit}
      >
         {({ errors, touched }) =>
               <Form className='product-feedback__modal-form'>
                  <label className={cn({'invalid': errors.name && touched.name })}>
                     <Field type="text" name='name' placeholder='ФИО' autoComplete='off'/>
                     <ErrorMessage component={Error} name="name" />
                  </label>
      
                  <label className={cn({'invalid': errors.email && touched.email })}>
                     <Field type="text" name='email' placeholder='E-mail' autoComplete='off'/>
                     <ErrorMessage component={Error} name="email" />
                  </label>

                  <div className='product-feedback__modal-stars-container'>
                     <InputStars name='feedbackPrice' title='Цена' />
                     <ErrorMessage name='feedbackPrice' component={Error} />
                     <InputStars  name='feedbackQuality' title='Качество' />
                     <ErrorMessage name='feedbackQuality' component={Error} />
                     <InputStars name='feedbackAppearance' title={'Внешний вид'} />
                     <ErrorMessage name='feedbackAppearance' component={Error} />
                  </div>
      
                  <label className={cn({'invalid': errors.message && touched.message })}>
                     <Field as='textarea' name='message' placeholder='Ваше сообщение...' autoComplete='off'/>
                     <ErrorMessage component={Error} name="message" />
                  </label>
      
                  <button type='submit' className='button-form'>Отправить</button>
                  <p className='form-agreement'>Нажимая кнопку отправить вы даете согласие на обработку пресональных данных</p>
               </Form>
         }
      </Formik>
   )
}

export default FormFeedback