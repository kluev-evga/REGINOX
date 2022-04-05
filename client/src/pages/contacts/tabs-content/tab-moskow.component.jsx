import styles from './tab.module.css';


const TabMoskow = () => (
    <div className={styles.contacts}>
        <div>
            <b>Телефон</b>
            <a href="tel:84952298559">+7 (495) 229-85-59</a>
            <span>многоканальный</span>
            <a href="tel:84951165225">+ 7 (495) 116-52-25</a>
            <span>офис</span>
        </div>
        <div>
            <b>Электронная почта</b>
            <a href="mailto:moskow.info@rrholding.ru">moskow.info@rrholding.ru</a>
            <span>Все письма внимательно прочитываются!</span>
        </div>
        <div>
            <b>Время работы</b>
            <p>Пн-Пт: 10.00-19.00</p>
        </div>
        <div>
            <b>Адрес</b>
            <p>Центр дизайна и интерьера "ЭКСПОСТРОЙ"</p>
            <span>
                Пн-Пт: с 10.00 до 20.00
                <br />
                Сб-Вс: с 10.00 до 19.00
            </span>
        </div>
    </div>
)

export default TabMoskow;