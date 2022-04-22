import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Thumbs, Zoom } from 'swiper'


const SliderViewTouch = ({images, thumbsSwiper}) => (
   <Swiper
      className='product-slider__image-slider'
      thumbs={{ swiper: thumbsSwiper }}
      allowTouchMove={false}
      slidesPerView={1}
      zoom={{ maxRatio: 1.5 }}
      speed={0}
      modules={[A11y, Thumbs, Zoom]}
   >
      {images.map((img, i) => (
         <SwiperSlide key={i} zoom={true}>
            <div className="swiper-zoom-container">
               <img src={img} alt='poductimage' width='600' height='600' />
            </div>
         </SwiperSlide>
      ))}
   </Swiper>
)

export default SliderViewTouch