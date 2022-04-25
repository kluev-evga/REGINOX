import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Specifications from '../specifications/specifications.component'
import FormContact from '../../../components/form-contact/form-contact.component'
import FeedbackStatsPanel from '../feedback/feedback-stats-panel.component'
import FeedbackItemsContainer from '../feedback/feedback-items-container.component'


export function TabsContainerLargeView({ specs }) {
   return (
      <Tabs className='product-tabs' focusTabOnClick={false}>
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
               <div className='product-feedback'>
                  <FeedbackStatsPanel />
                  <FeedbackItemsContainer />
               </div>
            </div>
         </TabPanel>
         <TabPanel>
            <div className='product-tabs__content'>
               <FormContact formType='question' />
            </div>
         </TabPanel>
      </Tabs>
   )
}

export function TabsContainerPhoneView({ specs }) {
   return (
      <div className='product-tabs'>
         <h2 className='product-tabs__title'>Характеристики</h2>
         <Specifications specs={specs} />
         <h2 className='product-tabs__title'>Отзывы</h2>
         <FeedbackStatsPanel />
         <FeedbackItemsContainer />
         <h2 className='product-tabs__title'>Задать вопрос</h2>
         <FormContact formType='question' />
      </div>
   )
}