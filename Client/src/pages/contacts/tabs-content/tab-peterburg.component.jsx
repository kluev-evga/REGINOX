import styles from './tab.module.css';


const TabPeterburg = () => (
    <div className={styles.contacts}>
        <div>
            <b>Телефон</b>
            <a href="tel:84953341298">+7 (495) 334-12-98</a>
            <span>многоканальный</span>
            <a href="tel:84953453612">+ 7 (495) 345-36-12</a>
            <span>офис</span>
        </div>
        <div>
            <b>Электронная почта</b>
            <a href="mailto:piter.info@rrholding.ru">piter.info@rrholding.ru</a>
            <span>Все письма внимательно прочитываются!</span>
        </div>
        <div>
            <b>Время работы</b>
            <p>Пн-Пт: 9.00-20.00</p>
        </div>
        <div>
            <b>Адрес</b>
            <p>Центр "MAKCТРОЙ"</p>
            <span>
                Пн-Пт: с 9.00 до 20.00
                <br />
                Сб-Вс: с 9.00 до 20.30
            </span>
        </div>
    </div>
)

export default TabPeterburg;