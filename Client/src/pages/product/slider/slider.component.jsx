import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './slider.module.css';


const Slider = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className={styles.slider}>
            <Swiper
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
                slideActiveClass='swiper-thumbs-active'
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