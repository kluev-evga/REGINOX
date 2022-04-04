import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadReviews } from '../../../redux/actions';
import { useRouteMatch } from 'react-router-dom';
import { reviews, reviewsLoading, reviewsLoaded } from '../../../redux/selectors';
import FeedbackItem from '../feedback-item/feedback-item.component';
import styles from './feedback-items-container.module.css';


const FeedbackItemsContainer = ({ loadReviews, productReviews, loading, loaded }) => {
    const match = useRouteMatch();
    const { url, productUrl } = match.params;
    useEffect(() => { loadReviews(url, productUrl) }, [])//eslint-disable-line

    if (!loaded(productUrl) || loading(productUrl)) return <div>loading</div>
    const reviews = productReviews(productUrl);

    console.log(reviews);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {reviews.map((review, i) => <FeedbackItem key={i} {...review} />)}
            </div>
            <button className='button-form'>Загрузить еще</button>
        </div>
    )
}

const mapStateToProps = state => ({
    productReviews: reviews(state),
    loading: reviewsLoading(state),
    loaded: reviewsLoaded(state)
})

export default connect(mapStateToProps, { loadReviews })(FeedbackItemsContainer);


