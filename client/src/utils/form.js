import * as Yup from 'yup'
import InputMask from "react-input-mask";


export const validation = {
   payer: Yup.string().required('не указан тип плательщика'),
   name: Yup.string()
      .max(30, 'должно быть не болеее 30 символов')
      .matches(/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u, {message:'укажите ваше имя'})
      .required('обязательное поле'),
   email: Yup.string()
      .email('некорректный имейл')
      .required('обязательное поле'),
   phone: Yup.string()
      .matches(/[(]{1}[0-9]{3}[)]{1}[-\s0-9]*$/g, {message:'некорректный номер'})
      .required('обязательное поле'),
   address: Yup.string()
      .max(100, 'не болеее 100 символов')
      .matches(/^[#.0-9a-zA-Zа-яА-Я\s,-]+$/, {message:'некорректный адрес'})
      .required('обязательное поле'),
   store: Yup.string().required('не указан магазин'),
   delivery: Yup.string().required('не указан способ доставки'),
   payment: Yup.string().required('не указан способ оплаты'),
   message: Yup.string().required('обязательное поле'),
   feedbackPrice: Yup.string().required('обязательное поле'),
   feedbackQuality: Yup.string().required('обязательное поле'),
   feedbackAppearance: Yup.string().required('обязательное поле')
}

export const Error = ({children}) => <div className='error-message'>{children}</div>

export const PhoneInput = ({ field }) =>
   <InputMask
      {...field}
      mask="+7 (999) 999-99-99"
      placeholder='Телефон'
      autoComplete='off'
      type="text"
   />