import { useMemo } from 'react';
import { connect } from 'react-redux';
import { setSertificatesSlide } from '../../../redux/actions';
import { sertificatesSlide, selectSertificatesList, sertificatesLoaded } from '../../../redux/selectors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import SliderItem from '../slider-item/slider-item.component';
import { ReactComponent as Spinner } from '../../../assets/svg/spinner-comets.svg';
import styles from './sertificates-slider.module.css';


const SertificatesSlider = ({ sertificatesList, slide, setSertificatesSlide, loaded }) => {
    const isPhone = useMediaQuery({ query: '(min-width: 340px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isTabletLg = useMediaQuery({ query: '(min-width: 992px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

    const placeholder = useMemo(() => [...Array(3)].map((_, i) => i), []);
    const list = (loaded) ? sertificatesList : placeholder;

    return (
        <div className={styles.slider_container}>
            <Swiper
                className={styles.swiper}
                speed={400}
                slidesPerView={isTabletLg ? 3 : isTablet ? 2.2 : isPhone ? 1.7 : 1}
                spaceBetween={isDesktop ? 50 : isTablet ? 20 : 0}
                navigation
                slidesOffsetAfter={isDesktop ? 0 : isTablet ? 20 : 0}
                slidesOffsetBefore={isDesktop ? 0 : isTablet ? 20 : 0}
                initialSlide={slide}
                onSlideChange={(swiper) => setSertificatesSlide(swiper.activeIndex)}
            >
                {
                    list.map(id => (
                        <SwiperSlide key={id} className={styles.swiper_slide}>
                            {loaded ? <SliderItem id={id} /> : <div className={styles.spinner}> <Spinner /></div>}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

const mapStateToProps = (state) => ({
    sertificatesList: selectSertificatesList(state),
    slide: sertificatesSlide(state),
    loaded: sertificatesLoaded(state),
});

const mapDispatchToProps = ({ setSertificatesSlide });

export default connect(mapStateToProps, mapDispatchToProps)(SertificatesSlider);

