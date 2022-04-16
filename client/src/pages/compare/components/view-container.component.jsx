import { useSelector } from 'react-redux'
import { compareItems, productItemById } from '../../../redux/selectors'
import { useMediaQuery } from 'react-responsive'
import ViewPhone from './view-phone.component'
import ViewLarge from './view-large.component'


const ViewContainer = () => {
   const isLarge = useMediaQuery({ query: '(min-width: 768px)' })
   const compareItms = useSelector(compareItems)
   const productItem = useSelector(productItemById)


   const items = compareItms.map(id => productItem(id))
   const specs = Object.keys(
      items.reduce((acc, {specs}) => {
         specs.forEach(({ dt }) => (acc[dt] = true))
         return acc
      }, {})
   )

   const data = items.map(({ id, images, specs, productUrl, url, price }) => {
      const itemSpecs = specs.reduce((acc, item) => {
         acc[item.dt] = item.dd
         return acc
      }, {})
      return { id, images, specs: itemSpecs, productUrl, url, price }
   })

   if (specs.length === 0) return <div>ничего не выбрано</div>

   return isLarge ? <ViewLarge items={compareItms} data={data} specs={specs} />
                  : <ViewPhone items={compareItms} data={data} specs={specs} />
}

export default ViewContainer