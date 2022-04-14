import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadSertificates } from '../../redux/actions'
import { sertificatesLoaded } from '../../redux/selectors'
import Loader from '../loader/loader.coponent'

const LayoutSertificates = () => {
   const isLoading = !useSelector(sertificatesLoaded)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(loadSertificates())
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }, []) // eslint-disable-line

   return isLoading ? <Loader /> : <Outlet/>
}

export default LayoutSertificates