import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper'
import cn from 'classnames'
import ViewHover from './veiw-hover-component'


const Slider = ({ images }) => {
   const [image, setImage] = useState({ img: images[0], i: 0 })
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })

   return (
      <div className='product-slider'>

         <ViewHover image={image.img} />

         <Swiper
            className='product-slider__thumbs-slider'
            direction={isDesktop ? 'vertical' : 'horizontal'}
            navigation
            spaceBetween={5}
            slidesPerView='auto'
            modules={[Navigation, A11y]}
         >
            {images.map((img, i) => (
               <SwiperSlide
                  className={cn('product-slider__thumbs-slide', { 'active': i === image.i })}
                  key={i}
                  onClick={() => setImage({ img, i })}
               >
                  <img src={img} alt='poductimage' width='600' height='600' />
               </SwiperSlide>
            ))}
         </Swiper>

      </div>
   )
}

export default Slider