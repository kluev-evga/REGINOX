import { connect } from 'react-redux';
import { catalogLinks } from '../../redux/selectors';
import { Link } from 'react-router-dom';
import CardSlider from '../card-slider/card-slider.component';
import { ReactComponent as ListIcon } from '../../assets/svg/list.svg';


const Catalog = ({ catalogLinks }) => (
    <div className='container section-container'>
        <h2 className='title'>каталог</h2>
        <div className='cards-wrapper'>
            {
                catalogLinks.map(({ id, url, ...rest }) => (
                    <Link to={`products/${url}/all`} key={id}>
                        <CardSlider {...rest} width="550" height="640">
                            <ListIcon />
                            Перейти в каталог
                        </CardSlider>
                    </Link>
                ))
            }
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    catalogLinks: catalogLinks(state)
});

export default connect(mapStateToProps)(Catalog);