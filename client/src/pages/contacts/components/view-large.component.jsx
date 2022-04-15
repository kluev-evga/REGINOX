import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import TabMoskow from './tab-moskow.component'
import TabPeterburg from './tab-peterburg.component'
import Form from './form.component'


const ViewLarge = () => (
   <Tabs>
      <TabList>
         <Tab>Москва</Tab>
         <Tab>Санкт-Петербург</Tab>
         <Tab>Обратная связь</Tab>
      </TabList>

      <div className='contacts__container-view-large'>
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

export default ViewLarge