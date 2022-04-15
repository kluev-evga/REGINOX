import { useFormik } from 'formik'
import * as Yup from 'yup'
import cn from 'classnames'

const Form = () => {
   const formik = useFormik({
      initialValues: {
         name: '',
         email: '',
         message: '',
      },
      validationSchema: Yup.object({
         name: Yup.string()
            .max(15, 'Имя должно быть не болеее 15 символов')
            .required('Обязательное поле'),
         email: Yup.string()
            .email('Некорректный имейл')
            .required('Обязательное поле'),
         message: Yup.string()
            .max(300, 'Текст сообщения не болеее 300 символов')
            .required('Обязательное поле'),
      }),
      onSubmit: values => { console.log(values) },
   })

   return (
      <form className='form' onSubmit={formik.handleSubmit}>
         <label>
            <input
               className={cn({ 'form-invalid': formik.errors.name && formik.touched.name })}
               type='text'
               placeholder='Имя'
               autoComplete='off'
               name='name'
               value={formik.values.name}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name && (
               <p className='form-message'>* {formik.errors.name}</p>
            )}
         </label>

         <label>
            <input
               className={cn({ 'form-invalid': formik.errors.email && formik.touched.email })}
               type='text'
               placeholder='E-mail'
               autoComplete='off'
               name='email'
               value={formik.values.email}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
               <p className='form-message'>* {formik.errors.email}</p>
            )}
         </label>

         <label>
            <textarea
               className={cn({ 'form-invalid': formik.errors.message && formik.touched.message })}
               type='text'
               placeholder='Ваше сообщение...'
               autoComplete='off'
               name='message'
               value={formik.values.message}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
            {formik.errors.message && formik.touched.message && (
               <p className='form-message'>* {formik.errors.message}</p>
            )}
         </label>

         <button type='submit' className='button-form'>
            Отправить
         </button>
         <p className='form-agreement'>
            Нажимая кнопку отправить вы даете согласие на обработку пресональных данных
         </p>
      </form>
   )
}

export default Form