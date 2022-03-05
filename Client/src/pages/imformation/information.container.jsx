import { Switch, Route, Redirect } from 'react-router-dom';
import Information from './information.component';
import Buyers from './buyers/buyers.component';
import Partners from './partners/partners.component';


const InformationContainer = () => (
    <Switch>
        <Route exact path='/information' component={Information} />
        <Route exact path='/information/buyers' component={Buyers} />
        <Route exact path='/information/partners' component={Partners} />
        <Redirect to='/not-found' />
    </Switch>
);

export default InformationContainer;