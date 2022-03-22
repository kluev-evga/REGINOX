import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { loadBrands } from '../redux/actions';
import { brandsLoaded, brands } from '../redux/selectors';
import Loader from '../components/loader/loader.coponent';


const withBrands = (WrappedComponent) => (props) => {
    const dispatch = useDispatch();
    const loaded = useSelector(brandsLoaded);
    const brandsItems = useSelector(brands);
    useEffect(() => { dispatch(loadBrands()) }, []);// eslint-disable-line
    return (loaded) ? <WrappedComponent brands={brandsItems} {...props}/> : <Loader />;
};

export default withBrands;