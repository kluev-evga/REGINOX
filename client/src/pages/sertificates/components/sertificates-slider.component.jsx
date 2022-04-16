import { useCallback, useRef} from 'react'
import { useSelector } from 'react-redux'
import { selectSertificatesList } from '../../../redux/selectors'
import { Gallery } from 'react-photoswipe-gallery'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { useMediaQuery } from 'react-responsive'
import SliderSlide from './slider-slide.component'


const SertificatesSlider = () => {
   const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
   const isTabletLg = useMediaQuery({ query: '(min-width: 992px)' })
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })

   const sertificatesList = useSelector(selectSertificatesList)

   let SWP = useRef();
   const onInitFunc = useCallback((swiperInstance) => {SWP.current=swiperInstance}, [])// save swiper instance to SWP

   const onBeforeOpen = (pswp) => {
      pswp.on('close', () => {// pswp : photo-swipe-gallery
            const swiper = SWP.current
            const ajust = swiper.clickedIndex - swiper.activeIndex;
            const index = pswp.potentialIndex - ajust // ajust : number - makes it return to the same slide was clicked
            swiper.slideTo(index, 0)
      })
   }

   return (
      <div className={'sertificates-slider slider-container'}>

         <Gallery onBeforeOpen={onBeforeOpen} withCaption>

            <Swiper
               className='sertificates-slider__swiper'
               onInit={onInitFunc}
               slidesPerView='auto'
               spaceBetween={ isDesktop ? 15 : 8 }
               slidesOffsetAfter={ isDesktop ? 0 : isTabletLg ? 35 : isTablet ? 20 : 10 }
               slidesOffsetBefore={ isDesktop ? 0 : isTabletLg ? 35 : isTablet ? 20 : 10 }
               navigation
               modules={[Navigation]}
            >

               {sertificatesList.map(id => (
                  <SwiperSlide key={id} className='sertificates-slider__swiper-silde'>
                     <SliderSlide id={id} />
                  </SwiperSlide>
               ))}

            </Swiper>

         </Gallery>

      </div>
   )
}

export default SertificatesSlider