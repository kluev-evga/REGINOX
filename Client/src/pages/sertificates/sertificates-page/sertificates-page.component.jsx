import { useEffect } from 'react';
import { connect } from 'react-redux';
import { sertificatesScroll } from '../../../redux/selectors';
import { Link } from 'react-router-dom';
import Brands from '../../../components/brands/brands.component';
import SertificatesSlider from '../sertificates-slider/sertificates-slider.component';


const SertificatesPage = ({ scroll }) => {
    useEffect(() => { if (scroll) window.scrollTo(0, scroll) }, [scroll]);

    return (
        <div>
            <div className="container">
                <div className="breadcrumbs">
                    <Link to='/home'>Главная</Link> / Сертификаты и гарантии
                </div>
                <h1 className='title'>Гарантия качества продукции</h1>
                <div className="article">
                    <h2 className="title-1">Сертификаты</h2>
                    <p>Данные сертификаты подверждают качество и легальность поставляемой продукции.</p>
                </div>
            </div>

            <SertificatesSlider />

            <div className="container">
                <div className="article">
                    <h2 className="title-1">Гарантия</h2>
                    <p>Наши партнеры-производители из Европы имеют крупные производства, используют только качественное и экологически чистое сырье, гарантируют качество продукции и поддерживают гарантийные обязательства.</p>
                </div>

                <Brands />

            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    scroll: sertificatesScroll(state)
});

export default connect(mapStateToProps)(SertificatesPage);