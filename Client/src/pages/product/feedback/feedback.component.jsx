import { ReactComponent as StarIcon } from '../../../assets/svg/star.svg';
import FeedbackItem from '../feedback-item/feedback-item.component';
import styles from './feedback.module.css';


const Feedback = () => (
    <div className={styles.container}>
        <div className={styles.average}>
            <div className={styles.total}>2.4</div>
            <div className={styles.stars}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </div>
            Всего 14 оценок
        </div>
        <div className={styles.bars}>
            Цена:
            <div><span></span></div>
            Качество:
            <div><span></span></div>
            Внешний вид:
            <div><span></span></div>
        </div>
        <button className={styles.btn_write_feedback}>Оставить отзыв</button>

        <div className={styles.wrapper}>
            <FeedbackItem />
            <FeedbackItem />
        </div>

        <button className={styles.btn_load}>Загрузить еще</button>
    </div>
)

export default Feedback