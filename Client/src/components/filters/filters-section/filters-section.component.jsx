import styles from './filters-section.module.css';
import FiltersItem from '../filters-item/filters-item.component';


const FiltersSection = ({ title, filters, searchGroup }) => (
    <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        {filters.map((data, i) => <FiltersItem key={i} {...data} searchGroup={searchGroup} />)}
    </div>
);

export default FiltersSection;