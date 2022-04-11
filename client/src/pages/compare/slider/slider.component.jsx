import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeItemfromCompare } from '../../../redux/actions';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';
import styles from './slider.module.css';


const Slider = ({ data, specs }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.slider}>
            <Swiper
                className={styles.swiper + ' slider-compare'}
                speed={200}
                slidesPerView={1}
                spaceBetween={10}
                initialSlide={1}
                navigation>

                {data.map(item => (
                    <SwiperSlide key={item.id} className={styles.slider_item}>
                        <Link className={styles.link} to={`/products/${item.url}/all/${item.productUrl}`}>
                            <img src={process.env.PUBLIC_URL + item.images[0]} alt='productI item' />
                        </Link>
                        {specs.map((field, i) => (<span key={i}><p>{item.specs[field] || '-'}</p></span>))}

                        <button
                            onClick={() => dispatch(removeItemfromCompare(item.id))}
                            className={styles.button}>
                            <CrossIcon />
                        </button>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default Slider