import { useMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { productsLoaded, filters } from '../../redux/selectors'
import FilterSection from './components/filters-section.component'


const Filters = () => {
   const { params } = useMatch({path: '/products/:url', end: false })
   const isLoading = useSelector(state => !productsLoaded(state, params.url))
   const filterSections = useSelector(state => filters(state, params.url))
   if (isLoading) return null

   return (
      <div className='filters'>
         { filterSections.map( (item, i) => <FilterSection key={params.url + i} {...item} /> ) }
      </div>
   )
}

export default Filters