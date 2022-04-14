import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { openSearchMenu } from '../../../redux/actions'
import { cartItemsArray, compareCount } from '../../../redux/selectors'
import cn from 'classnames'
import { ReactComponent as Account } from '../../../assets/svg/account.svg'
import { ReactComponent as Cart } from '../../../assets/svg/cart.svg'
import { ReactComponent as Compare } from '../../../assets/svg/compare.svg'
import { ReactComponent as Search } from '../../../assets/svg/search.svg'


const ButtonsContainer = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const cartItems = useSelector(cartItemsArray)
   const cartItemsCount = cartItems.length
   const cartHasItems = Boolean(cartItems.length)
   const compareItemsCount = useSelector(compareCount)
   const compareHasItems = Boolean(compareItemsCount)

   return (
      <div className='header__buttons-container'>

         <button
            onClick={() => navigate('compare')}
            className={cn({'active': compareHasItems })}
            aria-label='сравнить товары'>
            <Compare />
            {compareHasItems && <span>{compareItemsCount}</span>}
         </button>

         <button aria-label='аккаунт'>
            <Account />
         </button>

         <button
            aria-label='поиск по каталогу'
            onClick={() => dispatch(openSearchMenu)}>
            <Search />
         </button>

         <button
            className={cn({'active': cartHasItems})}
            onClick={() => navigate('cart')}
            aria-label='корзина'>
            {cartHasItems && <span>{cartItemsCount}</span>}
            <Cart />
         </button>

      </div>
   )
}

export default ButtonsContainer