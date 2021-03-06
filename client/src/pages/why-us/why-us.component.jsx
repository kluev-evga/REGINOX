import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import withMenuLoader from '../../hoc/with-menu-loader'
import { ReactComponent as ValuableIcon } from '../../assets/svg/valuable.svg'
import { ReactComponent as CasualIcon } from '../../assets/svg/casual.svg'
import { ReactComponent as ProfessionalyIcon } from '../../assets/svg/professionaly.svg'
import './why-us.scss'


const WhyUs = () => {
   const ref = useRef()
   useEffect(() => { ref.current.scrollIntoView({behavior: "smooth", block: "start"})}, [])

   return (
      <div className='why-us' ref={ref}>
         <div className='container'>
            <div className='breadcrumbs'><Link to='/'>Главная</Link> / Почему мы</div>
   
            <h1 className='title'>Почему мы</h1>
   
            <div className='article'>
               <ul>
                  <li>
                     наличие на складе Москвы и Санкт-Петербурга, а также возможность производства под индивидуальный заказ;
                  </li>
                  <li>
                     различный ценовой диапазон, позволяющий осуществлять продажи и реализовать проекты с каждым клиентом (эконом, бизнес и премиум);
                  </li>
                  <li>
                     широкий ассортимент, различные стилистические направления сантехники (от классики до хай-тек), инновационные тенденции;
                  </li>
                  <li>
                     исключительное качество, соответствие всем международным и российским стандартам и требованиям;
                  </li>
                  <li>
                     работаем с индивидуальными проектами, проектировщиками и дизайнерами, застройщиками;
                  </li>
                  <li>
                     профессиональный подход, надежное партнерство.
                  </li>
               </ul>
            </div>
         </div>
   
         <div className='why-us__cards'>
            <div className='why-us__cards-container container'>
               <div className='why-us__cards-item'>
                  <ValuableIcon />
                  <div>
                     <b>Выгодно</b>
                     <p>Гибкие цены<br />Все в наличии<br />Гаранития производителя<br /></p>
                  </div>
               </div>
               <div className='why-us__cards-item'>
                  <CasualIcon />
                  <div>
                     <b>Удобно </b>
                     <p>Бесплатная доставка<br />Доставка по России<br />Самовывоз<br /></p>
                  </div>
               </div>
               <div  className='why-us__cards-item'>
                  <ProfessionalyIcon />
                  <div>
                     <b>Профессионально</b>
                     <p>Консультация специалиста<br />Индивидуальный подход<br />Работаем с 1993 года<br /></p>
                  </div>
               </div>
            </div>
         </div>
   
         <div className='container'>
            <div className='article'>
               <h2 className='title-1'>Наши достижения</h2>
               <p>Наши достижения — это взаимовыгодное сотрудничество с разными участниками рынка.</p>
            </div>
   
            <div className='why-us__accomplishments'>
               <div>
                  <img
                     src={'/assets/accomplishments/accomplishments_1.webp'}
                     width='355'
                     height='238'
                     alt='accomplishments'
                     loading='lazy'
                  />
                  <span>В ассортименте фабрик</span>
                  <p>Гибкое партнерство в кухонном производстве</p>
               </div>
               <div>
                  <img
                     src={'/assets/accomplishments/accomplishments_2.webp'}
                     width='355'
                     height='238'
                     alt='accomplishments'
                     loading='lazy'
                  />
                  <span>В самолетах ИЛ-96-300</span>
                  <p>Сантехника в аэропортах Санкт-Петербурга</p>
               </div>
               <div>
                  <img
                     src={'/assets/accomplishments/accomplishments_3.webp'}
                     width='355'
                     height='238'
                     alt='accomplishments'
                     loading='lazy'
                  />
                  <span>В промышленном производстве</span>
                  <p>Тверской вагоностроительный и Гомельский вагоностроительный заводы и другие</p>
               </div>
               <div>
                  <img
                     src={'/assets/accomplishments/accomplishments_4.webp'}
                     width='355'
                     height='238'
                     alt='accomplishments'
                     loading='lazy'
                  />
                  <span>В судостроении</span>
                  <p>Поставки продукции в судоходные компании</p>
               </div>
               <div>
                  <img
                     src={'/assets/accomplishments/accomplishments_5.webp'}
                     width='355'
                     height='238'
                     alt='accomplishments'
                     loading='lazy'
                  />
                  <span>В проектах строительства</span>
                  <p>Партнер основных застройщиков москвы</p>
               </div>
               <div>
                  <img
                     src={'/assets/accomplishments/accomplishments_6.webp'}
                     width='355'
                     height='238'
                     alt='accomplishments'
                     loading='lazy'
                  />
                  <span>Для оснащения общественных предприятий</span>
                  <p>Сеть ресторанов BurgerKing и Мcdonalds</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default withMenuLoader(WhyUs)