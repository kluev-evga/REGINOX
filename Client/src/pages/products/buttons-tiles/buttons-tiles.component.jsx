import cn from "classnames";
import { ReactComponent as ListIcon } from '../../../assets/svg/list.svg';
import { ReactComponent as TilesIcon } from '../../../assets/svg/tiles.svg';


const ButtonsTiles = ({ setTiles, tiles }) => (
    <div>
        <button
            className={cn({ 'button_active': !tiles })}
            aria-label='отобразить списком'
            onClick={() => setTiles(false)}
        >
            <ListIcon />
        </button>
        <button
            className={cn({ 'button_active': tiles })}
            aria-label='отобразить плиткой'
            onClick={() => setTiles(true)}
        >
            <TilesIcon />
        </button>
    </div>
);

export default ButtonsTiles;