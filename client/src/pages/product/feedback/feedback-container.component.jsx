import { useState } from 'react'
import Collapsible from 'react-collapsible'
import FormFeedback from '../form/form-feedback.component'
import FeedbackStatsPanel from './feedback-stats-panel.component'
import FeedbackItemsContainer from './feedback-items-container.component'


const FeedbackContainer = () => {
   const [isForm, setForm] = useState(false)

   return (
      <div className='product-feedback'>
         <Collapsible
            open={!isForm}
            trigger='Назад'
            triggerWhenOpen={null}
            triggerTagName={'button'}
            transitionTime={200}
            transitionCloseTime={5}
            triggerClassName='button-form'
            handleTriggerClick={() => setForm(false)}>
            <FeedbackStatsPanel />
            <button onClick={() => setForm(true)} className='button-form'>
               Написать отзыв
            </button>
         </Collapsible>

         {isForm ? <FormFeedback /> : <FeedbackItemsContainer />}
      </div>
   )
}

export default FeedbackContainer