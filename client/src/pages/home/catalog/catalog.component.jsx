import { connect } from 'react-redux';
import { menuLinks } from '../../../redux/selectors';
import { Link } from 'react-router-dom';
import CardSlider from '../../../components/card-slider/card-slider.component';
import cn from 'classnames';
import { ReactComponent as ListIcon } from '../../../assets/svg/list.svg';
import styles from './catalog.module.css';


const Catalog = ({ links }) => (
    <div className='container section-container'>
        <h2 className='title'>каталог</h2>
        <div className={styles.container}>
            {links.map(({ url, ...rest }, i) => (
                <Link to={`products/${url}/all`} key={url} className={cn('link-card', { 'temp-disabled': i > 6 })}>
                    <CardSlider {...rest} width="550" height="640">
                        <ListIcon />
                        Перейти в каталог
                    </CardSlider>
                </Link>
            ))}
        </div>
    </div>
)

const mapStateToProps = (state) => ({ links: menuLinks(state) })

export default connect(mapStateToProps)(Catalog)