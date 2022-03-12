import { Link } from 'react-router-dom';
import { ReactComponent as Crown } from '../../assets/svg/crown.svg';
import Logo from '../../components/logo/logo.component';
import styles from './error.module.css';


const Error = () => (
    <div className={styles.wrapper}>
        <Link to='/home' className={styles.link_logo}>
            <Logo />
        </Link>
        <div className={styles.background}>
            <div className="container">
                <div className={styles.row}>
                    <h1 className={styles.title}>Ошибка (:</h1>
                    <Crown />
                </div>
            </div>
        </div>
        <div className="article container">
            <p>Произошла ошибка. Возможно нет подключения с интернетом. Извините за неудобства.</p>
            <Link to='/home' className={styles.link}>Вернуться на главную</Link>
        </div>
    </div>
);

export default Error;