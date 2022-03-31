import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Specifications from '../specifications/specifications.component';
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius unde illo commodi.
            </div>
        </TabPanel>
        <TabPanel>
            <div className={styles.tab_content}>
                Asperiores veritatis dolor distinctio nesciunt, ducimus, tempore aut repudiandae sed voluptates saepe adipisci et quod labore tenetur natus.
            </div>
        </TabPanel>
    </Tabs>
)

export default TabsContainer