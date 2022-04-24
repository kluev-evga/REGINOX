import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadBrands } from '../../redux/actions'
import { brandsLoaded, brands } from '../../redux/selectors'
import CardSlider from '../../components/card-slider/card-slider.component'
import Brands from '../../components/brands/brands.component'
import Loader from '../../components/loader/loader.coponent'
import { ReactComponent as EyeIcon } from '../../assets/svg/eye.svg'
import './partners.scss'


const Partners = () => {
   const brandsData = useSelector(brands)
   const isLoading = !useSelector(brandsLoaded)
   const dispatch = useDispatch()
   const ref = useRef()

   useEffect(() => { dispatch(loadBrands()) }, []) //eslint-disable-line
   useEffect(() => {!isLoading && ref.current.scrollIntoView({behavior: "smooth", block: "start"})}, [isLoading] )

   if (isLoading) return <Loader />

   return (
      <div className='container partners' ref={ref}>
         <div className='breadcrumbs'><Link to='/'>Главная</Link> / Наши партнеры</div>

         <h1 className='title'>Наши партнеры</h1>

         <Link className='partners__link' to='/information/partners' >
            <CardSlider
               title='Станьте нашим партнером'
               img={'/assets/information_partners.webp'}
               alt='Для партнеров'
               width='590'
               height='430'
               md
            >
               <EyeIcon />
               Смотреть
            </CardSlider>
         </Link>

         <Brands withUrl brands={brandsData} />
      </div>
   )
}

export default Partners