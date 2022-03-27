import Collapsible from 'react-collapsible';
import FiltersItem from '../filters-item/filters-item.component';
import styles from './collapsible.module.css';


const CollapsibleBlock = ({ filters, searchGroup }) => {
    // const [visible, Folded] = [
    //     () => filters.slice(0, 6).map((data, i) => <FiltersItem key={i} {...data} searchGroup={searchGroup} />),
    //     () => filters.slice(6).map((data, i) => <FiltersItem key={i} {...data} searchGroup={searchGroup} />)
    // ];

    // const [visible1, Folded1] = useMemo(() => ([
    //     filters.slice(0, 6).map((data, i) => <FiltersItem key={i} {...data} searchGroup={searchGroup} />),
    //     filters.slice(6).map((data, i) => <FiltersItem key={i} {...data} searchGroup={searchGroup} />)
    // ]), []);
    return (
        <Collapsible
            trigger="ещё"
            transitionTime={200}
            className={styles.collapsible}
            openedClassName={styles.collapsible_open}
            triggerClassName={styles.trigger}
            triggerOpenedClassName={styles.trigger_open}
            triggerTagName={'button'}

            contentOuterClassName={styles.folded}
            triggerSibling={() => filters.slice(0, 6).map((data, i) => <FiltersItem key={i} {...data} searchGroup={searchGroup} />)}
        >
            {filters.slice(6).map((data, i) => <FiltersItem key={i} {...data} searchGroup={searchGroup} />)}
        </Collapsible>
    )
};

export default CollapsibleBlock;