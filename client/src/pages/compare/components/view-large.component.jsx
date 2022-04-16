import { useDispatch } from 'react-redux'
import { removeItemfromCompare } from '../../../redux/actions'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper'
import { useMediaQuery } from 'react-responsive'
import ViewLargeSlideContent from './view-large-slide-content.component'
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg'


const ViewLarge = ({ data, specs }) => {
   const isTabletLg = useMediaQuery({ query: '(min-width: 992px)' })
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })
   const isXL = useMediaQuery({ query: '(min-width: 1600px)' })
   const dispatch = useDispatch()

   return (
      <div className='compare__view-large-container'>
         <ul className='compare__view-large-specs'>
            <li><p>Цена</p></li>
            {specs.map((item, i) => (
               <li key={i}>
                  <p>{item}</p>
               </li>
            ))}
         </ul>

         <div className='compare__view-large-slider'>
            <Swiper
               className='compare__view-large-swiper slider-compare'
               speed={400}
               slidesPerView={isXL ? 4 : isDesktop ? 3 : isTabletLg ? 3 : 2}
               spaceBetween={isTabletLg ? 20 : 10}
               initialSlide={1}
               navigation
               modules={[Navigation, A11y]}
            >
               {data.map(item => (
                  <SwiperSlide key={item.id} className='compare__view-large-slider-item'>
                     <ViewLargeSlideContent item={item} specs={specs} />

                     <button
                        onClick={() => dispatch(removeItemfromCompare(item.id))}
                        className='compare__view-large-button'>
                        <CrossIcon />
                     </button>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   )
}

export default ViewLarge