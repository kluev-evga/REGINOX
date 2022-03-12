import { useEffect, useCallback, useMemo } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCatalogs } from '../../redux/actions';
import { catalogsError, catalogsTotal, selectCatalogsSize } from '../../redux/selectors';
import CatalogsCards from './catalogs-cards/catalogs-cards.component';
import styles from './catalogs.module.css';


const Catalogs = ({ location, history, loadCatalogs, error, total, loadedSize }) => {
    const searchParams = useMemo(() => new URLSearchParams(location.search), [location]);
    const sizeParam = useMemo(() => searchParams.get('size'), [searchParams]);
    const pageSize = useMemo(() => parseInt(sizeParam), [sizeParam]);

    useEffect(() => {
        if (!pageSize) {
            const newSize = loadedSize ? loadedSize : 6;
            history.replace(`/catalogs?size=${newSize}`);
            loadCatalogs(newSize);
        } else {
            const isLegit = isFinite(parseInt(sizeParam.slice(-1)));
            let paramsCount = 0;
            searchParams.forEach((_) => paramsCount++);
            if (paramsCount > 1 || !isLegit) history.replace(`/catalogs?size=${pageSize}`);
            loadCatalogs(pageSize);
        }
    }, [history, loadCatalogs, loadedSize, searchParams, sizeParam, pageSize]);

    useEffect(() => {
        if (total && pageSize > total) history.replace(`/catalogs?size=${total}`);
    }, [total, pageSize, history]);

    if (error) <Redirect to='/error' />

    const handleClick = useCallback(() => {
        if (pageSize < total) {
            const newSize = (pageSize + 3 < total) ? pageSize + 3 : total;
            history.replace(`/catalogs?size=${newSize}`);
            loadCatalogs(newSize);
        };
    }, [pageSize, total, loadCatalogs, history]);

    return (
        <div className='container'>
            <div className="breadcrumbs">
                <Link to='/home'>Главная</Link> / Каталоги
            </div>
            <h1 className="title">Каталоги</h1>

            <CatalogsCards />

            <div className={styles.wrapper}>
                <button
                    onClick={handleClick}
                    disabled={(pageSize === total) ? true : false}
                    className='button_secondary'
                >
                    Загрузить еще
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    error: catalogsError(state),
    total: catalogsTotal(state),
    loadedSize: selectCatalogsSize(state),
});

const mapDispatchToProps = ({
    loadCatalogs
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalogs);