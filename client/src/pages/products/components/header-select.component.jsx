import { useDispatch, useSelector } from 'react-redux'
import { sortProducts } from '../../../redux/actions'
import { sortBy } from '../../../redux/selectors'
import Select from 'react-select'
import { useMediaQuery } from 'react-responsive'


const customStyles = {
   indicatorSeparator: () => null,
   dropdownIndicator: (provided, {selectProps}) => ({...provided,  padding: selectProps.isDesktop? '8px' : '5px' }),
   container: provided => ({ ...provided, width: '100%' }),
   control: provided => ({ ...provided, cursor: 'pointer' }),
   valueContainer: (provided, {selectProps}) => ({...provided, padding: selectProps.isDesktop? '9px' : '6px 10px', margin: '0 0 0 -3px'}),
   input: provided => ({ ...provided, padding: 0, margin: 0 }),
   menuList: provided => ({ ...provided, padding: 0 }),
   option: (provided, {selectProps}) => ({ ...provided, cursor: 'pointer', padding:  selectProps.isDesktop? '9px' : '6px 10px' }),
}

const options = [
   { value: 'rating', label: 'cначала популярные' },
   { value: 'cheap', label: 'cначала недорогие' },
   { value: 'expensive', label: 'cначала дорогие' }
]

const HeaderSelect = ({ url }) => {
   const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })
   const dispatch = useDispatch()
   const sortByValue = useSelector(sortBy)

   return (
      <Select
         isDesktop={isDesktop}
         onChange={sortBy => dispatch(sortProducts(sortBy, url))}
         options={options}
         value={sortByValue}
         styles={customStyles}
         isSearchable={false}
         theme={theme => ({
            ...theme,
            borderRadius: 1,
            colors: {...theme.colors, primary25: 'var(--gray-light)', primary: 'var(--gray-med)'},
            spacing: { baseUnit: 4, controlHeight: 28, menuGutter: 1 },
         })}
      />
   )
}

export default HeaderSelect