import { useCallback, useRef} from 'react'
import { useSelector } from 'react-redux'
import { selectSertificatesList } from '../../../redux/selectors'
import { Gallery } from 'react-photoswipe-gallery'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useMediaQuery } from 'react-responsive'
import SliderItem from '../slider-item/slider-item.component'
import styles from './sertificates-slider.module.css'



const SertificatesSlider = () => {
   const isPhone = useMediaQuery({ query: '(min-width: 375px)' })
   const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
   const isTabletLg = useMediaQuery({ query: '(min-width: 992px)' })
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })
   const isDesktopXL = useMediaQuery({ query: '(min-width: 1400px)' })

   const sertificatesList = useSelector(selectSertificatesList)

   let SWP = useRef();
   const onInitFunc = useCallback((swiperInstance) => {SWP.current=swiperInstance}, [])

   const onBeforeOpen = (pswp) => {
      pswp.on('close', () => {
            const swiper = SWP.current
            const ajust = swiper.clickedIndex - swiper.activeIndex;
            const index = pswp.potentialIndex - ajust
            swiper.slideTo(index, 0)
      })
   }

   return (
      <div className={styles.slider_container + ' slider-container'}>

      <Gallery onBeforeOpen={onBeforeOpen}>

         <Swiper
            className={styles.swiper}
            speed={ 400 }
            slidesPerView={ isDesktopXL ? 5 : isTabletLg ? 4 : isTablet ? 3 : isPhone ? 2.2 : 1 }
            spaceBetween={ isDesktop ? 15 : isTablet ? 10 : 0 }
            slidesOffsetAfter={ isDesktop ? 0 : isTabletLg ? 35 : isTablet ? 20 : 0 }
            slidesOffsetBefore={ isDesktop ? 0 : isTabletLg ? 35 : isTablet ? 20 : 0 }
            onInit={onInitFunc}
            navigation>

               {sertificatesList.map(id => (
                  <SwiperSlide key={id} className={styles.swiper_slide}>
                     <SliderItem id={id} />
                  </SwiperSlide>
               ))}

            </Swiper>

         </Gallery>

      </div>
   )
}

export default SertificatesSlider