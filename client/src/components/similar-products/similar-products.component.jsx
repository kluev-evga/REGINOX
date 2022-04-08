import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadSimilarProducts } from '../../redux/actions';
import { similarProducts, similarProductsloading } from '../../redux/selectors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import ProductCard from '../../components/product-card/product-card.component';
import { ReactComponent as Loading } from '../../assets/svg/spinner.svg';
import styles from './similar-products.module.css';


const SimilarProducts = ({ loadSimilarProducts, loading, similarProducts }) => {
    const isPhone = useMediaQuery({ query: '(min-width: 400px)' });
    const isPhoneLG = useMediaQuery({ query: '(min-width: 576px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isTabletLg = useMediaQuery({ query: '(min-width: 992px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const isXL = useMediaQuery({ query: '(min-width: 1400px)' });
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
        loadSimilarProducts();
    }, []);//eslint-disable-line

    useEffect(() => { !loading && setLoaded(true) }, [loading]);

    if (loading || !loaded) return <Loading className={styles.spinner} height='100' />;

    return (
        <div className={'slider-container'}>
            <h2 className={styles.title + ' title'}>Похожие товары</h2>
            <Swiper
                slidesPerView={isXL ? 4 : isTabletLg ? 3 : isPhoneLG ? 3 : isPhone ? 2 : 1}
                spaceBetween={isTabletLg ? 35 : isTablet ? 20 : 0}
                slidesOffsetBefore={isDesktop ? 0 : isTabletLg ? 35 : isTablet ? 20 : 0}
                slidesOffsetAfter={isDesktop ? 0 : isTabletLg ? 35 : isTablet ? 20 : 0}
                navigation>

                {similarProducts.map(product => (
                    <SwiperSlide key={product.id} className={styles.slide}>
                        <ProductCard tiles={true} product={product} withRating={false} noFocus={true} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

const mapStateToProps = state => ({
    similarProducts: similarProducts(state),
    loading: similarProductsloading(state)
})

export default connect(mapStateToProps, { loadSimilarProducts })(SimilarProducts)