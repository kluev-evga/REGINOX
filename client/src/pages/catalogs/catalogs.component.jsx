import { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCatalogs } from '../../redux/actions';
import { catalogsLoading, catalogsTotal } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import withMenuLoader from '../../hoc/with-menu-loader';
import CatalogsCards from './catalogs-cards/catalogs-cards.component';
import styles from './catalogs.module.css';


const Catalogs = ({ loadCatalogs, loading, total, location, history }) => {
    const isDesktopXL = useMediaQuery({ query: '(min-width: 1400px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const searchParams = new URLSearchParams(location.search);
    const sizeParam = searchParams.get('size');
    const pageSize = parseInt(sizeParam);
    const isLegit = isFinite(Number(sizeParam));

    useEffect(() => {
        if (!isLegit || searchParams.toString() !== `size=${pageSize}`) 
            history.replace(`/catalogs?size=${pageSize ? pageSize : 3}`);
        else loadCatalogs(pageSize, isDesktopXL, isTablet);
    }, [searchParams]);//eslint-disable-line

    useEffect(() => {
        total && pageSize > total && history.replace(`/catalogs?size=${total}`)
    }, [total]);//eslint-disable-line

    const handleClick = useCallback(() => {
        const i = isDesktopXL ? 4 : isTablet ? 3 : 2;
        const size = (pageSize + i) % i === 0 ? pageSize + i :  pageSize + i - pageSize % i;
        history.replace(`/catalogs?size=${size < total ? size : total}`);
    }, [pageSize, total, isDesktopXL, isTablet]);// eslint-disable-line

    return (
        <div className='container'>
            <div className="breadcrumbs">
                <Link to='/home'>Главная</Link> / Каталоги
            </div>
            <h1 className="title">Каталоги</h1>

            <CatalogsCards pageSize={pageSize} />

            <div className={styles.wrapper}>
                <button
                    onClick={handleClick}
                    disabled={loading ? true : false}
                    className={cn('button_secondary', {[styles.hidden]: pageSize === total})}>
                    Загрузить еще
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    total: catalogsTotal(state),
    loading: catalogsLoading(state),
})

export default withMenuLoader(connect(mapStateToProps, { loadCatalogs })(Catalogs))