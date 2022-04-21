import {useState} from 'react';
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { productItem, cartItemCount } from '../../../redux/selectors'
import { changeCartItemCount } from '../../../redux/actions'
import Modal from 'react-modal';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg'
import { ReactComponent as PlusIcon } from '../../../assets/svg/plus.svg'
import { ReactComponent as MinusIcon } from '../../../assets/svg/minus.svg'


Modal.setAppElement('#root');

function ModalBuy() {
  const { productUrl } = useParams()
  const [modalIsOpen, setIsOpen] = useState(false);
  const { id, images, title } = useSelector((state) => productItem(state, productUrl))

  const dispatch = useDispatch()
  const itemsCount = useSelector(state => cartItemCount(state, id))

  const incart = isFinite(itemsCount)
  const increase = () =>
    incart ? itemsCount < 99 && dispatch(changeCartItemCount(id, itemsCount + 1)) : dispatch(changeCartItemCount(id, 1))
  const decrease = () =>
    incart && itemsCount > 1 && dispatch(changeCartItemCount(id, itemsCount - 1))

  const openModal = () => {
    !itemsCount && dispatch(changeCartItemCount(id, 1))
    setIsOpen(true)
  }

  return (
    <div className='product-panel__wrapper-buy-now'>
      <button className='product-panel__buy-now' onClick={openModal}>Купить в один клик</button>
      <Modal
        className='product-modal'
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Купить в один клик"
        closeTimeoutMS={1300}
      >
        <button
          className='ReactModal__close-btn'
          onClick={() => setIsOpen(false)}
          aria-label='закрыть'
        >
          <CrossIcon/>
        </button>

        <div className='product-modal__container'>

          <h2>Форма быстрого заказа</h2>

          <div className='product-modal__item-container'>
            <img src={images[0]} alt={title}/>

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
            <form className='product-modal__form'>
              <input type="text" placeholder='ФИО' />
              <input type="text" placeholder='E-mail' />
              <input type="text" placeholder='Телефон' />
            </form>

            <p className='product-modal__text'>Отправьте заказ и мы Вам перезвоним. Специалист нашего интернет-магазина уточнит, где и когда будет удобно получить заказ.</p>
            <p className='product-modal__text'>Перед отправкой заказа, убедитесь в правильном заполнении данных.</p>
            <hr/>
            <p className='product-modal__text-small'>Возможно пред отправкой заказа вас заинтерсует информация:</p>
            <Link to='/delivery'>Доставка и оплата</Link>
            <Link to='/sertificates'>Гарантии</Link>
          </div>

          <div class="product-modal__btn-container">
            <button className='product-modal__submit'>Отправить</button>
            <p className='form-agreement'>Нажимая кнопку отправить вы даете согласие на обработку пресональных данных</p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalBuy