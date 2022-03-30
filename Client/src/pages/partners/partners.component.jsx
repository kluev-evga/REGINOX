import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadBrands } from '../../redux/actions';
import { brandsLoaded, brands } from '../../redux/selectors';
import CardSlider from '../../components/card-slider/card-slider.component';
import Brands from '../../components/brands/brands.component';
import Loader from '../../components/loader/loader.coponent';
import { ReactComponent as EyeIcon } from '../../assets/svg/eye.svg';
import styles from './partners.module.css';


const Partners = ({ loaded, brands, loadBrands }) => {
    useEffect(() => {
        loadBrands();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])//eslint-disable-line

    if (!loaded) return <Loader />

    return (
        <div className="container">
            <div className="breadcrumbs">
                <Link to='/home'>Главная</Link> / Наши партнеры
            </div>
            <h1 className='title'>Наши партнеры</h1>

            <Link to='/information/partners' className={`link-card ${styles.link}`} >
                <CardSlider
                    title='Станьте нашим партнером'
                    img={process.env.PUBLIC_URL + '/assets/information_partners.webp'}
                    alt='Для партнеров'
                    md
                    width='590'
                    height='430'
                    fixed>
                    <EyeIcon />
                    Смотреть
                </CardSlider>
            </Link>

            <Brands withUrl brands={brands} />

        </div>
    )
}

const mapStateToProps = state => ({
    loaded: brandsLoaded(state),
    brands: brands(state),
});

export default connect(mapStateToProps, { loadBrands })(Partners);