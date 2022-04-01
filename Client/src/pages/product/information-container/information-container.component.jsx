import Specifications from "../specifications/specifications.component";
import Feedback from '../feedback/feedback.component';
import Ask from '../ask/ask.component';
import styles from './information-container.module.css';


const InformationContainer = ({ specs }) => (
    <div className={styles.container}>
        <div>
            <h2 className={styles.title1}>Характеристики</h2>
            <Specifications specs={specs} />
        </div>
        <div>
            <h2 className={styles.title2}>Отзывы</h2>
            <Feedback />
        </div>
        <div>
            <h2 className={styles.title3}>Задать вопрос</h2>
            <Ask />
        </div>
    </div>
)

export default InformationContainer