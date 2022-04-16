import { useMediaQuery } from 'react-responsive'
import ViewPhoneSlider from './view-phone-slider.component'


const ViewPhone = ({ data, specs }) => {
   const isPhoneXL = useMediaQuery({ query: '(min-width: 300px)' })

   return (
      <div className='compare__view-phone'>
         <ul className='compare__view-phone-specs'>
            <li><p>Цена</p></li>
            {specs.map((item, i) =>
               <li key={i}>
                  <p>{item}</p>
               </li>
            )}
         </ul>

         <div className='compare__view-phone-slider-left'>
            <ViewPhoneSlider data={data} specs={specs} />
         </div>

         {isPhoneXL &&
            <div className='compare__view-phone-slider-right'>
               <ViewPhoneSlider data={data} specs={specs} />
            </div>
         }
      </div>
   )
}

export default ViewPhone