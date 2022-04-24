import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sertificatesLoaded, brands } from '../../redux/selectors'
import { loadSertificates } from '../../redux/actions'
import { Link } from 'react-router-dom'
import Brands from '../../components/brands/brands.component'
import SertificatesSlider from './components/sertificates-slider.component'
import Loader from '../../components/loader/loader.coponent'
import './sertificates.scss'


const Sertificates = () => {
   const isLoading = !useSelector(sertificatesLoaded)
   const brandsData = useSelector(brands)
   const dispatch = useDispatch()
   const ref = useRef()

   useEffect(() => { dispatch(loadSertificates()) }, []) // eslint-disable-line
   useEffect(() => {!isLoading && ref.current.scrollIntoView({behavior: "smooth", block: "start"})}, [isLoading] )

   if (isLoading) return  <Loader />

   return (
      <div ref={ref}>
         <div className='container'>
            <div className='breadcrumbs'>
               <Link to='/'>Главная</Link> / Сертификаты и гарантии
            </div>
            <h1 className='title'>Гарантия качества продукции</h1>
            <div className='article'>
               <h2 className='title-1'>Сертификаты</h2>
               <p>
                  Данные сертификаты подверждают качество и легальность поставляемой продукции.
               </p>
            </div>
         </div>

         <SertificatesSlider />

         <div className='container'>
            <div className='article'>
               <h2 className='title-1'>Гарантия</h2>
               <p>
                  Наши партнеры-производители из Европы имеют крупные производства, используют только качественное и экологически чистое сырье, гарантируют качество продукции и поддерживают гарантийные обязательства.
               </p>
            </div>

            <Brands brands={brandsData} />
         </div>
      </div>
   )
}

export default Sertificates