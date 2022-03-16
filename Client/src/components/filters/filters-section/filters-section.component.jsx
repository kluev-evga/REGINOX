import styles from './filters-section.module.css';
import FiltersItem from '../filters-item/filters-item.component';


const FiltersSection = ({ name, filters, searchGroup }) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{name}</p>
            {filters.map((data, i) => <FiltersItem key={i} {...data} searchGroup={searchGroup} />)}
        </div>
    );
};

export default FiltersSection;