import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';

import CardSlider from '../../components/card-slider/card-slider.component';
import Brands from '../../components/brands/brands.component';

import { ReactComponent as EyeIcon } from '../../assets/svg/eye.svg';
import styles from './sertificates.module.css';


const data = [
    {
        id: '53d57263-d565-4d2b-997f-7698594fc85c',
        name: 'Сертификат на Системы газовых конфорок PITT by Reginox',
        img: './assets/sertificates/sertificate-pitt.webp',
        alt: 'sertificate',
    },
    {
        id: '53d57263-d565-4d2b-997f-7698594fc85c',
        name: 'Сертификат на Системы газовых конфорок PITT by Reginox',
        img: './assets/sertificates/sertificate-pitt.webp',
        alt: 'sertificate',
    },
    {
        id: '53d57263-d565-4d2b-997f-7698594fc85c',
        name: 'Сертификат на Системы газовых конфорок PITT by Reginox',
        img: './assets/sertificates/sertificate-pitt.webp',
        alt: 'sertificate',
    },
    {
        id: '53d57263-d565-4d2b-997f-7698594fc85c',
        name: 'Сертификат на Системы газовых конфорок PITT by Reginox',
        img: './assets/sertificates/sertificate-pitt.webp',
        alt: 'sertificate',
    },
    {
        id: '53d57263-d565-4d2b-997f-7698594fc85c',
        name: 'Сертификат на Системы газовых конфорок PITT by Reginox',
        img: './assets/sertificates/sertificate-pitt.webp',
        alt: 'sertificate',
    },
];

const brands = [
    {
        img: './assets/brands/reginox.webp',
        alt: 'reginox',
        text: 'Reginox (Голандия) гарантия 6 лет',
    },
    {
        img: './assets/brands/webert.webp',
        alt: 'webert',
        text: 'Webert (Италия) гарантия 5 лет',
    },
    {
        img: './assets/brands/rodi.webp',
        alt: 'rodi',
        text: 'Rodi (Франция) гарантия 8 лет',
    },
    {
        img: './assets/brands/effepi.webp',
        alt: 'effepi',
        text: 'Effepi (Италия) гарантия 10 лет',
    },
    {
        img: './assets/brands/pitt.webp',
        alt: 'pitt',
        text: 'Pitt (Голандия) гарантия 6 лет',
    },
    {
        img: './assets/brands/bone-crusher.webp',
        alt: 'bone crusher',
        text: 'Bone Crusher (Германия) гарантия 7 лет',
    },
    {
        img: './assets/brands/armando-vicario.webp',
        alt: 'armando vicario',
        text: 'Armando Vicario (Италия) гарантия 6 лет',
    },
];

const Sertificates = () => {
    const isPhoneLg = useMediaQuery({ query: '(min-width: 576px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isTabletLg = useMediaQuery({ query: '(min-width: 992px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

    return (
        <div>
            <div className="container">
                <div className="breadcrumbs">
                    <Link to='/home'>Главная</Link> / Сертификаты и гарантии
                </div>
                <h1 className='title'>Гарантия качества продукции</h1>
                <div className="article">
                    <h2 className="title-1">Сертификаты</h2>
                    <p>Данные сертификаты подверждают качество и легальность поставляемой продукции.</p>
                </div>
            </div>

            <div className={styles.slider_container}>
                <Swiper
                    speed={500}
                    className={styles.swiper}
                    slidesPerView={isTabletLg ? 3 : isTablet ? 2.2 : isPhoneLg ? 1.7 : 1}
                    spaceBetween={isDesktop ? 50 : isTablet ? 20 : 0}
                    navigation
                    slidesOffsetAfter={isDesktop ? 0 : isTablet ? 20 : 0}
                    slidesOffsetBefore={isDesktop ? 0 : isTablet ? 20 : 0}
                >
                    {
                        data.map((item, i) => (
                            <SwiperSlide key={i} className={styles.swiper_slide}>
                                <button>
                                    <CardSlider
                                        name={item.name}
                                        img={item.img}
                                        alt={item.alt}
                                        sm
                                        fixed
                                    >
                                        <EyeIcon />
                                        Смотреть
                                    </CardSlider>
                                </button>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div className="container">
                <div className="article">
                    <h2 className="title-1">Гарантия</h2>
                    <p>Наши партнеры-производители из Европы имеют крупные производства, используют только качественное и экологически чистое сырье, гарантируют качество продукции и поддерживают гарантийные обязательства. </p>
                </div>

                <Brands brands={brands} />

            </div>
        </div>
    );
};

export default Sertificates;


// <div className={styles.cards}>
// <figure>
//     <img src={img1} alt='Webert' />
//     <figcaption>Reginox (Голандия) гарантия 6 лет</figcaption>
// </figure>
// <figure>
//     <img src={img1} alt='Webert' />
//     <figcaption>Webert (Италия) гарантия 5 лет</figcaption>
// </figure>
// <figure>
//     <img src={img2} alt='Rodi' />
//     <figcaption>Rodi (Франция) гарантия 8 лет</figcaption>
// </figure>
// <figure>
//     <img src={img3} alt='Effepi' />
//     <figcaption>Effepi (Италия) гарантия 10 лет</figcaption>
// </figure>
// <figure>
//     <img src={img4} alt='Pitt' />
//     <figcaption>Pitt (Голандия) гарантия 6 лет</figcaption>
// </figure>
// <figure>
//     <img src={img5} alt='Bone Crusher' />
//     <figcaption>Bone Crusher (Германия) гарантия 7 лет</figcaption>
// </figure>
// <figure>
//     <img src={img6} alt='Armando Vicario' />
//     <figcaption>Armando Vicario (Италия) гарантия 6 лет</figcaption>
// </figure>
// </div>