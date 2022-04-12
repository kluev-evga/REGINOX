import { ReactComponent as StarIcon } from '../../../assets/svg/star.svg'
import styles from './form-feedback.module.css';


const SelectStars = ({ title }) => (
    <div className={styles.stars}>
        <p>{title}:</p>
        <div>
            {[...Array(5)].map((_, i) => <button key={i}><StarIcon /></button>)}
        </div>
    </div>
)

const FormFeedback = () => (
    <form className={styles.form}>
        <div>
            <input type="text" placeholder='Имя' autoComplete='off' />
            <input type="email" placeholder='E-mail' autoComplete='off' />
        </div>

        <div>
            {['Цена', 'Качество', 'Внешний вид'].map((item, i) => <SelectStars key={i} title={item} />)}
        </div>

        <div className={styles.textarea}>
            <textarea type="text" placeholder='Коментарий...' required></textarea>
        </div>

        <div>
            <button type='button' className='button-form'>Готово</button>
            <p>Нажимая кнопку отправить вы даете согласие на обработку пресональных данных</p>
        </div>
    </form>
)

export default FormFeedback