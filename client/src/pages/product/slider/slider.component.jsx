import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper'
import cn from 'classnames'
import SliderViewTouch from './slider-view-touch.component'
import SliderViewHover from './slider-veiw-hover-component'


const Slider = ({ images }) => {
   const [thumbsSwiper, setThumbsSwiper] = useState()
   const [ image, setImage ] = useState({img:images[0], i: 0})
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })
   const isAnyHover = useMediaQuery({ query: '(any-hover)' })

   return (
      <div className='product-slider'>

         {isAnyHover
            ? <SliderViewHover image={image.img}/>
            : <SliderViewTouch images={images} thumbsSwiper={thumbsSwiper}/>
         }

         <Swiper
            className='product-slider__thumbs-slider'
            direction={isDesktop ? 'vertical' : 'horizontal'}
            navigation
            watchSlidesProgress={true}
            onSwiper={setThumbsSwiper}
            spaceBetween={5}
            slidesPerView='auto'
            modules={[Navigation, A11y]}
         >
            {images.map((img, i) => (
               <SwiperSlide
                  className={cn('product-slider__thumbs-slide', {'active': i === image.i})}
                  key={i}
                  onClick={() => setImage({img, i})}
               >
                  <img src={img} alt='poductimage' width='600' height='600' loading='lazy' />
               </SwiperSlide>
            ))}
         </Swiper>

      </div>
   )
}

export default Slider