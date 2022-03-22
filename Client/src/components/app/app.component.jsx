import { Switch, Route, Redirect } from 'react-router-dom';

import MenuContainer from '../menu-container/menu-container.component';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';

import Home from '../../pages/home/home.component';
import Products from '../../pages/products/products.component';

import WhyUs from '../../pages/why-us/why-us.component';
import Partners from '../../pages/partners/partners.component';
import Sertificates from '../../pages/sertificates/sertificates.component';
import Articles from '../../pages/articles/articles.component';
import Article from '../../pages/article/article.component';
import Information from '../../pages/information/information.component';
import ForBuyers from '../../pages/for-buyers/for-buyers.component';
import ForPartners from '../../pages/for-partners/for-partners.component';
import Catalogs from '../../pages/catalogs/catalogs.component';
import Delivery from '../../pages/delivery/delivery.component';
import Contacts from '../../pages/contacts/contacts.component';

import Policy from '../../pages/policy/policy.component';

import NotFound from '../../pages/not-found/not-found.component';
import Error from '../../pages/error/error.component';

import SwiperCore, { Pagination, Navigation, A11y, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss/a11y';

import './app.scss';


SwiperCore.use([Pagination, Navigation, A11y, Autoplay]);

// import srollRestoration from '../../hoc/scroll-restoration'; ?????

const App = () => (
    <MenuContainer>
        <main id='page-wrap'>
            <Header />

            <Switch>
                <Redirect exact from='/' to='/home' />
                <Redirect exact from='/products' to='/home' />

                <Route exact path='/home' component={Home} />

                <Route exact path='/products/:product/:category?' component={Products} />

                <Route exact path='/why-us' component={WhyUs} />
                <Route exact path='/partners' component={Partners} />
                <Route path='/sertificates' component={Sertificates} />
                <Route exact path='/articles' component={Articles} />
                <Route exact path='/articles/:article' component={Article} />
                <Route exact path='/information' component={Information} />
                <Route exact path='/information/buyers' component={ForBuyers} />
                <Route exact path='/information/partners' component={ForPartners} />
                <Route exact path='/catalogs' component={Catalogs} />
                <Route exact path='/delivery' component={Delivery} />
                <Route exact path='/contacts' component={Contacts} />

                <Route exact path='/policy' component={Policy} />
                <Route exact path='/error' component={Error} />
                <Route component={NotFound} />
            </Switch>

            <Footer />
        </main>
    </MenuContainer>
);

export default App;