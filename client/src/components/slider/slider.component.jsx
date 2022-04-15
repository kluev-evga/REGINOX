import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import ProductCard from '../../components/product-card/product-card.component'
import styles from './slider.module.css'


const Slider = ({ items }) => {
   const isPhone = useMediaQuery({ query: '(min-width: 400px)' })
   const isPhoneLG = useMediaQuery({ query: '(min-width: 576px)' })
   const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
   const isTabletLg = useMediaQuery({ query: '(min-width: 992px)' })
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })
   const isXL = useMediaQuery({ query: '(min-width: 1400px)' })

   return (
      <div className={'slider-container'}>
         <Swiper
            slidesPerView={ isXL ? 4 : isDesktop ? 3 : isTabletLg ? 3.2 : isTablet ? 3.13 : isPhoneLG ? 3 : isPhone ? 2 : 1 }
            spaceBetween={isTabletLg ? 35 : isTablet ? 20 : 0}
            slidesOffsetBefore={ isDesktop ? 0 : isTabletLg ? 35 : isTablet ? 20 : 0 }
            slidesOffsetAfter={ isDesktop ? 0 : isTabletLg ? 35 : isTablet ? 20 : 0 }
            navigation
            modules={[Pagination, Navigation]}
            >

            {items.map(product => (
               <SwiperSlide key={product.id} className={styles.slide}>
                  <ProductCard tiles={true} product={product} withRating={false} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

export default Slider