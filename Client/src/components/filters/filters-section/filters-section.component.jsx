import FiltersItem from '../filters-item/filters-item.component';


const FiltersSection = ({ title, filters, searchGroup }) => (
    <section>
        <p>{title}</p>
        {filters.map((data, i) => <FiltersItem key={i} {...data} searchGroup={searchGroup} />)}
    </section>
);

export default FiltersSection;