import { useSearchParams } from 'react-router-dom'
import FiltersItem from './filters-item.component'
import CollapsibleBlock from './collapsible-block.component'
import { ReactComponent as ClearIcon } from '../../../assets/svg/clear.svg'


const FilterSection = ({ title, filters, searchGroup }) => {
   const [params, setSearchParams] = useSearchParams()

   const handleClick = () => {
      params.delete(searchGroup)
      setSearchParams(params)
   }

   return (
      <section>

         <div className='filters__section-heading'>
            <p>{title}</p>
            {params.has(searchGroup) &&
               <button onClick={handleClick} aria-label={`очистить секцию ${title}`} >
                  <ClearIcon />очистить
               </button>
            }
         </div>

         {filters.length > 6
            ? <CollapsibleBlock filters={filters} searchGroup={searchGroup} />
            : filters.map((data, i) => <FiltersItem key={i} {...data} searchGroup={searchGroup} />)
         }

      </section>
   )
}

export default FilterSection