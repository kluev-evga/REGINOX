import { useSelector } from 'react-redux'
import { menuLoaded, appStatus, appIsPopUp } from '../../redux/selectors'
import FooterLinks from './components/footer-links.component'
import FooterBar from './components/footer-bar.component'

const Footer = () => {
   const isloaded = !useSelector(menuLoaded)
   const status = useSelector(appStatus)
   const isPopUp = useSelector(appIsPopUp)

   if (isloaded || isPopUp) return null

   return (
      <footer className='footer'>
         {!status && <FooterLinks />}
         <FooterBar />
      </footer>
   )
}

export default Footer