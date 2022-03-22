import { Link } from 'react-router-dom';
import CardSlider from '../../components/card-slider/card-slider.component';
import { ReactComponent as EyeIcon } from '../../assets/svg/eye.svg';
import Brands from '../../components/brands/brands.component';
import withBrands from '../../hoc/with-brands';
import styles from './partners.module.css';


const Partners = ({ brands }) => (
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
                fixed
            >
                <EyeIcon />
                Смотреть
            </CardSlider>
        </Link>

        <Brands withUrl brands={brands} />

    </div>
);

export default withBrands(Partners);