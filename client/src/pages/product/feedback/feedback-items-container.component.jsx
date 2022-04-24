import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadReviews } from '../../../redux/actions'
import { reviews, reviewsLoading, reviewsCurrent, reviewsTotal } from '../../../redux/selectors'
import FeedbackItem from './feedback-item.component'
import {ReactComponent as LoadingIcon } from '../../../assets/svg/spinner.svg'


const FeedbackItemsContainer = () => {
   const { url, productUrl } = useParams()
   const dispatch = useDispatch()
   const loading = useSelector(state => reviewsLoading(state, productUrl))
   const reviewsArr = useSelector(state => reviews(state, productUrl))
   const total = useSelector(state => reviewsTotal(state, productUrl))
   const current = useSelector(state => reviewsCurrent(state, productUrl))
   const hasReviews = Boolean(total)

   useEffect(() => { hasReviews && dispatch(loadReviews(url, productUrl)) }, []) //eslint-disable-line
   const loadMore = () => { dispatch(loadReviews(url, productUrl)) }

   return (
      <div className='product-feedback__items-container'>
         {reviewsArr.map(({id, ...review}) => <FeedbackItem key={id} {...review} /> )}
         {loading && <LoadingIcon width={100} style={{width: '100px', margin:'0 auto'}}/>}
         {hasReviews && current < total &&
            <button className='button-form' onClick={loadMore}>Загрузить еще</button>
         }
      </div>
   )
}

export default FeedbackItemsContainer