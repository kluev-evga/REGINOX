import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { orderModalIsOpen, orderPaymentIsSuccessful, orderLoading } from '../../redux/selectors'
import { closeModalOrder, clearCart } from '../../redux/actions'
import Modal from 'react-modal';
import { ReactComponent as CrownIcon } from '../../assets/svg/crown.svg'
import { ReactComponent as CrossIcon } from '../../assets/svg/cross.svg'
import { ReactComponent as LoadingIcon } from '../../assets/svg/spinner.svg'


Modal.setAppElement('#root');

function ModalOrder() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const modalIsOpen = useSelector(orderModalIsOpen)
  const paymentIsSuccessful = useSelector(orderPaymentIsSuccessful)
  const isLoading = useSelector(orderLoading)

  const handleClose = () => {
    dispatch(closeModalOrder())
    paymentIsSuccessful && navigate('/cart')
    paymentIsSuccessful && dispatch(clearCart())
  }

  const handleRequestClose = () => {
    !isLoading && dispatch(closeModalOrder())
    paymentIsSuccessful && navigate('/cart')
    paymentIsSuccessful && dispatch(clearCart())
  }

  return (
    <div>
      <button className='order__submit button-form' type='submit'>Оплатить</button>

      <Modal
        className='modal-order'
        isOpen={modalIsOpen}
        onRequestClose={handleRequestClose}
        contentLabel="Платеж отправлен"
        closeTimeoutMS={700}
      >

        {isLoading
          ?  <div className='modal-order__loading'><LoadingIcon/></div>
          : <div>
              <button
                className='ReactModal__close-btn'
                onClick={handleClose}
                aria-label='закрыть'
              >
                <CrossIcon/>
              </button>
              <CrownIcon className='modal-order__crown'/>

                <h2>
                  {paymentIsSuccessful ? 'Ваш заказ успешно оформлен!' : 'Произошла ошибка'}
                </h2>
                {paymentIsSuccessful
                  ? <p>В случае обмена/возврата товара надлежащего качества мы гарантируем Вам соблюдение прав покупателя, предусмотренных Федеральным законом «О защите прав потребителей», если Вы обратитесь с соответствующими требованиями в течение четырнадцати дней со дня покупки, не считая день покупки. </p>
                  : <p>попоробуйте еще раз</p>
                }
                {paymentIsSuccessful && <Link to='/' onClick={closeModalOrder}>Вернуться на главную</Link>}
          </div>
        }

      </Modal>
    </div>
  )
}

export default ModalOrder