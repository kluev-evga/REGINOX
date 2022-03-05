import { Link } from 'react-router-dom';
import { ReactComponent as Crown } from '../../assets/svg/crown.svg';
import Logo from '../../components/logo/logo.component';
import styles from './not-found.module.css';


const NotFound = () => (
    <div className={styles.wrapper}>
        <Link to='/home' className={styles.link_logo}>
            <Logo />
        </Link>
        <div className={styles.background}>
            <div className="container">
                <div className={styles.row}>
                    <div>
                        <h1 className={styles.title}>Страница<br />не существует</h1>
                        <span>ошибка 404</span>
                    </div>
                    <Crown />
                </div>
            </div>
        </div>
        <div className="article container">
            <p>Запрашиваемая вами страница была удалена либо никогда не существовала. Извините за неудобства.</p>
            <div className={styles.links}>
                <Link to='/home' className={styles.link}>Вернуться на главную</Link>
                <Link to='/catalog' className={styles.link}>Перейти в каталог</Link>
            </div>
        </div>
    </div>
);

export default NotFound;