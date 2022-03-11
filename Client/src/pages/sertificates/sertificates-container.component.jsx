import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadSertificates, setSertificatesScroll, setSertificatesSlide } from '../../redux/actions';
import { sertificatesError } from '../../redux/selectors';

import SertificatesPage from './sertificates-page/sertificates-page.component';
import SertificatePopUp from './sertificate-pop-up/sertificate-pop-up.component';


const SertificatesContainer = ({ loadSertificates, setSertificatesScroll, setSertificatesSlide, error }) => {
    useEffect(() => {
        loadSertificates()
        return () => {
            setSertificatesScroll(0);
            setSertificatesSlide(0);
        };
    }, [loadSertificates, setSertificatesScroll, setSertificatesSlide]);

    return (
        <Switch>
            <Route exact path='/sertificates' component={SertificatesPage} />
            <Route exact path='/sertificates/:sertificateId' component={SertificatePopUp} />
            <Route path='/sertificates/:sertificateId'>
                {({ match }) => <Redirect to={`/sertificates/${match.params.sertificateId}`} />}
            </Route>
        </Switch>
    );
};

const mapStateToProps = (state) => ({
    error: sertificatesError(state),
});

const mapDispatchToProps = ({ loadSertificates, setSertificatesScroll, setSertificatesSlide });

export default connect(mapStateToProps, mapDispatchToProps)(SertificatesContainer);