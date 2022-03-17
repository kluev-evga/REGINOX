import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';
import { ReactComponent as CheckIcon } from '../../../assets/svg/check-mark.svg';
import styles from './filters-item.module.css';
import { filterProducts } from '../../../redux/actions';

import { connect } from 'react-redux';


const FiltersItem = ({ title, count, search, searchGroup, location }) => {
    const history = useHistory();
    const params = new URLSearchParams(location.search);
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

    // useEffect(() => {
    //     isActive && filterProducts();
    // }, [isActive]);

    return (
        <button
            className={styles.button}
            onClick={() => handleClick(isActive, params)}
        >
            <CheckIcon className={cn(styles.checkmark, { [styles.active]: isActive })} />
            {title}
            <span>{count}</span>
        </button>
    )
};

const mapStateToProps = (state) => {
    return ({
        location: state.router.location
    })
};

const mapDispatchToProps = ({ filterProducts })

export default connect(mapStateToProps, mapDispatchToProps)(FiltersItem);















// import { useCallback, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import cn from 'classnames';
// import { ReactComponent as CheckIcon } from '../../../assets/svg/check-mark.svg';
// import styles from './filters-item.module.css';
// import { filterProducts } from '../../../redux/actions';


// const FiltersItem = ({ title, count, search, searchGroup }) => {
//     const history = useHistory();
//     const params = new URLSearchParams(history.location.search);
//     const isActive = params.get(searchGroup)?.includes(search);

//     const handleClick = useCallback((isActive, params) => {
//         if (!params.has(searchGroup) && !isActive) {
//             params.set(searchGroup, search)
//         } else {
//             const searchArr = params.get(searchGroup).split('_');

//             if (searchArr.length < 2 && isActive) {
//                 params.delete(searchGroup)
//             } else {
//                 const arr = searchArr.filter(item => item !== search);
//                 !isActive && arr.push(search);
//                 params.set(searchGroup, arr.join('_'));
//             }
//         };
//         history.push({ search: params.toString() });
//     }, [])// eslint-disable-line

//     useEffect(() => {
//         isActive && filterProducts();
//     }, [isActive]);

//     return (
//         <button
//             className={styles.button}
//             onClick={() => handleClick(isActive, params)}
//         >
//             <CheckIcon className={cn(styles.checkmark, { [styles.active]: isActive })} />
//             {title}
//             <span>{count}</span>
//         </button>
//     )
// };

// export default FiltersItem;