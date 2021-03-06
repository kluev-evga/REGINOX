import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { productItem } from '../../../redux/selectors'
import Response from '../../../components/response/response.component';
import Rating from '../../../components/rating/rating.component';
import FormFeedback from './feedback-form.component'
import ModalContainer from '../../../components/modal-container/modal-container.component';


const fields = ['Цена', 'Качество', 'Внещний вид']
const Bars = ({ ratings }) => (
   <div className='product-feedback__stats-bars'>
      {fields.map((field, i) => (
         <span key={i}>
            {field}
            <div>
               <span style={{ width: ratings[i] + '%' }}></span>
            </div>
         </span>
      ))}
   </div>
)

const FeedbackStatsPanel = () => {
   const { productUrl } = useParams()
   const { r, ratings, reviewsCount } = useSelector(state => productItem(state, productUrl))
   const [ isOpen, setIsOpen ] = useState(false)
   const [ isSubmited, setSubmited ] = useState(false)

   const handleClose = () => { setIsOpen(false) }
   const handleOpen = () => { setIsOpen(true) }

   return (
      <div>
         <div className='product-feedback__stats'>
            {!!reviewsCount && <div className='product-feedback__stats-total'>{r.toFixed(1)}</div>}
            <Rating r={r} wrapperClass='product-feedback__stats-stars' />
            Всего {reviewsCount} оценок
         </div>
         {!!reviewsCount && <Bars ratings={ratings} />}

            <ModalContainer
               render={isSubmited ? <Response/> : <FormFeedback setSubmited={setSubmited}/>}
               handleClose={handleClose}
               isOpen={isOpen}
               wrapperClass={isSubmited ? 'modal-response' : 'product-feedback__modal'}
            >
               {!isSubmited && <button className='button-form' type='button' onClick={handleOpen}>Написать отзыв</button>}
            </ModalContainer>
      </div>
   )
}

export default FeedbackStatsPanel