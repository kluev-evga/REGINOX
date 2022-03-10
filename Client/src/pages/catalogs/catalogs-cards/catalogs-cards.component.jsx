
import { connect } from 'react-redux';
import { selectCatalogs, catalogsLoading } from '../../../redux/selectors';
import CardSlider from '../../../components/card-slider/card-slider.component';
import { ReactComponent as DownloadIcon } from '../../../assets/svg/download.svg';
import { ReactComponent as Spinner } from '../../../assets/svg/spinner.svg';
import styles from './catalogs-cards.module.css';


const CatalogsContent = ({ catalogs, loading }) => (
    <div className='cards-wrapper'>
        {
            catalogs.map(({ url, id, ...rest }) => (
                <a href={url} download key={id}>
                    <CardSlider
                        {...rest}
                        sm
                        width='380'
                        height='550'
                        fixed
                    >
                        <DownloadIcon />
                        Скачать
                    </CardSlider>
                </a>
            ))
        }
        {loading && <div className={styles.spinner}><Spinner /></div>}
    </div>
);

const mapStateToProps = (state) => ({
    catalogs: selectCatalogs(state),
    loading: catalogsLoading(state),
});

export default connect(mapStateToProps)(CatalogsContent);