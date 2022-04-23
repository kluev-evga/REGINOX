import { useSelector } from 'react-redux';
import { formLoading, formLoaded, formError } from '../../redux/selectors'
import Modal from 'react-modal';
import { ReactComponent as CrossIcon } from '../../assets/svg/cross.svg'


Modal.setAppElement('#root');

const ModalContainer = ({ children, resetForm, render, isOpen, handleClose, wrapperClass}) => {
  const isLoading = useSelector(formLoading)
  const isLoaded = useSelector(formLoaded)
  const isError = useSelector(formError)

  const handleRequestClose = () => {
    !isLoading && handleClose()
    resetForm && isLoaded && !isError && resetForm()
  }

  return (
    <div>
      {children}
      <Modal
        className={wrapperClass}
        isOpen={isOpen}
        onRequestClose={handleRequestClose}
        closeTimeoutMS={700}
      >
        {!isLoading &&
          <button className='ReactModal__close-btn' onClick={handleRequestClose} aria-label='закрыть' >
            <CrossIcon/>
          </button>
        }
        {render}
      </Modal>
    </div>
  )
}

export default ModalContainer