import { ReactComponent as CheckIcon } from '../../../assets/svg/check-mark.svg';
import styles from './filters-section.module.css';


const FiltersSection = ({ name, filters }) => (
    <div className={styles.container}>

        <p className={styles.title}>{name}</p>

        {filters.map(name =>
            <button className={styles.button} key={name}>
                <CheckIcon className={styles.checkmark} />
                {name}
            </button>
        )}
    </div>
);

export default FiltersSection;