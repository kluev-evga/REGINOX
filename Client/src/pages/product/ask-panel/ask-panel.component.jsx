import styles from './ask-panel.module.css';


const AskPanel = () => (
    <form className={styles.form}>
        <input type="text" placeholder='ФИО' required autocomplete='off' />
        <input type="email" placeholder='E-mail' required autocomplete='off' />
        <div className={styles.textarea}>
            <textarea type="text" placeholder='Ваш вопрос' required></textarea>
        </div>
        <div className={styles.button}>
            <button type='submit' className='button-form'>Отправить</button>
        </div>
        <p>Нажимая кнопку отправить вы даете согалсие на обработку пресональных данных</p>
    </form>
)

export default AskPanel