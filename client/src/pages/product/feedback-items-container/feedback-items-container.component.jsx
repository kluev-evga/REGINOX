import { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadReviews } from '../../../redux/actions';
import { reviews, reviewsLoading, reviewsLoaded, productItem } from '../../../redux/selectors';
import FeedbackItem from '../feedback-item/feedback-item.component';
import styles from './feedback-items-container.module.css';


const FeedbackItemsContainer = () => {
    const match = useRouteMatch();
    const { url, productUrl } = match.params;
    const dispatch = useDispatch();

    useEffect(() => { dispatch(loadReviews(url, productUrl)) }, [])//eslint-disable-line

    const loading = useSelector((state) => reviewsLoading(state, productUrl));
    const loaded = useSelector((state) => reviewsLoaded(state, productUrl));
    const productReviews = useSelector((state) => reviews(state, productUrl));
    const { reviewsCount } = useSelector((state) => productItem(state)(productUrl));
    const onClickHangler = () => dispatch(loadReviews(url, productUrl, productReviews.length));

    if (!loaded) return null;

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {productReviews.map((review, i) => <FeedbackItem key={i} {...review} />)}
                {loading && <div>Отзывы загружаются...</div>}
            </div>
            {!!reviewsCount && (productReviews.length < reviewsCount) && <button onClick={onClickHangler} className='button-form'>Загрузить еще</button>}
            {!reviewsCount && <p>Oтзывов пока нет</p>}
        </div>
    )
}

export default FeedbackItemsContainer;