import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import {
   loadSertificates,
   setSertificatesScroll,
   setSertificatesSlide,
} from '../../redux/actions'
import { sertificatesLoaded } from '../../redux/selectors'
import SertificatesPage from './sertificates-page/sertificates-page.component'
import SertificatePopUp from './sertificate-pop-up/sertificate-pop-up.component'
import NotFound from '../not-found/not-found.component'
import Loader from '../../components/loader/loader.coponent'

const Sertificates = ({
   loaded,
   loadSertificates,
   setSertificatesScroll,
   setSertificatesSlide,
}) => {
   useEffect(() => {
      loadSertificates()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return () => {
         setSertificatesScroll(0)
         setSertificatesSlide(0)
      }
   }, []) // eslint-disable-line

   if (!loaded) return <Loader />

   return (
      <Switch>
         <Route exact path='/sertificates' component={SertificatesPage} />
         <Route exact path='/sertificates/not-found' component={NotFound} />
         <Route
            exact
            path='/sertificates/:sertificateId?'
            component={SertificatePopUp}
         />
         <Route component={NotFound} />
      </Switch>
   )
}

const mapStateToProps = state => ({ loaded: sertificatesLoaded(state) })

const mapDispatchToProps = {
   loadSertificates,
   setSertificatesScroll,
   setSertificatesSlide,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sertificates)
