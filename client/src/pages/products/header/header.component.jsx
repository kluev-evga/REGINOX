import { useHistory, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { openFiltersMenu } from '../../../redux/actions';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import HeaderSelect from '../header-select/header-select.component';
import HeaderTilesButtons from '../header-tiles-buttons/header-tiles-buttons.component';
import { ReactComponent as ChevronLeftIcon } from '../../../assets/svg/chevron-left.svg';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';
import styles from './header.module.css';


const Header = ({ openFiltersMenu }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
    const history = useHistory();
    const { search } = history.location;
    const { params } = useRouteMatch();
    const { url, categoryUrl } = params;

    return (
        <div className={styles.container}>
            <div className={styles.select}>
                <HeaderSelect url={url} />
            </div>

            <button
                className={cn(styles.button, styles.reset, { [styles.disabled]: categoryUrl === 'all' && !search })}
                onClick={() => history.push(`/products/${url}/all`)}>
                cбросить все
                <CrossIcon />
            </button>

            {isDesktop
                ? <HeaderTilesButtons />
                : (<button
                    className={styles.button}
                    onClick={openFiltersMenu}
                    aria-label='открыть меню фильтров'>
                    фильтры
                    <ChevronLeftIcon />
                </button>)}
        </div>
    )
}

export default connect(null, { openFiltersMenu })(Header)