import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadCompareItems } from '../../redux/actions'
import { compareLoaded, compareItems, productItemsById } from '../../redux/selectors'
import ViewContainer from './view-container/view-container.component'
import Loader from '../../components/loader/loader.coponent'

const Compare = ({ loadCompareItems, compareItems, productItemsById, loaded }) => {
   const itemsToLoad = useMemo(
      () => compareItems.filter(id => (productItemsById[id] ? false : id)),
      [productItemsById]
   ) //eslint-disable-line

   useEffect(() => {
      loadCompareItems(itemsToLoad)
   }, []) //eslint-disable-line

   if (!loaded || itemsToLoad.length !== 0) return <Loader />

   return (
      <div>
         <div className={'container'}>

            <div className={'breadcrumbs'}><Link to='/'>Главная</Link> / сравнить</div>

            <h1 className={'title'}>Сравнить товары</h1>

            <ViewContainer />
         </div>
      </div>
   )
}

const mapStateToProps = state => ({
   loaded: compareLoaded(state),
   compareItems: compareItems(state),
   productItemsById: productItemsById(state),
})

export default connect(mapStateToProps, { loadCompareItems })(Compare)
