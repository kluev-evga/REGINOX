import { useEffect, useCallback } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCatalogs, loadMainMenu } from '../../redux/actions';
import { catalogsLoading, catalogsError, catalogsTotal, menuLoaded, menuError } from '../../redux/selectors';
import CatalogsCards from './catalogs-cards/catalogs-cards.component';
import Loader from '../../components/loader/loader.coponent';
import styles from './catalogs.module.css';


const Catalogs = ({ loadMainMenu, loadCatalogs, menuLoaded, menuError, catalogsError, loading, location, history, total }) => {
    useEffect(() => { loadMainMenu() }, []);//eslint-disable-line

    const searchParams = new URLSearchParams(location.search);
    const sizeParam = searchParams.get('size');
    const pageSize = parseInt(sizeParam);
    const isLegit = isFinite(Number(sizeParam));

    useEffect(() => {
        if (!isLegit) {
            const size = pageSize ? pageSize : 6;
            history.replace(`/catalogs?size=${size}`);
            loadCatalogs(size);
        } else {
            let paramsCount = 0;
            searchParams.forEach((_) => paramsCount++);
            if (paramsCount > 1) history.replace(`/catalogs?size=${pageSize}`);
            loadCatalogs(pageSize);
        }
    }, [history, loadCatalogs, searchParams, pageSize, isLegit]);

    useEffect(() => { total && pageSize > total && history.replace(`/catalogs?size=${total}`) }, [total]);//eslint-disable-line

    const handleClick = useCallback(() => {
        const size = (pageSize + 3 < total) ? pageSize + 3 : total;
        history.replace(`/catalogs?size=${size}`);
        loadCatalogs(size);
    }, [pageSize, total, loadCatalogs, history]);


    if (catalogsError || menuError) <Redirect to='/error' />
    if (!menuLoaded) return <Loader />

    return (
        <div className='container'>
            <div className="breadcrumbs">
                <Link to='/home'>Главная</Link> / Каталоги
            </div>
            <h1 className="title">Каталоги</h1>

            <CatalogsCards />

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
    catalogsError: catalogsError(state),
    menuError: menuError(state),
    menuLoaded: menuLoaded(state),
});

export default connect(mapStateToProps, { loadCatalogs, loadMainMenu })(Catalogs);