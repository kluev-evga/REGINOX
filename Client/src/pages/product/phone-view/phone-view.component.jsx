import Specifications from "../specifications/specifications.component";
import Collapsible from 'react-collapsible';
import FeedbackStatsPanel from "../feedback-stats-panel/feedback-stats-panel.component";
import FeedbackLeavePanel from "../feedback-leave-panel/feedback-leave-panel.component";
import FeedbackItemsContainer from '../feedback-items-container/feedback-items-container.component';
import AskPanel from '../ask-panel/ask-panel.component';
import styles from './phone-view.module.css';


const PhoneView = ({ specs }) => (
    <div className={styles.container}>

        <h2 className={styles.title1}>Характеристики</h2>
        <Specifications specs={specs} />

        <h2 className={styles.title2}>Отзывы</h2>
        <FeedbackStatsPanel />

        <Collapsible
            trigger='Оставить отзыв'
            triggerWhenOpen={null}
            triggerTagName={'button'}
            transitionTime={450}
            className={styles.collapsible}
            openedClassName={styles.collapsible}
            triggerClassName='button-form'>

            <FeedbackLeavePanel />
        </Collapsible>

        <FeedbackItemsContainer />

        <h2 className={styles.title3}>Задать вопрос</h2>
        <AskPanel />
    </div>
)

export default PhoneView