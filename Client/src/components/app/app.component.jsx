import { useEffect } from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCatalog } from '../../redux/actions';
import { catalogLoading, catalogError } from '../../redux/selectors';
import cn from 'classnames';

import MenuContainer from '../menu-container/menu-container.component';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';

import Home from '../../pages/home/home.component';
import Products from '../../pages/products/products.component';

import WhyUs from '../../pages/why-us/why-us.component';
import Partners from '../../pages/partners/partners.component';
import SertificatesContainer from '../../pages/sertificates/sertificates-container.component';
import ArticlesContainer from '../../pages/articles/articles-container.component';
import InformationContainer from '../../pages/imformation/information.container';
import Catalogs from '../../pages/catalogs/catalogs.component';
import Delivery from '../../pages/delivery/delivery.component';
import Contacts from '../../pages/contacts/contacts.component';

import Policy from '../../pages/policy/policy.component';

import NotFound from '../../pages/not-found/not-found.component';
import Loader from '../../components/loader/loader.coponent';
import Error from '../../components/error/error.component';

import SwiperCore, { Pagination, Navigation, A11y, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss/a11y';

import srollRestoration from '../../hoc/scroll-restoration';

import './app.scss';

SwiperCore.use([Pagination, Navigation, A11y, Autoplay]);

const WhyUsPage = srollRestoration(WhyUs);
const PartnersPage = srollRestoration(Partners);
const SertificatesPage = srollRestoration(SertificatesContainer);
const ArticlesPage = srollRestoration(ArticlesContainer);
const InformationPage = srollRestoration(InformationContainer);
const CatalogsPage = srollRestoration(Catalogs);
const DeliveryPage = srollRestoration(Delivery);
const ContactsPage = srollRestoration(Contacts);
const PolicyPage = srollRestoration(Policy);


function App({ loadCatalog, loading, error }) {
    useEffect(() => { loadCatalog() }, [loadCatalog]);
    const notFound = useRouteMatch('/not-found');
    const isPopUp = useRouteMatch('/sertificates/:slug?');

    if (loading) return <Loader />;
    if (error) return <Error />;

    return (
        <MenuContainer>
            <main id='page-wrap' className={cn({ 'main': notFound })}>
                {!isPopUp?.params.slug && <Header />}

                <Switch>
                    <Redirect exact from='/' to='/home' />
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/products' component={Products} />

                    <Route exact path='/why-us' component={WhyUsPage} />
                    <Route exact path='/partners' component={PartnersPage} />
                    <Route path='/sertificates' component={SertificatesPage} />
                    <Route path='/articles' component={ArticlesPage} />
                    <Route path='/information' component={InformationPage} />
                    <Route exact path='/catalogs' component={CatalogsPage} />
                    <Route exact path='/delivery' component={DeliveryPage} />
                    <Route exact path='/contacts' component={ContactsPage} />

                    <Route exact path='/policy' component={PolicyPage} />

                    <Route exact path='/not-found' component={NotFound} />
                    <Route exact path='/not-found' component={Error} />

                    <Redirect to='/not-found' />
                </Switch>

                {!isPopUp?.params.slug && <Footer />}
            </main>
        </MenuContainer >
    );
};
// Popular Products component

const mapStateToProps = (state) => ({
    loading: catalogLoading(state),
    error: catalogError(state)
});

const mapDispatchToProps = { loadCatalog };

export default connect(mapStateToProps, mapDispatchToProps)(App);