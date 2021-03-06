import { useState } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import { currency } from '../../../utils/currency'


const ViewLargeSlideContent = ({ item, specs }) => {
   const [hover, setHover] = useState(false)

   return (
      <div className={cn('compare__view-large-slide-content', {'hover': hover })}>
         <Link
            className='compare__view-large-link'
            to={`/products/${item.url}/${item.productUrl}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
         >
            <img src={item.images[0]} alt='productI item' />
         </Link>
         <p>{currency(item.price)}</p>
         {specs.map((field, i) => (
            <span key={i}>
               <p>{item.specs[field] || '-'}</p>
            </span>
         ))}
      </div>
   )
}

export default ViewLargeSlideContent