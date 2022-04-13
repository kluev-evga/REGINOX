import { connect } from 'react-redux'
import { menuLoaded, appStatus, appIsPopUp } from '../../redux/selectors'
import FooterLinks from './footer-links/footer-links.component'
import FooterBar from './footer-bar/footer-bar.component'

const Footer = ({ loaded, status, isPopUp }) => {
   if (!loaded || isPopUp) return null

   return (
      <footer className='footer'>
         {!status && <FooterLinks />}
         <FooterBar />
      </footer>
   )
}

const mapStateToProps = state => ({
   loaded: menuLoaded(state),
   status: appStatus(state),
   isPopUp: appIsPopUp(state),
})

export default connect(mapStateToProps)(Footer)
