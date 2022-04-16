import Specifications from '../specifications/specifications.component'
import Collapsible from 'react-collapsible'
import FeedbackStatsPanel from '../feedback/feedback-stats-panel.component'
import FormFeedback from '../form/form-feedback.component'
import FeedbackItemsContainer from '../feedback/feedback-items-container.component'
import FormQuestion from '../form/form-question.component'


const TabsContainerPhoneView = ({ specs }) => (
   <div className='product-tabs'>
      <h2 className='product-tabs__title-1'>Характеристики</h2>
      <Specifications specs={specs} />

      <h2 className='product-tabs__title-2'>Отзывы</h2>
      <FeedbackStatsPanel />

      <Collapsible
         trigger='Оставить отзыв'
         triggerWhenOpen={null}
         triggerTagName={'button'}
         transitionTime={450}
         openedClassName='product-tabs__collapsible'
         triggerClassName='button-form'>
         <FormFeedback />
      </Collapsible>

      <FeedbackItemsContainer />

      <h2 className='product-tabs__title-3'>Задать вопрос</h2>
      <FormQuestion />
   </div>
)

export default TabsContainerPhoneView