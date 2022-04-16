import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeItemfromCompare } from '../../../redux/actions'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper'
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg'


const ViewPhoneSlider = ({ data, specs }) => {
   const dispatch = useDispatch()

   return (
      <div className='compare__view-phone-slider'>
         <Swiper
            className='slider-compare'
            speed={200}
            slidesPerView={1}
            spaceBetween={10}
            initialSlide={1}
            navigation
            modules={[Navigation, A11y]}
         >
            {data.map(item => (
               <SwiperSlide key={item.id} className='compare__view-phone-slider_item'>
                  <Link
                     className='compare__view-phone-link'
                     to={`/products/${item.url}/${item.productUrl}`}>
                     <img
                        src={process.env.PUBLIC_URL + item.images[0]}
                        alt='productI item'
                     />
                  </Link>
                  <span><p>{item.price.toLocaleString('ru-RU', {style: 'currency', currency:'RUB'})}</p></span>
                  {specs.map((field, i) => (
                     <span key={i}>
                        <p>{item.specs[field] || '-'}</p>
                     </span>
                  ))}

                  <button
                     onClick={() => dispatch(removeItemfromCompare(item.id))}
                     className='compare__view-phone-button'>
                     <CrossIcon />
                  </button>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

export default ViewPhoneSlider