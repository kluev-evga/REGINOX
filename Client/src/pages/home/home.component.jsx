import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadHome } from '../../redux/actions';
import { homeLoading, homeError } from '../../redux/selectors';

import MainSlider from "../../components/main-slider/main-slider.compenent";
import AdressBar from "../../components/address-bar/address-bar.component";
import Catalog from "../../components/catalog/catalog.component";
// import PopularProducts from "../../components/popular-products/popular-products.components";
import HomeAbout from '../../components/home-about/home-about.component';

import { ReactComponent as Spinner } from '../../assets/svg/spinner.svg';
import styles from './home.module.css'


const Home = ({ loadHome, loading, error }) => {
    useEffect(() => { loadHome() }, [loadHome]);

    if (loading) return <div className={styles.spinner}><Spinner /></div>;

    return (
        <div>
            <MainSlider />
            <AdressBar />
            <Catalog />
            <div>Popular products here</div>
            <HomeAbout />
        </div>
    );
};
// <PopularProducts />

const mapStateToProps = (state) => ({
    loading: homeLoading(state),
    error: homeError(state)
});

const mapDispatchToProps = ({
    loadHome
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);