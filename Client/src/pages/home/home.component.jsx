import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadHome } from '../../redux/actions';
import { homeLoading, homeError } from '../../redux/selectors';
import { Redirect } from 'react-router-dom';

import MainSlider from "../../components/main-slider/main-slider.compenent";
import AdressBar from "../../components/address-bar/address-bar.component";
import Catalog from "../../components/catalog/catalog.component";
import PopularProducts from "../../components/popular-products/popular-products.components";
import HomeAbout from '../../components/home-about/home-about.component';

import { ReactComponent as Spinner } from '../../assets/svg/spinner-loading.svg';
import styles from './home.module.css';


const Home = ({ loadHome, loading, error }) => {
    useEffect(() => { loadHome() }, [loadHome]);

    if (loading) return <div className={styles.spinner}><Spinner width='200' /></div>;
    if (error) <Redirect to='/error' />

    return (
        <div>
            <MainSlider />
            <AdressBar />
            <Catalog />
            <PopularProducts />
            <HomeAbout />
        </div>
    );
};

const mapStateToProps = (state) => ({
    loading: homeLoading(state),
    error: homeError(state)
});

const mapDispatchToProps = ({
    loadHome
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);