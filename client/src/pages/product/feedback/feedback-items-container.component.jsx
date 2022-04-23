import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadReviews } from '../../../redux/actions'
import { reviews, reviewsLoading, reviewsLoaded, reviewsCount } from '../../../redux/selectors'
import FeedbackItem from './feedback-item.component'
import {ReactComponent as LoadingIcon } from '../../../assets/svg/spinner.svg'


const FeedbackItemsContainer = () => {
   const { url, productUrl } = useParams()
   const dispatch = useDispatch()
   const loading = useSelector(state => reviewsLoading(state, productUrl))
   const loaded = useSelector(state => reviewsLoaded(state, productUrl))
   const productReviews = useSelector(state => reviews(state, productUrl))
   const totalReviewsCount = useSelector(state => reviewsCount(state, productUrl))

   const onClickHangler = () => { dispatch(loadReviews(url, productUrl, productReviews.length)) }
   useEffect(() => { !productReviews && dispatch(loadReviews(url, productUrl)) }, []) //eslint-disable-line

   if (!loaded) return null

   return (
      <div className='product-feedback__items-container'>

         {productReviews.map(({id, ...review}) => <FeedbackItem key={id} {...review} /> )}

         {loading && <LoadingIcon/>}

         {!!totalReviewsCount && productReviews.length < totalReviewsCount &&
            <button className='button-form' onClick={onClickHangler}>
               Загрузить еще
            </button>
         }

         {!totalReviewsCount && <p>Oтзывов пока нет</p>}

      </div>
   )
}

export default FeedbackItemsContainer