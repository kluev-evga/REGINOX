import { useHistory } from 'react-router-dom';
import cn from 'classnames';
import FiltersItem from '../filters-item/filters-item.component';
import CollapsibleBlock from '../collapsible-block/collapsible-block.component';
import { ReactComponent as TrashIcon } from '../../../assets/svg/trash.svg';
import styles from '../button.module.css';


const FiltersSection = ({ title, filters, searchGroup }) => {
    const history = useHistory();
    const search = new URLSearchParams(history.location.search);

    const handleClick = () => {
        search.delete(searchGroup);
        history.push({ search: search.toString() });
    }

    return (
        <section>
            <button
                onClick={handleClick}
                className={cn(styles.clean_btn, { [styles.clean_btn_active]: search.has(searchGroup) })}
                tabIndex={-1}
                aria-hidden='true'>
                {title}
                <TrashIcon />
            </button>
            {filters.length > 6
                ? <CollapsibleBlock filters={filters} searchGroup={searchGroup} />
                : filters.map((data, i) => <FiltersItem key={i} {...data} searchGroup={searchGroup} />)}
        </section>
    )
}

export default FiltersSection;