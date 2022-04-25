import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { TabMoskow, TabPeterburg } from './tabs.component'
import FormContact from '../../../components/form-contact/form-contact.component'


export function ViewLarge() {
   return (
      <Tabs focusTabOnClick={false}>
         <TabList>
            <Tab>Москва</Tab>
            <Tab>Санкт-Петербург</Tab>
            <Tab>Обратная связь</Tab>
         </TabList>
         <div className='contacts__container-view-large'>
            <TabPanel forceRender={true}>
               <TabMoskow />
            </TabPanel>
            <TabPanel forceRender={true}>
               <TabPeterburg />
            </TabPanel>
            <TabPanel forceRender={true}>
               <FormContact formType='contacts' />
            </TabPanel>
         </div>
      </Tabs>
   )
}

export function ViewPhone() {
   return (
      <div className='contacts__phone-container'>
         <div>
            <h2 className='contacts__phone-container-title'>Москва</h2>
            <TabMoskow />
         </div>
         <div>
            <h2 className='contacts__phone-container-title'>Санкт-Петербург</h2>
            <TabPeterburg />
         </div>
         <div>
            <h2 className='contacts__phone-container-title'>Обратная связь</h2>
            <FormContact formType='contacts' />
         </div>
      </div>
   )
}