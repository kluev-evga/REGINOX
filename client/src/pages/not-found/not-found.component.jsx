import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAppError, unsetAppError } from '../../redux/actions'
import Logo from '../../components/logo/logo.component'
import FooterBar from '../../components/footer-bar/footer-bar.component'
import { ReactComponent as Crown } from '../../assets/svg/crown.svg'
import './not-found.scss'


const NotFound = () => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(setAppError())
      return () => { dispatch(unsetAppError()) }
   }, [])//eslint-disable-line

   return (
      <div className='not-found'>

         <Link to='/' className='not-found__logo' replace>
            <Logo />
         </Link>

         <div className='not-found__background'>
            <div className='container'>
               <div className='not-found__container'>
                  <div>
                     <h1>Страница <br /> не существует</h1>
                     <span>ошибка 404</span>
                  </div>
                  <Crown/>
               </div>
            </div>
         </div>

         <div className='article container'>
            <p>
               Запрашиваемая вами страница была удалена либо никогда не существовала. Извините за неудобства.
            </p>
            <Link to='/' className='not-found__link' replace>
               Вернуться на главную
            </Link>
         </div>

         <FooterBar/>
      </div>
   )
}

export default NotFound