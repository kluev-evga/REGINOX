import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import CardSlider from '../../components/card-slider/card-slider.component'
import withMenuLoader from '../../hoc/with-menu-loader'
import { ReactComponent as EyeIcon } from '../../assets/svg/eye.svg'


const Information = () => {
   const ref = useRef()
   useEffect(() => {ref.current.scrollIntoView({behavior: "smooth", block: "start"})}, [] )

   return (
      <div className='container information' ref={ref}>
         <div className='breadcrumbs'><Link to='/'>Главная</Link> / Информация </div>
   
         <h1 className='title'>Информация</h1>
         <div className='article'>
            <b>«Реджинокс Риф Холдинг» является эксклюзивным представителем в России нидерландской Компании «REGINOX».</b>
         </div>
         <div className='information__cards'>
            <Link to='buyers' className='link-card'>
               <CardSlider
                  title='Для розничных покупателей'
                  img={process.env.PUBLIC_URL + '/assets/information_buyers.webp'}
                  alt='Для розничных покупателей'
                  md
                  width='590'
                  height='430'>
                  <EyeIcon />
                  Смотреть
               </CardSlider>
            </Link>
            <Link to='partners' className='link-card'>
               <CardSlider
                  title='Для партнеров'
                  img={process.env.PUBLIC_URL + '/assets/information_partners.webp'}
                  alt='Для партнеров'
                  md
                  width='590'
                  height='430'>
                  <EyeIcon />
                  Смотреть
               </CardSlider>
            </Link>
         </div>
      </div>
   )
}

export default withMenuLoader(Information)