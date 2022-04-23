import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitForm } from '../../redux/actions'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { validation, Error } from '../../utils/form'
import cn from 'classnames'
import ModalContainer from '../modal-container/modal-container.component';
import Response from '../response/response.component';


const initialValues = { name: '', email: '', message: '' }
const { name, email, message } = validation
const validationSchema = Yup.object().shape({name, email, message})

const FormContact = ({formType}) => {
   const dispatch = useDispatch()
   const [ isOpen, setIsOpen ] = useState(false)

   const handleSubmit = (values) => {
      dispatch(submitForm({...values, formType}))
      setIsOpen(true)
   }
   const handleClose = () => { setIsOpen(false) }

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={handleSubmit}
      >
         {({ errors, touched, resetForm }) => (
               <Form className="form-contact">
                  <label className={cn({'invalid': errors.name && touched.name })}>
                     <Field type="text" name='name' placeholder='ФИО' autoComplete='off'/>
                     <ErrorMessage component={Error} name="name" />
                  </label>

                  <label className={cn({'invalid': errors.email && touched.email })}>
                     <Field type="text" name='email' placeholder='E-mail' autoComplete='off'/>
                     <ErrorMessage component={Error} name="email" />
                  </label>

                  <label className={cn({'invalid': errors.message && touched.message })}>
                     <Field as='textarea' name='message' placeholder='Ваше сообщение...' autoComplete='off'/>
                     <ErrorMessage component={Error} name="message" />
                  </label>

                  <ModalContainer
                     resetForm={resetForm}
                     render={<Response/>}
                     handleClose={handleClose}
                     isOpen={isOpen}
                     wrapperClass='modal-response'
                  >
                     <button className='button-form' type='submit'>Отправить</button>
                  </ModalContainer>
                  <p className='form-agreement'>Нажимая кнопку отправить вы даете согласие на обработку пресональных данных</p>
               </Form>
         )}
      </Formik>
   )
}

export default FormContact