import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Specifications from '../specifications/specifications.component'
import FeedbackContainer from '../feedback/feedback-container.component'
import FormQuestion from '../form/form-question.component'


const TabsContainerLargeView = ({ specs }) => (
   <Tabs className='product-tabs'>
      <TabList>
         <Tab>Характеристики</Tab>
         <Tab>Отзывы</Tab>
         <Tab>Задать вопрос</Tab>
      </TabList>
      <TabPanel>
         <div className='product-tabs__content'>
            <Specifications specs={specs} />
         </div>
      </TabPanel>
      <TabPanel>
         <div className='product-tabs__content'>
            <FeedbackContainer />
         </div>
      </TabPanel>
      <TabPanel>
         <div className='product-tabs__content'>
            <FormQuestion />
         </div>
      </TabPanel>
   </Tabs>
)

export default TabsContainerLargeView