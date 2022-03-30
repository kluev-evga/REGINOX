import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './tabs.module.css';


const TabsContainer = ({ specs }) => (
    <Tabs className={styles.container}>
        <TabList >
            <Tab>Характеристики</Tab>
            <Tab>Отзывы</Tab>
            <Tab>Задать вопрос</Tab>
        </TabList>

        <TabPanel>
            {specs.map(({ dt, dd }, i) => (
                <dl key={i} className={styles.specs_item}>
                    <dt>{dt}</dt>
                    <dd>{dd}</dd>
                </dl>
            ))}
        </TabPanel>
        <TabPanel>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius unde illo commodi.
        </TabPanel>
        <TabPanel>
            Asperiores veritatis dolor distinctio nesciunt, ducimus, tempore aut repudiandae sed voluptates saepe adipisci et quod labore tenetur natus.
        </TabPanel>
    </Tabs>
)

export default TabsContainer