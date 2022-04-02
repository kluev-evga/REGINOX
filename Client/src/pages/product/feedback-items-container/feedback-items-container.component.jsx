import FeedbackItem from '../feedback-item/feedback-item.component';
import styles from './feedback-items-container.module.css';


const FeedbackItemsContainer = () => (
    <div>
        <div className={styles.container}>
            <FeedbackItem />
            <FeedbackItem />
            <FeedbackItem />
            <FeedbackItem />
            <FeedbackItem />
            <FeedbackItem />
        </div>
        <button className='button-form'>Загрузить еще</button>
    </div>
)

export default FeedbackItemsContainer