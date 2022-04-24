import { useMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { productsLoaded, filters } from '../../redux/selectors'
import RangeSliderContainer from './components/range-slider-container.component'
import FilterSection from './components/filters-section.component'


const Filters = () => {
   const { params } = useMatch({path: 'products/:url'})
   const isLoading = useSelector(state => !productsLoaded(state, params.url))
   const filterSections = useSelector(state => filters(state, params.url))
   if (isLoading || !params) return null

   return (
      <div className='filters'>
         <RangeSliderContainer/>
         { filterSections.map( (item, i) => <FilterSection key={params.url + i} {...item} /> ) }
      </div>
   )
}

export default Filters