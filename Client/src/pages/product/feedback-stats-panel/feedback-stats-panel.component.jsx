import { ReactComponent as StarIcon } from '../../../assets/svg/star.svg';
import styles from './feedback-stats-panel.module.css';


const FeedbackStatsPanel = () => (
    <div>
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
    </div>
)

export default FeedbackStatsPanel


// <button
// onClick={handleClick}
// className={styles.btn_write_feedback}>
// {isForm ? 'Смотреть отзывы' : 'Оставить отзыв'}
// </button>