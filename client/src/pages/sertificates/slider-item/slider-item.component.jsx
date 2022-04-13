import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { sertificatesItem } from '../../../redux/selectors'
import { setSertificatesScroll } from '../../../redux/actions'
import { ReactComponent as ZoomIcon } from '../../../assets/svg/zoom.svg'

const SliderItem = ({ sertificate, setSertificatesScroll }) => {
   const { id, name, img, alt } = sertificate

   return (
      <Link
         to={`/sertificates/${id}`}
         onClick={() => setSertificatesScroll(window.scrollY)}>
         <img
            src={process.env.PUBLIC_URL + '/assets/sertificates/preview/' + img}
            alt={alt}
            width={360}
            height={540}
         />
         <p>{name}</p>
         <ZoomIcon />
      </Link>
   )
}

const mapStateToProps = (state, props) => ({
   sertificate: sertificatesItem(state, props),
})

export default connect(mapStateToProps, { setSertificatesScroll })(SliderItem)
