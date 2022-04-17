import { useState } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'


const ViewLargeSlideContent = ({ item, specs }) => {
   const [hover, setHover] = useState(false)

   return (
      <div className={cn('compare__view-large-slide-content', {'hover': hover })}>
         <Link
            className='compare__view-large-link'
            to={`/products/${item.url}/${item.productUrl}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <img
               src={process.env.PUBLIC_URL + item.images[0]}
               alt='productI item'
            />
         </Link>
         <p>{item.price.toLocaleString('ru-RU', {style: 'currency',  minimumFractionDigits:0, currency:'RUB'})}</p>
         {specs.map((field, i) => (
            <span key={i}>
               <p>{item.specs[field] || '-'}</p>
            </span>
         ))}
      </div>
   )
}

export default ViewLargeSlideContent