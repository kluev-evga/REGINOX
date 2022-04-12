import styles from './search.module.css';
import {ReactComponent as SearchIcon} from '../../assets/svg/search.svg';


const Search = () => {

    return (
        <div className={styles.container}>
            <div className="container">
                <div className={styles.input}>
                    <SearchIcon/>
                    <input
                    placeholder='поиск по сайту'
                    maxLength={50}
                    type='search'/>
                </div>
            </div>
        </div>
    )
}

export default Search