import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCatalogs } from '../../redux/actions';
import { catalogsLoading, catalogsError } from '../../redux/selectors';

import CatalogsContent from './catalogs-content/catalogs-content.component';

import { ReactComponent as Spinner } from '../../assets/svg/spinner.svg';
import styles from './catalogs.module.css';


const Catalogs = ({ loadCatalogs, loading, error }) => {
    useEffect(() => { loadCatalogs() }, [loadCatalogs]);

    if (loading) return <div className={styles.spinner}><Spinner /></div>;

    return (
        <div className='container'>
            <div className="breadcrumbs">
                <Link to='/home'>Главная</Link> / Каталоги
            </div>
            <h1 className="title">Каталоги</h1>

            <CatalogsContent />

            <button>Загрузить еще</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    loading: catalogsLoading(state),
    error: catalogsError(state),
});

const mapDispatchToProps = ({
    loadCatalogs
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalogs);