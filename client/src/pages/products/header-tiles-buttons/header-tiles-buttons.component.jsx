import { connect } from 'react-redux';
import { appIsTiles } from '../../../redux/selectors';
import { setAppTiles, unsetAppTiles } from '../../../redux/actions';
import cn from "classnames";
import { ReactComponent as ListIcon } from '../../../assets/svg/list.svg';
import { ReactComponent as TilesIcon } from '../../../assets/svg/tiles.svg';
import styles from './header-tiles-buttons.module.css';


const HeaderTilesButtons = ({ setAppTiles, unsetAppTiles, isTiles }) => (
    <div className={styles.container}>
        <button
            className={cn({ [styles.active]: !isTiles })}
            aria-label='отобразить списком'
            onClick={unsetAppTiles}>
            <ListIcon />
        </button>
        <button
            className={cn({ [styles.active]: isTiles })}
            aria-label='отобразить плиткой'
            onClick={setAppTiles}>
            <TilesIcon />
        </button>
    </div>
)

const mapStateToProps = state => ({ isTiles: appIsTiles(state) })

export default connect(mapStateToProps, { setAppTiles, unsetAppTiles })(HeaderTilesButtons)