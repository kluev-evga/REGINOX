import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './slider.module.css';


const Slider = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })

    return (
        <div className={styles.slider + ' product-slider'}>
            <Swiper
                className={styles.slider_view}
                thumbs={{ swiper: thumbsSwiper }}
                allowTouchMove={false}
                slidesPerView={1}
                speed={0}>
                {images.map((img, i) => (
                    <SwiperSlide key={i} className={styles.slide}>
                        <img src={process.env.PUBLIC_URL + img} alt="poductimage" width='600' h='600' />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                direction={isDesktop ? 'vertical' : 'horizontal'}
                navigation
                watchSlidesProgress={true}
                onSwiper={setThumbsSwiper}
                className={styles.thumbs}
                spaceBetween={10}
                slidesPerView={5}>
                {images.map((img, i) => (
                    <SwiperSlide key={i} className={styles.thumb}>
                        <img src={process.env.PUBLIC_URL + img} alt="poductimage" width='600' h='600' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider;