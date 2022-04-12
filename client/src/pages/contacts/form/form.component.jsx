import styles from './form.module.css';


const Form = () => (
    <div className={styles.form}>
        <input type="text" placeholder='Имя' />
        <input type="text" placeholder='E-mail' />
        <textarea type="text" placeholder='Ваше сообщение...'></textarea>
        <div>
            <button type='button' className='button-form'>Отправить</button>
            <p>Нажимая кнопку отправить вы даете согласие на обработку пресональных данных</p>
        </div>
    </div>
)

export default Form