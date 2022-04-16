import { useSelector, useDispatch } from 'react-redux'
import { appIsTiles } from '../../../redux/selectors'
import { setAppTiles, unsetAppTiles } from '../../../redux/actions'
import cn from 'classnames'
import { ReactComponent as ListIcon } from '../../../assets/svg/list.svg'
import { ReactComponent as TilesIcon } from '../../../assets/svg/tiles.svg'


const HeaderTilesButtons = () => {
   const dispatch = useDispatch()
   const isTiles = useSelector(appIsTiles)

   return (
      <div className='products__section-header-tiles'>
         <button
            className={cn({ 'active': !isTiles })}
            aria-label='отобразить списком'
            onClick={() => dispatch(unsetAppTiles())}>
            <ListIcon />
         </button>
         <button
            className={cn({ 'active': isTiles })}
            aria-label='отобразить плиткой'
            onClick={() => dispatch(setAppTiles())}>
            <TilesIcon />
         </button>
      </div>
   )
}

export default HeaderTilesButtons