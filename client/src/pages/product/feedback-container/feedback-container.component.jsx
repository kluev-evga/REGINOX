import { useState } from 'react';
import Collapsible from 'react-collapsible';
import FormFeedback from '../form-feedback/form-feedback.component';
import FeedbackStatsPanel from '../feedback-stats-panel/feedback-stats-panel.component';
import FeedbackItemsContainer from '../feedback-items-container/feedback-items-container.component';
import styles from './feedback-container.module.css';


const FeedbackContainer = () => {
    const [isForm, setForm] = useState(false);

    return (
        <div className={styles.container}>

            <div>
                <Collapsible
                    open={!isForm}
                    trigger='Назад'
                    triggerWhenOpen={null}
                    triggerTagName={'button'}
                    transitionTime={200}
                    transitionCloseTime={5}
                    className={styles.collapsible}
                    openedClassName={styles.collapsible}
                    triggerClassName='button-form'
                    handleTriggerClick={() => setForm(false)}>

                    <FeedbackStatsPanel />
                    <button onClick={() => setForm(true)} className='button-form'>Написать отзыв</button>
                </Collapsible>
            </div>

            <div>
                {isForm ? <FormFeedback /> : <FeedbackItemsContainer />}
            </div>
        </div>
    )
}

export default FeedbackContainer