import { Link } from 'react-router-dom'
import { ReactComponent as Crown } from '../../assets/svg/crown.svg'
import Logo from '../../components/logo/logo.component'


const Error = () => (
   <div className='error'>

      <Link to='/' className='error__logo'>
         <Logo />
      </Link>

      <div className='error__background'>
         <div className='container'>
            <div className='error__container'>
               <h1 className='error__title'>{'Ошибка (:'}</h1>
               <Crown />
            </div>
         </div>
      </div>

      <div className='article container'>
         <p className='error__paragraph'>Произошла ошибка. Возможно нет подключения с интернетом. Извините за неудобства.</p>
         <Link to='/' className='error__link'>Вернуться на главную</Link>
      </div>

   </div>
)

export default Error