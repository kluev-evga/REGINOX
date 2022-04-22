import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAppError, unsetAppError } from '../../redux/actions'
import { ReactComponent as Crown } from '../../assets/svg/crown.svg'
import Logo from '../../components/logo/logo.component'
import FooterBar from '../../components/footer-bar/footer-bar.component'


const Error = () => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(setAppError())
      return () => { dispatch(unsetAppError()) }
   }, [])//eslint-disable-line

   return (
      <div className='error'>

         <Link to='/' className='error__logo' replace>
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
            <Link to='/' className='error__link' replace>Вернуться на главную</Link>
         </div>

         <FooterBar/>
      </div>
   )
}

export default Error