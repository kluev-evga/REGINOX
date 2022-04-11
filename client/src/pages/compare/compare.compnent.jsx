import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCompareItems, resetCompareLoaded } from '../../redux/actions';
import { compareLoaded } from '../../redux/selectors';
import ViewContainer from './view-container/view-container.component';
import Loader from '../../components/loader/loader.coponent';


const Compare = ({ loaded, loadCompareItems, resetCompareLoaded }) => {
    useEffect(() => {
        loadCompareItems();
        return () => resetCompareLoaded(false);
    }, [])//eslint-disable-line

    if (!loaded) return <Loader />

    return (
        <div>
            <div className={"container"} >
                <div className={"breadcrumbs"}>
                    <Link to='/home'>Главная</Link> / сравнить
                </div>
                <h1 className={'title'}>Сравнить товары</h1>

                <ViewContainer />

            </div>
        </div>
    )
}

const mapStateToProps = state => ({ loaded: compareLoaded(state) })

export default connect(mapStateToProps, { loadCompareItems, resetCompareLoaded })(Compare)