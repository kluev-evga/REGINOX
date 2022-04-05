import { connect } from 'react-redux';
import { menuLinks } from '../../../redux/selectors';
import { Link } from 'react-router-dom';
import CardSlider from '../../../components/card-slider/card-slider.component';
import { ReactComponent as ListIcon } from '../../../assets/svg/list.svg';


const Catalog = ({ links }) => (
    <div className='container section-container'>
        <h2 className='title'>каталог</h2>
        <div className='cards-wrapper'>
            {links.map(({ url, ...rest }) => (
                <Link to={`products/${url}/all`} key={url} className='link-card'>
                    <CardSlider {...rest} width="550" height="640">
                        <ListIcon />
                        Перейти в каталог
                    </CardSlider>
                </Link>
            ))}
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    links: menuLinks(state)
});

export default connect(mapStateToProps)(Catalog);