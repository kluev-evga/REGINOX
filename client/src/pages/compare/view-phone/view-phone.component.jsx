import { useMediaQuery } from 'react-responsive'
import ViewPhoneSlider from '../view-phone-slider/view-phone-slider.component'
import styles from './view-phone.module.css'

const ViewPhone = ({ data, specs }) => {
   const isPhoneXL = useMediaQuery({ query: '(min-width: 300px)' })

   return (
      <div className={styles.container}>
         <ul className={styles.specs}>
            {specs.map((item, i) => (
               <li key={i}>
                  <p>{item}</p>
               </li>
            ))}
         </ul>

         <div className={styles.slider_left}>
            <ViewPhoneSlider data={data} specs={specs} />
         </div>

         {isPhoneXL && (
            <div className={styles.slider_right}>
               <ViewPhoneSlider data={data} specs={specs} />
            </div>
         )}
      </div>
   )
}

export default ViewPhone
