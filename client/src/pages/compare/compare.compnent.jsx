import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCompareItems } from '../../redux/actions';
import { compareLoaded } from '../../redux/selectors';
import ViewContainer from './view-container/view-container.component';
import Loader from '../../components/loader/loader.coponent';


const Compare = ({ loaded, loadCompareItems }) => {
    useEffect(() => { loadCompareItems() })//eslint-disable-line

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

export default connect(mapStateToProps, { loadCompareItems })(Compare)

