
import { ReactComponent as CartIcon } from '../../../assets/svg/cart.svg';
import { ReactComponent as CompareIcon } from '../../../assets/svg/compare.svg';
import { ReactComponent as PlusIcon } from '../../../assets/svg/plus.svg';
import { ReactComponent as MinusIcon } from '../../../assets/svg/minus.svg';
import { ReactComponent as RublIcon } from '../../../assets/svg/rubl.svg';
import styles from './controls.module.css';


const Controls = ({ id, price }) => (
    <div className={styles.container}>
        <p>Артикул: {id}</p>
        <div className={styles.price}>
            <span>{price} <RublIcon /></span>
            <button className={styles.compare}>
                <CompareIcon /> Сравнить
            </button>
        </div>
        <div className={styles.count}>
            <span>Количество</span>
            <div>
                <button><PlusIcon /></button>
                <span>1</span>
                <button><MinusIcon /></button>
            </div>
        </div>
        <button className={styles.buy}>
            <span>Купить в один клик</span>
            <div><CartIcon /></div>
        </button>
    </div>
)

export default Controls