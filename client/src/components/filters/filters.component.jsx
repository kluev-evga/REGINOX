import { useMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { productsLoaded, filters } from '../../redux/selectors'
import FilterSection from './filters-section/filters-section.component'
import styles from './filters.module.css'

const FiltersContainer = () => {
   const { params } = useMatch('/products/:url')
   const {url} = params
   const isLoading = useSelector(state => !productsLoaded(state, url))
   const filterSections = useSelector(state => filters(state, url))
   if (isLoading) return null

   return (
      <div className={styles.wrapper}>
         { filterSections.map( (item, i) => <FilterSection key={url+i} {...item} /> ) }
      </div>
   )
}

export default FiltersContainer