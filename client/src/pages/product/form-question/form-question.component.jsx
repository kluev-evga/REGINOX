import styles from './form-question.module.css';


const FormQuestion = () => (
    <form className={styles.form}>
        <input type="text" placeholder='ФИО' required autoComplete='off' />
        <input type="email" placeholder='E-mail' required autoComplete='off' />
        <div className={styles.textarea}>
            <textarea type="text" placeholder='Ваш вопрос' required></textarea>
        </div>
        <div className={styles.button}>
            <button type='submit' className='button-form'>Отправить</button>
        </div>
        <p>Нажимая кнопку отправить вы даете согалсие на обработку пресональных данных</p>
    </form>
)

export default FormQuestion