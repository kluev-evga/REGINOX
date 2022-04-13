import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg'
import styles from './loader.module.css'

const Loader = () => {
   return (
      <div className={styles.wrapper}>
         <LogoIcon className={styles.logo} />
      </div>
   )
}

export default Loader
