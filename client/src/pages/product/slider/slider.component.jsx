import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Thumbs } from 'swiper'


const Slider = ({ images }) => {
   const [thumbsSwiper, setThumbsSwiper] = useState(null)
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })

   return (
      <div className='product-slider'>

         <Swiper
            className='product-slider__image-slider'
            thumbs={{ swiper: thumbsSwiper }}
            allowTouchMove={false}
            slidesPerView={1}
            speed={0}
            modules={[A11y, Thumbs]}
         >
            {images.map((img, i) => (
               <SwiperSlide key={i}>
                  <img src={process.env.PUBLIC_URL + img} alt='poductimage' width='600' height='600' />
               </SwiperSlide>
            ))}
         </Swiper>

         <Swiper
            className='product-slider__thumbs-slider'
            direction={isDesktop ? 'vertical' : 'horizontal'}
            navigation
            watchSlidesProgress={true}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView='auto'
            modules={[Navigation, A11y]}
         >
            {images.map((img, i) => (
               <SwiperSlide key={i} className='product-slider__thumbs-slide'>
                  <img src={process.env.PUBLIC_URL + img} alt='poductimage' width='600' height='600' />
               </SwiperSlide>
            ))}
         </Swiper>

      </div>
   )
}

export default Slider