import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import { ReactComponent as CrownIcon } from '../../assets/svg/crown.svg'


Modal.setAppElement('#root');

function ModalOrder({ modalIsOpen, setIsOpen }) {
  // const openModal = (e) => {
  //   e.preventDefault();
  //   setIsOpen(true)
  // }

  return (
    <div>
      <button className='order__submit button-form' type='submit'>Оплатить</button>

      <Modal
        className='modal-order'
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Платеж отправлен"
        closeTimeoutMS={1300}
      >
        <h2>Ваш заказ успешно оформлен!</h2>
        <p>В случае обмена/возврата товара надлежащего качества мы гарантируем Вам соблюдение прав покупателя, предусмотренных Федеральным законом «О защите прав потребителей», если Вы обратитесь с соответствующими требованиями в течение четырнадцати дней со дня покупки, не считая день покупки. </p>
        <CrownIcon/>
        <Link to='/'>Вернуться на главную</Link>
      </Modal>
    </div>
  )
}

export default ModalOrder