import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadPromoItems, loadNewItems } from '../../redux/actions'
import {
   promoItems,
   promoLoaded,
   newItems,
   newItemsLoaded,
} from '../../redux/selectors'
import PromoItem from './promo-item/promo-item.component'
import Loader from '../../components/loader/loader.coponent'

const Promo = ({ latest, loadItems, loaded, items }) => {
   useEffect(() => {
      loadItems()
   }, [latest]) //eslint-disable-line
   if (!loaded) return <Loader />

   return (
      <div className={'container'}>
         <div className={'breadcrumbs'}>
            <Link to='/home'>Главная</Link> / {latest ? 'Новинки' : 'Акциии'}
         </div>
         <h1 className={'title'}>{latest ? 'Новинки' : 'Акции и скидки'}</h1>

         {items.map((data, i) => (
            <PromoItem key={i} {...data} />
         ))}
      </div>
   )
}

const mapStateToProps = (state, { latest }) => {
   const loaded = latest ? newItemsLoaded : promoLoaded
   const items = latest ? newItems : promoItems
   return {
      loaded: loaded(state),
      items: items(state),
   }
}

const mapDispatchToProps = (dispatch, { latest }) => {
   const loadItems = latest ? loadNewItems : loadPromoItems
   return { loadItems: () => dispatch(loadItems()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Promo)
