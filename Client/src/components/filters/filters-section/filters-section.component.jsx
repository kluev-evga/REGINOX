import { useHistory } from 'react-router-dom';
import FiltersItem from '../filters-item/filters-item.component';
import CollapsibleBlock from '../collapsible-block/collapsible-block.component';
import { ReactComponent as CleanIcon } from '../../../assets/svg/sweep.svg';


const FiltersSection = ({ title, filters, searchGroup }) => {
    const history = useHistory();
    const search = new URLSearchParams(history.location.search);

    const handleClick = () => {
        search.delete(searchGroup);
        history.push({ search: search.toString() });
    }

    return (
        <section>
            <p>
                {title}
                <CleanIcon
                    onClick={handleClick}
                    style={search.has(searchGroup) ? { opacity: 1, pointerEvents: 'all' } : {}} />
            </p>
            {filters.length > 6
                ? <CollapsibleBlock filters={filters} searchGroup={searchGroup} />
                : filters.map((data, i) => <FiltersItem key={i} {...data} searchGroup={searchGroup} />)}
        </section>
    )
}

export default FiltersSection;