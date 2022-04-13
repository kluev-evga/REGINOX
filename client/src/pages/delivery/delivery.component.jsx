import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import withMenuLoader from '../../hoc/with-menu-loader'
import styles from './delivery.module.css'

const Delivery = () => (
   <div>
      <div className='container'>
         <div className='breadcrumbs'>
            <Link to='/home'>Главная</Link> / Доставка и оплата
         </div>
         <h1 className='title'>Доставка и оплата</h1>

         <Tabs>
            <div className={styles.tab_list}>
               <TabList>
                  <Tab>Москва</Tab>
                  <Tab>Вся Россия</Tab>
               </TabList>
            </div>

            <TabPanel className='article'>
               <b>
                  Доставка товара покупателям осуществляется в течение 1-3-х
                  рабочих дней после оформления и согласования заказа с 11 до 19
                  часов с понедельника по пятницу.
               </b>
               <p>
                  Если при получении товара внешний вид, количество, качество и
                  иные характеристики устраивают покупателя, то он расписывается
                  на товарном чеке (товарной накладной), передает денежные
                  средства водителю-экспедитору и получает товар. Оплата покупки
                  осуществляется наличными средствами в рублях.
               </p>
               <p>
                  В случае безналичной оплаты, доставка осуществляется после
                  100% оплаты товара согласно выставленному счету. Счет
                  действителен в течение 3-х банковских дней.
               </p>
               <h2 className='title-1'>Тарифы на услуги по доставке</h2>
               <ul>
                  <li>
                     при заказе на сумму свыше 13 000 рублей доставка по Москве
                     в пределах МКАД — <span>бесплатно</span>;
                  </li>
                  <li>
                     при заказе на сумму до 13 000 рублей доставка по Москве в
                     пределах МКАД — <span>500 рублей</span>;
                  </li>
                  <li>
                     за пределы МКАД до 10 км — <span>500 рублей</span>;
                  </li>
                  <li>
                     за пределы МКАД далее 10 км — <span>500 руб.</span> (до 10
                     км) + <span>50 рублей</span> за каждый последующий
                     километр;
                  </li>
                  <li>
                     доставка по Московской области (свыше 50 км от МКАД)
                     транспортными компаниями <span>за счет покупателя</span>.
                  </li>
               </ul>
            </TabPanel>
            <TabPanel className='article'>
               <b>
                  Mы предлагаем Вам воспользоваться услугами транспортных
                  компаний:
               </b>
               <ul>
                  <li>
                     Деловые линии —{' '}
                     <a
                        href='https://www.dellin.ru'
                        target='_blank'
                        rel='noreferrer'>
                        www.dellin.ru
                     </a>
                  </li>
                  <li>
                     ПЭК —{' '}
                     <a
                        href='https://www.pecom.ru'
                        target='_blank'
                        rel='noreferrer'>
                        www.pecom.ru
                     </a>
                  </li>
                  <li>
                     Центральная транспортная служба —{' '}
                     <a
                        href='https://www.cts-group.ru'
                        target='_blank'
                        rel='noreferrer'>
                        www.cts-group.ru
                     </a>
                  </li>
                  <li>
                     Желдорэкспедиция —{' '}
                     <a
                        href='https://www.jde.ru'
                        target='_blank'
                        rel='noreferrer'>
                        www.jde.ru
                     </a>
                  </li>
                  <li>
                     Также, Вы можете выбрать другую транспортную компанию,
                     имеющую филиал в Москве (cтоимость доставки заказов в
                     транспортную компанию — <span>500 руб.</span>).
                  </li>
               </ul>
               <p>
                  Наша компания перед отправкой проверяет комплектацию и внешний
                  вид товара, хрупкий груз (например, мойки из композитных
                  материалов) мы отгружаем только в жёсткой обрешётке. При
                  получении товара в транспортной компании вы сами проверяете
                  качество товара и целостность упаковки.
               </p>
               <p>
                  При отказе от доставленного заказа оплачивается стоимость
                  доставки.
               </p>
               <p>
                  Подробности уточняйте у менеджеров по телефону в Москве (495)
                  229-85-59.
               </p>
            </TabPanel>
         </Tabs>
      </div>
      <iframe
         className={styles.iframe}
         src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26127.072906470396!2d37.6563681634861!3d55.783043858561975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5357a6e6be305%3A0xa2457411e2ccaddb!2sReginox!5e0!3m2!1sen!2sru!4v1645674166765!5m2!1sen!2sru'
         title='карта проезда'
         width='100%'
         height='460'
         style={{ border: 'none' }}
         allowFullScreen=''
         loading='lazy'></iframe>
   </div>
)

export default withMenuLoader(Delivery)
