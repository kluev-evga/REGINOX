import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  productItem,
  cartItemCount,
  orderLoading,
  orderPaymentIsSuccessful,
  orderModalIsOpen,
  orderPaymentIsProceeded
} from '../../../redux/selectors'
import { changeCartItemCount, openModalOrder, closeModalOrder, removeItemFromCart } from '../../../redux/actions'
import Modal from 'react-modal';
import ModalContent from './modal-content.component'
import ModalResult from './modal-result.component';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg'
import { ReactComponent as LoadingIcon } from '../../../assets/svg/spinner.svg'


Modal.setAppElement('#root');

function ModalBuy() {
  const dispatch = useDispatch()
  const { productUrl } = useParams()
  const { id, images, title } = useSelector((state) => productItem(state, productUrl))
  const itemCount = useSelector(state => cartItemCount(state, id))
  const modalIsOpen = useSelector(orderModalIsOpen)
  const paymentIsProceeded = useSelector(orderPaymentIsProceeded)
  const paymentIsSuccessful = useSelector(orderPaymentIsSuccessful)
  const isLoading = useSelector(orderLoading)

  const openModal = () => {
    !itemCount && dispatch(changeCartItemCount(id, 1))
    dispatch(openModalOrder())
  }
  const handleRequestClose = () => {
    !isLoading && dispatch(closeModalOrder())
    itemCount === 1 && dispatch(removeItemFromCart(id))
  }
  const handleClose = () => {
    dispatch(closeModalOrder())
    itemCount === 1 && dispatch(removeItemFromCart(id))
  }

  return (
    <div className='product-panel__wrapper-buy-now'>
      <button className='product-panel__buy-now' onClick={openModal}>Купить в один клик</button>
      <Modal
        className='product-modal'
        isOpen={modalIsOpen}
        onRequestClose={handleRequestClose}
        contentLabel="Купить в один клик"
        closeTimeoutMS={700}
      >

        {!isLoading && 
          <button className='ReactModal__close-btn' onClick={handleClose} aria-label='закрыть' >
            <CrossIcon/>
          </button>
        }

        {paymentIsProceeded
          ? isLoading
          ? <LoadingIcon style={{height: '100%'}}/>
          : <ModalResult success={paymentIsSuccessful}/>
          : <ModalContent img={images[0]} title={title} id={id}/>
        }

      </Modal>
    </div>
  )
}

export default ModalBuy