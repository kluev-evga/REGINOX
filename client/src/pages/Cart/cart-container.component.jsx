import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartLoaded, cartItemsArray, cartEntities } from '../../redux/selectors'
import { loadCart } from '../../redux/actions'
import Loader from '../../components/loader/loader.coponent'
import Cart from './cart.component'


const CartContainer = () => {
   const dispatch = useDispatch()
   const isLoading = !useSelector(cartLoaded)
   const cartItems = useSelector(cartItemsArray)
   const cartItemEntities = useSelector(cartEntities)

   const itemsToLoad = useMemo( () => cartItems.filter(id => cartItemEntities[id] ? false : id), [cartItemEntities] ) //eslint-disable-line
   useEffect(() => { dispatch(loadCart(itemsToLoad)) }, []) //eslint-disable-line

   return isLoading || itemsToLoad.length !== 0 ? <Loader/> : <Cart cartItems={cartItems}/>
}

export default CartContainer