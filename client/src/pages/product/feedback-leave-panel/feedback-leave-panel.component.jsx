import { ReactComponent as StarIcon } from '../../../assets/svg/star.svg'
import styles from './feedback-leave-panel.module.css';


const SelectStars = ({ title }) => (
    <div className={styles.stars}>
        <p>{title}:</p>
        <div>
            {[...Array(5)].map((_, i) => <button key={i}><StarIcon /></button>)}
        </div>
    </div>
)

const FeedbackLeavePanel = () => (
    <form className={styles.form}>

        <div>
            <input type="text" placeholder='Имя' autocomplete='off' />
            <input type="email" placeholder='E-mail' autocomplete='off' />
        </div>

        <div>
            {['Цена', 'Качество', 'Внешний вид'].map(item => <SelectStars title={item} />)}
        </div>

        <div className={styles.textarea}>
            <textarea type="text" placeholder='Коментарий...' required></textarea>
        </div>




    </form>
)

export default FeedbackLeavePanel


// <div className={styles.ready_container}>
// <button type='button' className={styles.button_ready}>Готово</button>
// <span>Согласен на обработку пресональных данных ?</span>
// <div>
//     <button>ДА, Оправить</button>
//     <button>Отменить</button>
// </div>
// </div>