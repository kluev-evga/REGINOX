import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Specifications from '../specifications/specifications.component';
import FeedbackContainer from '../feedback-container/feedback-container.component';
import FormQuestion from '../form-question/form-question.component';
import styles from './tabs-container.module.css';


const TabsContainer = ({ specs }) => (
    <Tabs className={styles.container}>
        <TabList >
            <Tab>Характеристики</Tab>
            <Tab>Отзывы</Tab>
            <Tab>Задать вопрос</Tab>
        </TabList>
        <TabPanel>
            <div className={styles.tab_content}>
                <Specifications specs={specs} />
            </div>
        </TabPanel>
        <TabPanel>
            <div className={styles.tab_content}>
                <FeedbackContainer />
            </div>
        </TabPanel>
        <TabPanel>
            <div className={styles.tab_content}>
                <FormQuestion />
            </div>
        </TabPanel>
    </Tabs>
)

export default TabsContainer