import { connect } from 'react-redux';
import { setSertificatesSlide } from '../../../redux/actions';
// import { sertificatesSlide, selectSertificatesList } from '../../../redux/selectors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import SliderItem from '../slider-item/slider-item.component';
import styles from './sertificates-slider.module.css';


const Slider = () => {
    const isPhone = useMediaQuery({ query: '(min-width: 340px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isTabletLg = useMediaQuery({ query: '(min-width: 992px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const isXL = useMediaQuery({ query: '(min-width: 1400px)' });

    const sliderItems = []

    return (
        <Swiper
            className={styles.swiper}
            speed={400}
            slidesPerView={isXL ? 4 : isTabletLg ? 3.5 : isTablet ? 2.5 : isPhone ? 1.9 : 1}
            spaceBetween={isDesktop ? 30 : isTablet ? 20 : 0}
            slidesOffsetAfter={isDesktop ? 0 : isTabletLg ? 35 : isTablet ? 20 : 0}
            slidesOffsetBefore={isDesktop ? 0 : isTabletLg ? 35 : isTablet ? 20 : 0}
            initialSlide={1}
            onSlideChange={(swiper) => setSertificatesSlide(swiper.activeIndex)}
            navigation>

            {sliderItems.map(id => (
                <SwiperSlide key={id} className={styles.swiper_slide}>
                    <SliderItem id={id} />
                </SwiperSlide>
            ))}

        </Swiper>
    )
}

export default Slider