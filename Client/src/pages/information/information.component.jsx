import { Link } from 'react-router-dom';
import CardSlider from '../../components/card-slider/card-slider.component';
import { ReactComponent as EyeIcon } from '../../assets/svg/eye.svg';
import styles from './information.module.css';


const Information = () => (
    <div className="container">
        <div className="breadcrumbs">
            <Link to='/home'>Главная</Link> / Информация
        </div>
        <h1 className="title">Информация</h1>
        <div className="article">
            <b>«Реджинокс Риф Холдинг» является эксклюзивным представителем в России нидерландской Компании «REGINOX». </b>
        </div>
        <div className={styles.cards}>
            <Link to='information/buyers'>
                <CardSlider
                    title='Для розничных покупателей'
                    img={process.env.PUBLIC_URL + '/assets/information_buyers.webp'}
                    alt='Для розничных покупателей'
                    md
                    width='590'
                    height='430'
                >
                    <EyeIcon />
                    Смотреть
                </CardSlider>
            </Link>
            <Link to='information/partners'>
                <CardSlider
                    title='Для партнеров'
                    img={process.env.PUBLIC_URL + '/assets/information_partners.webp'}
                    alt='Для партнеров'
                    md
                    width='590'
                    height='430'
                >
                    <EyeIcon />
                    Смотреть
                </CardSlider>
            </Link>
        </div>
    </div>
);

export default Information;