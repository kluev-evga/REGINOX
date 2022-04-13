import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadMenu } from '../redux/actions'
import { menuLoaded } from '../redux/selectors'
import Loader from '../components/loader/loader.coponent'

const withMenuLoader = (WrappedComponent, noScroll) => props => {
   const loaded = useSelector(menuLoaded)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(loadMenu(noScroll))
   }, []) //eslint-disable-line
   return loaded ? <WrappedComponent {...props} /> : <Loader />
}

export default withMenuLoader
