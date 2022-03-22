import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import withMenuLoader from '../../hoc/with-menu-loader.js';
import styles from './contacts.module.css';


const Contacts = () => (
    <div>
        <div className="container">
            <div className="breadcrumbs">
                <Link to='/home'>Главная</Link>  / Контакты
            </div>
            <h1 className="title">контакты</h1>

            <div className={styles.row}>
                <div className={styles.tabs}>
                    <Tabs>
                        <div className={styles.tab_list}>
                            <TabList >
                                <Tab>Москва</Tab>
                                <Tab>Санкт-Петербург</Tab>
                            </TabList>
                        </div>

                        <TabPanel className={styles.contacts}>
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
                        </TabPanel>

                        <TabPanel className={styles.contacts}>
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
                        </TabPanel>
                    </Tabs>
                </div>

                <div className={styles.form}>
                    <h2>Обратная связь</h2>
                    <input type="text" placeholder='Имя' />
                    <input type="text" placeholder='E-mail' />
                    <textarea type="text" placeholder='Ваше сообщение'></textarea>
                    <div>
                        <button type='button'>Отправить</button>
                        <span>Нажимая кнопку отправить вы даете согласие на обработку пресональных данных</span>
                    </div>
                </div>
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26127.072906470396!2d37.6563681634861!3d55.783043858561975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5357a6e6be305%3A0xa2457411e2ccaddb!2sReginox!5e0!3m2!1sen!2sru!4v1645674166765!5m2!1sen!2sru" title="карта проезда" width="100%" height="460" style={{ 'border': 'none' }} allowFullScreen="" loading="lazy"></iframe>
    </div>
);

export default withMenuLoader(Contacts);