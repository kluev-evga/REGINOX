import { useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { productsLoaded } from '../../redux/selectors';
import Filters from './filters.component';


const FiltersContainer = ({ productsloaded }) => {
    const match = useRouteMatch('/products/:url?/:categoryUrl?');
    const { url, categoryUrl } = match.params;
    const loaded = productsloaded(url);

    return loaded ? <Filters url={url} categoryUrl={categoryUrl} /> : <div>LOADING</div>
};

const mapStateToProps = state => ({
    productsloaded: productsLoaded(state),
});

export default connect(mapStateToProps)(FiltersContainer);