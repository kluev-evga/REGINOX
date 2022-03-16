import { Switch, Route, Redirect } from 'react-router-dom';
import Information from './information.component';
import Buyers from './buyers/buyers.component';
import Partners from './partners/partners.component';
import scrollRestoration from '../../hoc/scroll-restoration';


const BuyersPage = scrollRestoration(Buyers, true);
const PartnersPage = scrollRestoration(Partners, true);

const InformationContainer = () => (
    <Switch>
        <Route exact path='/information' component={Information} />
        <Route exact path='/information/buyers' component={BuyersPage} />
        <Route exact path='/information/partners' component={PartnersPage} />
        <Redirect to='/not-found' />
    </Switch>
);

export default InformationContainer;