import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Specifications from '../specifications/specifications.component';
import Feedback from '../feedback/feedback.component';
import Ask from '../ask/ask.component';
import styles from './tabs.module.css';


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
                <Feedback />
            </div>
        </TabPanel>
        <TabPanel>
            <div className={styles.tab_content}>
                <Ask />
            </div>
        </TabPanel>
    </Tabs>
)

export default TabsContainer