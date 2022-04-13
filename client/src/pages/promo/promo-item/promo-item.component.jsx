import Slider from '../../../components/slider/slider.component'
import styles from './promo-item.module.css'

const PromoItem = ({ title, text, items }) => (
   <div className={styles.wrapper}>
      <h2 className='title-1'>{title}</h2>
      <p className={styles.text}>{text}</p>
      <div className={styles.container}>
         <Slider items={items} />
      </div>
   </div>
)

export default PromoItem
