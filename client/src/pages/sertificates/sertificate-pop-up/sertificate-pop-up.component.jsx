import { useState, useCallback, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { sertificates } from '../../../redux/selectors'
import { setAppIsPopUp } from '../../../redux/actions'
import cn from 'classnames'
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg'
import styles from './sertificate-pop-up.module.css'

const SertificatePopUp = ({ setAppIsPopUp, sertificates, match, history }) => {
   const [zoom, setZoom] = useState(false)
   const toggleZoom = useCallback(() => setZoom(!zoom), [zoom])
   useEffect(() => {
      setAppIsPopUp(true)
      return () => setAppIsPopUp(false)
   }) //eslint-disable-line

   const sertificate = sertificates[match.params.sertificateId]
   if (!sertificate) return <Redirect to='/sertificates/not-found' />

   const { img, alt, width, height } = sertificate

   return (
      <div className={cn(styles.wrapper, { [styles.zoom]: zoom })}>
         <div className={styles.container}>
            <button onClick={() => history.push('/sertificates')}>
               <CrossIcon />
            </button>
            <img
               src={process.env.PUBLIC_URL + '/assets/sertificates/' + img}
               alt={alt}
               onClick={toggleZoom}
               width={width}
               height={height}
            />
         </div>
      </div>
   )
}

const mapStateToProps = state => ({ sertificates: sertificates(state) })

export default connect(mapStateToProps, { setAppIsPopUp })(SertificatePopUp)
