import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadHome, setAppIsHomePage } from '../../redux/actions';
import { homeLoaded, homeError } from '../../redux/selectors';

import Loader from '../../components/loader/loader.coponent';
import MainSlider from "./main-slider/main-slider.compenent";
import AdressBar from "./address-bar/address-bar.component";
import Catalog from "./catalog/catalog.component";
import PopularProducts from "./popular-products/popular-products.components";
import About from './about/about.component';


const Home = ({ loadHome, loaded, error, setAppIsHomePage }) => {
    useEffect(() => { loadHome() }, []);// eslint-disable-line
    useEffect(() => {
        setAppIsHomePage(true);
        return () => setAppIsHomePage(false);
    }, []);//eslint-disable-line

    if (!loaded) return <Loader />;
    if (error) <Redirect to='/error' />

    return (
        <div>
            <MainSlider />
            <AdressBar />
            <Catalog />
            <PopularProducts />
            <About />
        </div>
    );
};

const mapStateToProps = (state) => ({
    loaded: homeLoaded(state),
    error: homeError(state)
});

export default connect(mapStateToProps, { loadHome, setAppIsHomePage })(Home);