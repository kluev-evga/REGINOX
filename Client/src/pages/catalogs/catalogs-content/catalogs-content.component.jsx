
import { connect } from 'react-redux';
import { selectCatalogs } from '../../../redux/selectors';
import CardSlider from '../../../components/card-slider/card-slider.component';
import { ReactComponent as DownloadIcon } from '../../../assets/svg/download.svg';


const CatalogsContent = ({ catalogs }) => (
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
    </div>
);

const mapStateToProps = (state) => ({
    catalogs: selectCatalogs(state),
});

export default connect(mapStateToProps)(CatalogsContent);