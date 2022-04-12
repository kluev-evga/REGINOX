import TabMoskow from '../tabs-content/tab-moskow.component';
import TabPeterburg from '../tabs-content/tab-peterburg.component';
import Form from '../form/form.component';
import styles from './phone-view.module.css';


const PhoneView = () => (
    <div className={styles.container}>
        <div>
            <h2 className={styles.title1}>Москва</h2>
            <TabMoskow />
        </div>
        <div>
            <h2 className={styles.title1}>Санкт-Петербург</h2>
            <TabPeterburg />
        </div>
        <div>
            <h2 className={styles.title1}>Обратная связь</h2>
            <Form />
        </div>
    </div>
)

export default PhoneView