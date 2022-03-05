import { Link } from 'react-router-dom';
import CardSlider from '../../components/card-slider/card-slider.component';
import { ReactComponent as EyeIcon } from '../../assets/svg/eye.svg';
import styles from './articles.module.css';


const data = [
    {
        id: 'd8c75a07-1919-4ae7-8356-fabb56240487',
        name: 'Ontario — стильный дизайн и надежность!',
        date: '16 / 12 / 19',
        dateTime: '2019-12-16 12:00',
        img: './assets/articles/previews/article_1.webp',
        alt: 'ontario',
        url: 'ontario',
    },
    {
        id: 'd8c75a07-1919-4ae7-8356-fabb56240487',
        name: 'Ontario — стильный дизайн и надежность!',
        date: '16 / 12 / 19',
        dateTime: '2019-12-16 12:00',
        img: './assets/articles/previews/article_2.webp',
        alt: 'ontario',
        url: 'ontario',
    },
    {
        id: 'd8c75a07-1919-4ae7-8356-fabb56240487',
        name: 'Ontario — стильный дизайн и надежность!',
        date: '16 / 12 / 19',
        dateTime: '2019-12-16 12:00',
        img: './assets/articles/previews/article_3.webp',
        alt: 'ontario',
        url: 'ontario',
    },
    {
        id: 'd8c75a07-1919-4ae7-8356-fabb56240487',
        name: 'Ontario — стильный дизайн и надежность!',
        date: '16 / 12 / 19',
        dateTime: '2019-12-16 12:00',
        img: './assets/articles/previews/article_4.webp',
        alt: 'ontario',
        url: 'ontario',
    },
    {
        id: 'd8c75a07-1919-4ae7-8356-fabb56240487',
        name: 'Ontario — стильный дизайн и надежность!',
        date: '16 / 12 / 19',
        dateTime: '2019-12-16 12:00',
        img: './assets/articles/previews/article_5.webp',
        alt: 'ontario',
        url: 'ontario',
    },

];

const Articles = () => (
    <div className="container">
        <div className="breadcrumbs">
            <Link to='/home'>Главная</Link> / Статьи
        </div>
        <h1 className="title">Статьи</h1>

        <div className={styles.wrapper}>
            {
                data.map((item, i) => (
                    <Link key={i} to={`/articles/${item.url}`}>
                        <CardSlider
                            name={item.name}
                            img={item.img}
                            alt={item.alt}
                            date={item.date}
                            dateTime={item.dateTime}
                            fixed
                        >
                            <EyeIcon />
                            Смотреть
                        </CardSlider>
                    </Link>
                ))
            }
        </div>
    </div>
);

export default Articles;




