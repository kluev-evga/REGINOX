import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { productReviews } from '../../../redux/selectors';
import FeedbackItem from '../feedback-item/feedback-item.component';
import styles from './feedback-items-container.module.css';


const FeedbackItemsContainer = () => {
    const match = useRouteMatch();
    const reviews = useSelector((state) => productReviews(state)(match.params.productUrl));

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {reviews.map((reviewText, i) => <FeedbackItem key={i} reviewText={reviewText} />)}
            </div>
            <button className='button-form'>Загрузить еще</button>
        </div>
    )
}

export default FeedbackItemsContainer;