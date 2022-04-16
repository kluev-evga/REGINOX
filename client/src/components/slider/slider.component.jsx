import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import CardProduct from '../../components/card-product/card-product.component'


const Slider = ({ items }) => {
   const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
   const isTabletLg = useMediaQuery({ query: '(min-width: 992px)' })
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })

   return (
      <div className={'slider-container'}>
         <Swiper
            slidesPerView='auto'
            spaceBetween={isTabletLg ? 20 : isTablet ? 15 : 10}
            slidesOffsetBefore={ isDesktop ? 0 : isTabletLg ? 35 : isTablet ? 20 : 10 }
            slidesOffsetAfter={ isDesktop ? 0 : isTabletLg ? 35 : isTablet ? 20 : 10 }
            navigation
            modules={[Navigation]}
         >

            {items.map(product => (
               <SwiperSlide key={product.id} className='slide-product-card'>
                  <CardProduct tiles={true} product={product} withRating={false} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

export default Slider