import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';
import { ReactComponent as PRholding } from '../../assets/svg/PRHolding.svg';
import styles from './logo.module.css';


const Logo = () => (
    <div className={styles.logo}>
        <LogoIcon />
        <PRholding className={styles.svg} />
    </div>
);

export default Logo;