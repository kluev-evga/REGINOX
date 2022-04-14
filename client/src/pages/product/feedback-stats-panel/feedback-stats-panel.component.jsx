import { useMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { productItem } from '../../../redux/selectors'
import { ReactComponent as StarIcon } from '../../../assets/svg/star.svg'
import styles from './feedback-stats-panel.module.css'

const Stars = ({ r }) => (
   <div className={styles.stars}>
      {[...Array(5)].map((_, i) => <StarIcon key={i} className={r > i + 0.5 ? '' : styles.clear} /> )}
   </div>
)

const fields = ['Цена', 'Качество', 'Внещний вид']

const Bars = ({ ratings }) => (
   <div className={styles.bars}>
      {fields.map((item, i) => (
         <span key={i}>
            {item}
            <div>
               <span style={{ width: ratings[i] + '%' }}></span>
            </div>
         </span>
      ))}
   </div>
)

const FeedbackStatsPanel = () => {
   const match = useMatch()
   const { r, ratings, reviewsCount } = useSelector(state =>
      productItem(state)(match.params.productUrl)
   )

   return (
      <div>
         <div className={styles.average}>
            {!!reviewsCount && (
               <div className={styles.total}>{r.toFixed(1)}</div>
            )}
            <Stars r={r} />
            Всего {reviewsCount} оценок
         </div>
         {!!reviewsCount && <Bars ratings={ratings} />}
      </div>
   )
}

export default FeedbackStatsPanel
