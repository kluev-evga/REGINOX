import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadPromoItems, loadNewItems } from '../../redux/actions'
import { promoItems, promoLoaded, newItems, newItemsLoaded } from '../../redux/selectors'
import PromoSection from './promo-section.component'
import Loader from '../../components/loader/loader.coponent'
import './promo-section.scss'


const Promo = ({ latest=false }) => {
   const dispatch = useDispatch()
   const isLoading = !useSelector(latest ? newItemsLoaded : promoLoaded)
   const items = useSelector(latest ? newItems : promoItems)
   const ref = useRef()

   useEffect(() => { !isLoading && ref.current.scrollIntoView({ block: "start"})}, [latest] ) //eslint-disable-line
   useEffect(() => { dispatch(latest ? loadNewItems() : loadPromoItems()) }, [latest]) //eslint-disable-line

   if (isLoading) return <Loader />

   return (
      <div className={'container'} ref={ref}>

         <div className={'breadcrumbs'}>
            <Link to='/'>Главная</Link> / {latest ? 'Новинки' : 'Акциии'}
         </div>

         <h1 className={'title'}>{latest ? 'Новинки' : 'Акции и скидки'}</h1>

         {items.map((data, i) => <PromoSection key={i} {...data} /> )}
      </div>
   )
}

export default Promo