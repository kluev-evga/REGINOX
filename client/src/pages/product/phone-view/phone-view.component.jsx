import Specifications from '../specifications/specifications.component'
import Collapsible from 'react-collapsible'
import FeedbackStatsPanel from '../feedback-stats-panel/feedback-stats-panel.component'
import FormFeedback from '../form-feedback/form-feedback.component'
import FeedbackItemsContainer from '../feedback-items-container/feedback-items-container.component'
import FormQuestion from '../form-question/form-question.component'
import styles from './phone-view.module.css'

const PhoneView = ({ specs }) => (
   <div>
      <h2 className={styles.title1}>Характеристики</h2>
      <Specifications specs={specs} />

      <h2 className={styles.title2}>Отзывы</h2>
      <FeedbackStatsPanel />

      <Collapsible
         trigger='Оставить отзыв'
         triggerWhenOpen={null}
         triggerTagName={'button'}
         transitionTime={450}
         openedClassName={styles.collapsible}
         triggerClassName='button-form'>
         <FormFeedback />
      </Collapsible>

      <FeedbackItemsContainer />

      <h2 className={styles.title3}>Задать вопрос</h2>
      <FormQuestion />
   </div>
)

export default PhoneView
