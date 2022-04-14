import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadHome } from '../../redux/actions'
import { homeLoaded } from '../../redux/selectors'
import Loader from '../../components/loader/loader.coponent'
import HomeSlider from './components/home-slider.compenent'
import HomeAdress from './components/home-address/home-address.component'
import HomeCatalog from './components/home-catalog.component'
import HomePopularProducts from './components/popular-products.components'
import HomeAbout from './components/home-about.component'


const Home = () => {
   const dispatch = useDispatch()
   useEffect(() => { dispatch(loadHome()) }, []) //eslint-disable-line
   const isLoading = !useSelector(homeLoaded)
   if (isLoading) return <Loader />

   return (
      <>
         <HomeSlider/>
         <HomeAdress/>
         <HomeCatalog/>
         <HomePopularProducts/>
         <HomeAbout/>
      </>
   )
}

export default Home