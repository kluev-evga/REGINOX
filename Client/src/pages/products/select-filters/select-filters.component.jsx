import { connect } from 'react-redux';
import { setSortBy } from '../../../redux/actions';
import { sortBy } from '../../../redux/selectors';
import Select from 'react-select';


const customStyles = {
    indicatorSeparator: () => null,
    container: (provided) => ({ ...provided, width: '100%' }),
    control: (provided) => ({ ...provided, cursor: 'pointer' }),
    valueContainer: (provided) => ({ ...provided, padding: '10px', fontSize: 18, margin: '0 0 0 -3px' }),
    input: (provided) => ({ ...provided, padding: 0, margin: 0 }),
    menuList: (provided) => ({ ...provided, padding: 0 }),
    option: (provided) => ({ ...provided, cursor: 'pointer', padding: '10px', fontSize: 18 }),
};

const options = [
    { value: 'rating', label: 'Сначала популярные' },
    { value: 'from cheap', label: 'Сначала недорогие' },
    { value: 'from expensive', label: 'Сначала дорогие' },
];

const SelectFilters = ({ setSortBy, sortBy, url }) => (
    <Select
        onChange={(sortBy) => setSortBy(sortBy, url)}
        options={options}
        value={sortBy}
        styles={customStyles}
        isSearchable={false}
        theme={(theme) => ({
            ...theme,
            borderRadius: 1,
            colors: { ...theme.colors, primary25: 'var(--gray-light)', primary: 'var(--gray-med)' },
            spacing: { baseUnit: 4, controlHeight: 30, menuGutter: 1 }
        })}
    />
);

const mapStateToProps = (state) => ({
    sortBy: sortBy(state)
});

const mapDispatchToProps = ({ setSortBy });

export default connect(mapStateToProps, mapDispatchToProps)(SelectFilters);