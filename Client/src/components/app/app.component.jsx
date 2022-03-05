import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCatalog } from '../../redux/actions';
import { catalogLoading, catalogError } from '../../redux/selectors';

import MenuContainer from '../menu-container/menu-container.component';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';

import Home from '../../pages/home/home.component';
import Delivery from '../../pages/delivery/delivery.component';
import Contacts from '../../pages/contacts/contacts.component';
import Catalogs from '../../pages/catalogs/catalogs.component';
import InformationContainer from '../../pages/imformation/information.container';
import NotFound from '../../pages/not-found/not-found.component';
import Products from '../../pages/products/products.component';
import Policy from '../../pages/policy/policy.component';
import Articles from '../../pages/articles/articles.component';
import Article from '../../pages/article/article.component';
import WhyUs from '../../pages/why-us/why-us.component';
import Sertificates from '../../pages/sertificates/sertificates.component';
import Partners from '../../pages/partners/partners.component';

import Loader from '../../components/loader/loader.coponent';
import Error from '../../components/error/error.component';

import SwiperCore, { Pagination, Navigation, A11y, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss/a11y';

import './app.scss';


SwiperCore.use([Pagination, Navigation, A11y, Autoplay]);


function App({ loadCatalog, loading, error }) {
    useEffect(() => { loadCatalog() }, [loadCatalog]);

    if (loading) return <Loader />
    if (error) return <Error />

    return (
        <MenuContainer>
            <Header />

            <Switch>
                <Redirect exact from='/' to='/home' />
                <Route exact path='/home' component={Home} />
                <Route exact path='/products' component={Products} />

                <Route path='/why-us' component={WhyUs} />


                <Route path='/articles' component={Articles} />
                <Route path='/information' component={InformationContainer} />
                <Route exact path='/catalogs' component={Catalogs} />
                <Route exact path='/delivery' component={Delivery} />
                <Route exact path='/contacts' component={Contacts} />

                <Route exact path='/policy' component={Policy} />
                <Route exact path='/sertificates' component={Sertificates} />
                <Route exact path='/partners' component={Partners} />

                <Route exact path='/not-found' component={NotFound} />

                <Redirect to='/not-found' />
            </Switch>

            <Footer />
        </MenuContainer>
    );
};

// <Route path='/article' component={Article} />


// <Route exact path='/partners' component={Partners} />
// <Route exact path='/sertificates' component={Sertificates} />

const mapStateToProps = (state) => ({
    loading: catalogLoading(state),
    error: catalogError(state)
});

const mapDispatchToProps = { loadCatalog };

export default connect(mapStateToProps, mapDispatchToProps)(App);