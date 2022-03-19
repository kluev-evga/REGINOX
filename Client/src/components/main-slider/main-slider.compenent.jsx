import { connect } from 'react-redux';
import { homeSlider } from '../../redux/selectors';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './main-slider.module.css';


const MainSlider = ({ slider }) => {
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

    return (
        <Swiper
            allowTouchMove={isDesktop ? false : true}
            speed={isDesktop ? 1500 : isTablet ? 1000 : 600}
            loop={true}
            loopAdditionalSlides={1}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true,
                modifierClass: `${styles.pagination} swiper-pagination`,
                bulletClass: `${styles.bullet} swiper-pagination-bullet`,
                bulletActiveClass: `${styles.bullet_active} swiper-pagination-bullet-active`
            }}
        >
            {slider.map(({ id, title, subtitle, img, alt, url, titleLink, imgLink, altLink }) =>

                <SwiperSlide key={id}>
                    <img src={img} alt={alt} className={styles.backgroundImage} />
                    <div className={styles.wrapper}>
                        <div className={styles.container + ' container'}>
                            <div className={styles.row}>

                                <h1 className={styles.title + ' h1'}>{title}</h1>
                                <p className={styles.sub_title}>{subtitle}</p>

                                <div className={styles.link_container}>
                                    <Link to={`/products/${url}/all`} className={styles.link} tabIndex={-1}>
                                        <img src={imgLink} alt={altLink} width={304} height={228} />
                                        <span>{titleLink}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            )}
        </Swiper>
    );
};

const mapStateToProps = (state) => ({
    slider: homeSlider(state)
})

export default connect(mapStateToProps)(MainSlider);