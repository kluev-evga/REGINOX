import styles from './leave-feedback.module.css';
import { ReactComponent as StarIcon } from '../../../assets/svg/star.svg'


const LeaveFeedback = () => (
    <form className={styles.form}>
        <input type="text" placeholder='Имя' />
        <input type="text" placeholder='E-mail' />
        <textarea type="text" placeholder='Коментарий...'></textarea>
        <div>
            <button type='button'>Отправить</button>
            <span>Нажимая кнопку отправить вы даете согласие на обработку пресональных данных</span>
        </div>
        <StarIcon />
        <StarIcon />
        <StarIcon />
    </form>
)

export default LeaveFeedback