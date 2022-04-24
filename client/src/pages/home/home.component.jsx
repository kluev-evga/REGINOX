import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadHome } from '../../redux/actions'
import { homeLoaded } from '../../redux/selectors'
import Loader from '../../components/loader/loader.coponent'
import HomeSlider from './components/home-slider.compenent'
import HomeAdress from './components/home-address/home-address.component'
import HomeCatalog from './components/home-catalog.component'
import HomePopularProducts from './components/popular-products.components'
import HomeAbout from './components/home-about.component'
import './styles/styles.scss'


const Home = () => {
   const ref = useRef()
   const dispatch = useDispatch()
   const isLoading = !useSelector(homeLoaded)

   useEffect(() => { dispatch(loadHome()) }, []) //eslint-disable-line
   useEffect(() => {!isLoading && ref.current.scrollIntoView({block: "start"})}, [isLoading] )

   if (isLoading) return <Loader />

   return (
      <div ref={ref}>
         <HomeSlider/>
         <HomeAdress/>
         <HomeCatalog/>
         <HomePopularProducts/>
         <HomeAbout/>
      </div>
   )
}

export default Home