import { useState } from 'react';
import FeedbackItem from '../feedback-item/feedback-item.component';
import LeaveFeedback from '../leave-feedback/leave-feedback.component';
import { ReactComponent as StarIcon } from '../../../assets/svg/star.svg';
import { ReactComponent as ChevronIcon } from '../../../assets/svg/chevron-right.svg';
import styles from './feedback.module.css';



const Feedbacks = () => (
    <div className={styles.wrapper}>
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <button className={styles.btn_load}>Загрузить еще</button>
    </div>
)


const Feedback = () => {
    const [form, setForm] = useState(false);

    return (
        <div className={styles.container}>
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
                <button
                    onClick={() => setForm(!form)}
                    className={styles.btn_write_feedback}>
                    {form ? 'Смотреть отзывы' : 'Оставить отзыв'}
                </button>
            </div>

            <div>
                {form ? <LeaveFeedback /> : <Feedbacks />}
            </div>

        </div>
    )
}

export default Feedback