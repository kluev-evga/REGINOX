const ModalResult = ({success}) => (
   <>
      <h2>
         {success ? 'Ваш заказ успешно оформлен!' : 'Произошла ошибка'}
      </h2>
      {success
         ? <p className='product-modal__message'>В случае обмена/возврата товара надлежащего качества мы гарантируем Вам соблюдение прав покупателя, предусмотренных Федеральным законом «О защите прав потребителей», если Вы обратитесь с соответствующими требованиями в течение четырнадцати дней со дня покупки, не считая день покупки. </p>
         : <p className='product-modal__message'>попоробуйте еще раз</p>
      }
   </>
)

export default ModalResult