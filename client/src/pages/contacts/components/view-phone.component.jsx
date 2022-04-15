import TabMoskow from './tab-moskow.component'
import TabPeterburg from './tab-peterburg.component'
import Form from './form.component'


const ViewPhone = () => (
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
         <Form />
      </div>
   </div>
)

export default ViewPhone