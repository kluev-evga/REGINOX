import { Link } from 'react-router-dom';
import CardSlider from '../../components/card-slider/card-slider.component';
import { ReactComponent as EyeIcon } from '../../assets/svg/eye.svg';
import Brands from '../../components/brands/brands.component';
import styles from './partners.module.css';


const brands = [
    {
        img: './assets/brands/reginox.webp',
        alt: 'reginox',
        text: 'Reginox (Голандия) – Раковины и смесители',
        url: 'www.reginox.com'
    },
    {
        img: './assets/brands/webert.webp',
        alt: 'webert',
        text: 'Webert (Италия) – Премиальная сантехника',
        url: 'www.webert.com'
    },
    {
        img: './assets/brands/rodi.webp',
        alt: 'rodi',
        text: 'Rodi (Франция) – Раковины из нержавеющей стали',
        url: 'www.rodi.com'
    },
    {
        img: './assets/brands/effepi.webp',
        alt: 'effepi',
        text: 'Effepi (Италия) – Сантехника из Италии',
        url: 'www.effepi.com'
    },
    {
        img: './assets/brands/pitt.webp',
        alt: 'pitt',
        text: 'Pitt (Голандия) – встроенные газовые комфорки',
        url: 'www.pitt.com'
    },
    {
        img: './assets/brands/bone-crusher.webp',
        alt: 'bone crusher',
        text: 'Bone Crusher (Германия) – измельчители для раковин',
        url: 'www.bone-crusher.com'
    },
    {
        img: './assets/brands/armando-vicario.webp',
        alt: 'armando vicario',
        text: 'armando-vicario (Италия) – кухни и душевые',
        url: 'www.armando-vicario.com'
    },
];

const Partners = () => (
    <div className="container">
        <div className="breadcrumbs">
            <Link to='/home'>Главная</Link> / Наши партнеры
        </div>
        <h1 className='title'>Наши партнеры</h1>

        <Link to='/information/partners' className={styles.link} >
            <CardSlider
                name='Станьте нашим партнером'
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

        <Brands brands={brands} />
    </div>
);

export default Partners;