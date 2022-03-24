import { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCatalogs, loadMenu } from '../../redux/actions';
import { catalogsLoading, catalogsTotal, menuLoaded } from '../../redux/selectors';
import CatalogsCards from './catalogs-cards/catalogs-cards.component';
import Loader from '../../components/loader/loader.coponent';
import styles from './catalogs.module.css';


const Catalogs = ({ loadMenu, loadCatalogs, menuLoaded, loading, total, location, history }) => {
    useEffect(() => { loadMenu() }, []);//eslint-disable-line

    const searchParams = new URLSearchParams(location.search);
    const sizeParam = searchParams.get('size');
    const pageSize = parseInt(sizeParam);
    const isLegit = isFinite(Number(sizeParam));

    useEffect(() => {
        if (!isLegit) {
            const size = pageSize ? pageSize : 3;
            history.replace(`/catalogs?size=${size}`);
            loadCatalogs(size);
        } else {
            let paramsCount = 0;
            searchParams.forEach((_) => paramsCount++);
            if (paramsCount > 1) history.replace(`/catalogs?size=${pageSize}`);
            loadCatalogs(pageSize);
        }
    }, [pageSize, isLegit]);//eslint-disable-line

    useEffect(() => {
        total && pageSize > total && history.replace(`/catalogs?size=${total}`)
    }, [total, pageSize]);//eslint-disable-line

    const handleClick = useCallback(() => {
        const size = (pageSize + 3 < total) ? pageSize + 3 : total;
        history.replace(`/catalogs?size=${size}`);
        loadCatalogs(size);
    }, [pageSize, total]);// eslint-disable-line

    if (!menuLoaded) return <Loader />

    return (
        <div className='container'>
            <div className="breadcrumbs">
                <Link to='/home'>Главная</Link> / Каталоги
            </div>
            <h1 className="title">Каталоги</h1>

            <CatalogsCards pageSize={pageSize} />

            <div className={styles.wrapper}>
                <button
                    style={pageSize === total ? { display: 'none' } : {}}
                    onClick={handleClick}
                    disabled={loading ? true : false}
                    className='button_secondary'>
                    Загрузить еще
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    total: catalogsTotal(state),
    loading: catalogsLoading(state),
    menuLoaded: menuLoaded(state),
});

export default connect(mapStateToProps, { loadCatalogs, loadMenu })(Catalogs);