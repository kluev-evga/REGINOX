import { useState, useCallback } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { sertificatesItemMatched, sertificatesLoaded } from '../../../redux/selectors';
import cn from 'classnames'
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';
import { ReactComponent as Spinner } from '../../../assets/svg/spinner-comets.svg';
import styles from './sertificate-pop-up.module.css';


const SertificatePopUp = ({ sertificate, loaded }) => {
    const [zoom, setZoom] = useState(false);
    const toggleZoom = useCallback(() => setZoom(!zoom), [zoom])

    if (loaded && !sertificate) return <Redirect to='/not-found' />
    if (!loaded) return <div className={styles.wrapper}><Spinner /></div>

    const { img, alt, width, height } = sertificate;

    return (
        <div className={cn(styles.wrapper, { [styles.zoom]: zoom })}>
            <div className={styles.container}>
                <Link to='/sertificates'><CrossIcon /></Link>
                <img
                    src={process.env.PUBLIC_URL + '/assets/sertificates/' + img}
                    alt={alt}
                    onClick={toggleZoom}
                    width={width}
                    height={height}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    sertificate: sertificatesItemMatched(state, props),
    loaded: sertificatesLoaded(state)
})

export default connect(mapStateToProps)(SertificatePopUp);