import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadCompareItems } from '../../redux/actions'
import { compareLoaded, compareItems, productItemsById } from '../../redux/selectors'
import ViewContainer from './components/view-container.component'
import Loader from '../../components/loader/loader.coponent'
import './compare.scss'


const Compare = () => {
   const dispatch = useDispatch()
   const isLoading = !useSelector(compareLoaded)
   const items = useSelector(compareItems)
   const itemsById = useSelector(productItemsById)
   const itemsToLoad = useMemo(() => items.filter(id => (itemsById[id] ? false : id)), [itemsById])//eslint-disable-line

   useEffect(() => { dispatch(loadCompareItems(itemsToLoad)) }, [])//eslint-disable-line

   if (isLoading || itemsToLoad.length !== 0) return <Loader />

   return (
      <div className='compare'>
         <div className={'container'}>
            <div className={'breadcrumbs'}><Link to='/'>Главная</Link> / сравнить</div>
            <h1 className={'title'}>Сравнить товары</h1>
            <ViewContainer />
         </div>
      </div>
   )
}

export default Compare