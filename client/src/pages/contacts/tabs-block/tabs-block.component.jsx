import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabMoskow from '../tabs-content/tab-moskow.component';
import TabPeterburg from '../tabs-content/tab-peterburg.component';
import Form from '../form/form.component';
import styles from './tabs-block.module.css';


const TabsBlock = () => (
    <Tabs>
        <TabList>
            <Tab>Москва</Tab>
            <Tab>Санкт-Петербург</Tab>
            <Tab>Обратная связь</Tab>
        </TabList>

        <div className={styles.container}>
                <TabPanel>
                    <TabMoskow />
                </TabPanel>
                <TabPanel>
                    <TabPeterburg />
                </TabPanel>
                <TabPanel>
                    <Form />
                </TabPanel>
        </div>
    </Tabs>
)

export default TabsBlock