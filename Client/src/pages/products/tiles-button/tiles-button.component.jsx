import cn from "classnames";
import { ReactComponent as ListIcon } from '../../../assets/svg/list.svg';
import { ReactComponent as TilesIcon } from '../../../assets/svg/tiles.svg';
import styles from './tiles-button.module.css';


const TilesButton = ({ setTiles, tiles }) => (
    <div className={styles.container}>
        <button
            className={cn({ 'button_active': !tiles })}
            aria-label='отобразить списком'
            onClick={() => setTiles(false)}>
            <ListIcon />
        </button>
        <button
            className={cn({ 'button_active': tiles })}
            aria-label='отобразить плиткой'
            onClick={() => setTiles(true)}>
            <TilesIcon />
        </button>
    </div>
);

export default TilesButton;