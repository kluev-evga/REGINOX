import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { homeSlider } from '../../../redux/selectors'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'


const HomeSlider = () => {
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })
   const slider = useSelector(homeSlider)

   return (
      <Swiper
         allowTouchMove={isDesktop ? false : true}
         speed={isDesktop ? 500 : 300}
         loop={true}
         autoplay={{ delay: 6000 }}
         effect={'creative'}
         creativeEffect={{
            prev: { translate: ["-30%", 0, -1] },
            next: { translate: ["100%", 0, 0] }
         }}
         className='home-slider'
         pagination={{
            clickable: true,
            modifierClass: 'home-slider__pagination swiper-pagination',
            bulletActiveClass: 'home-slider__bullet-active swiper-pagination-bullet-active',
         }}>

         {slider.map(
            ({ id, title, subtitle, img, alt, url, titleLink, imgLink, altLink }) => (
               <SwiperSlide key={id}>
                  <img src={img} alt={alt} className='home-slider__background'/>
                  <div className='home-slider__wrapper'>
                     <div className='home-slider__container container'>
                        <div className='home-slider__content'>
                           <h1 className='home-slider__title'>{title}</h1>
                           <p className='home-slider__sub_title'>{subtitle}</p>

                           <div className='home-slider__link-container'>
                              <Link to={`products/${url}`} className='home-slider__link' tabIndex={-1}>
                                 <img src={imgLink} alt={altLink} width={304} height={228} />
                                 <span>{titleLink}</span>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            )
         )}
      </Swiper>
   )
}

export default HomeSlider