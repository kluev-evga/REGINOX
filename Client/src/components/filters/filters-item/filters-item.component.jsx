import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';
import { ReactComponent as CheckIcon } from '../../../assets/svg/check-mark.svg';
import styles from './filters-item.module.css';


const FiltersItem = ({ name, count, search, searchGroup }) => {
    const history = useHistory();
    const params = new URLSearchParams(history.location.search);
    const isActive = params.get(searchGroup)?.includes(search);

    const handleClick = useCallback((isActive, params) => {
        if (!params.has(searchGroup) && !isActive) {
            params.set(searchGroup, search)
        } else {
            const searchArr = params.get(searchGroup).split('_');

            if (searchArr.length < 2 && isActive) {
                params.delete(searchGroup)
            } else {
                const arr = searchArr.filter(item => item !== search);
                !isActive && arr.push(search);
                params.set(searchGroup, arr.join('_'));
            }
        };
        history.push({ search: params.toString() });
    }, [])// eslint-disable-line

    return (
        <button
            className={styles.button}
            key={search}
            onClick={() => handleClick(isActive, params)}
        >
            <CheckIcon className={cn(styles.checkmark, { [styles.active]: isActive })} />
            {name}
            {count}
        </button>
    )
};

export default FiltersItem;