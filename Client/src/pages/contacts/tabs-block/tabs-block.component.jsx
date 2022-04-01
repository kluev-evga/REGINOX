import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useMediaQuery } from 'react-responsive';
import TabMoskow from '../tabs-content/tab-moskow.component';
import TabPeterburg from '../tabs-content/tab-peterburg.component';
import Form from '../form/form.component';
import styles from './tabs-block.module.css';


const TabsBlock = () => {
    const isTabletXL = useMediaQuery({ query: '(min-width: 992px)' });

    return (
        <Tabs>
            <TabList>
                <Tab>Москва</Tab>
                <Tab>Санкт-Петербург</Tab>
                {!isTabletXL && <Tab>Обратная связь</Tab>}
                {isTabletXL && <h2 className={styles.title}>Обратная связь</h2>}
            </TabList>

            <div className={styles.container}>
                <div>
                    <TabPanel>
                        <TabMoskow />
                    </TabPanel>
                    <TabPanel>
                        <TabPeterburg />
                    </TabPanel>
                    {!isTabletXL && (
                        <TabPanel>
                            <Form />
                        </TabPanel>
                    )}
                </div>

                {isTabletXL && <Form />}
            </div>
        </Tabs>
    )
}

export default TabsBlock