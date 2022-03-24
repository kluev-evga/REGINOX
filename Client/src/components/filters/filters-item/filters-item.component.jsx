import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as CheckIcon } from '../../../assets/svg/check-mark.svg';


const FiltersItem = ({ title, count, search, searchGroup }) => {
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
        <button onClick={() => handleClick(isActive, params)}>
            <CheckIcon style={isActive ? { color: 'var(--red)' } : {}} />
            {title}
            <span>({count})</span>
        </button>
    )
};

export default FiltersItem;