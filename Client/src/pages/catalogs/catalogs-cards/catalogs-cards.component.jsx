
import { connect } from 'react-redux';
import { catalogs, catalogsLoading } from '../../../redux/selectors';
import CardSlider from '../../../components/card-slider/card-slider.component';
import { ReactComponent as DownloadIcon } from '../../../assets/svg/download.svg';
import { ReactComponent as Spinner } from '../../../assets/svg/spinner.svg';
import styles from './catalogs-cards.module.css';


const CatalogsCards = ({ catalogs, loading, pageSize }) => (
    <div className='cards-wrapper'>
        {catalogs.slice(0, pageSize).map(({ url, id, ...rest }) => (
            <a href={url} download key={id} className='link-card'>
                <CardSlider
                    {...rest}
                    sm
                    width='380'
                    height='550'
                    fixed>
                    <DownloadIcon />
                    Скачать
                </CardSlider>
            </a>
        ))}
        {loading && <div className={styles.spinner}><Spinner /></div>}
    </div>
);

const mapStateToProps = (state) => ({
    loading: catalogsLoading(state),
    catalogs: catalogs(state),
});

export default connect(mapStateToProps)(CatalogsCards);