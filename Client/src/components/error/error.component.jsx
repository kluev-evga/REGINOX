import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';
import styles from './error.module.css';


const Error = () => (
    <div>
        <LogoIcon className={styles.logo} />
        <div className={styles.row}>
            <div className="container">
                Ошибка (:
            </div>
        </div>
    </div>
);

export default Error;