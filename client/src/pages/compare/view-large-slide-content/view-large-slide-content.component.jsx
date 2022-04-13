import { useState } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import styles from './view-large-slide-content.module.css'

const ViewLargeSlideContent = ({ item, specs }) => {
   const [hover, setHover] = useState(false)

   return (
      <div className={cn(styles.container, { [styles.hover]: hover })}>
         <Link
            className={styles.link}
            to={`/products/${item.url}/all/${item.productUrl}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <img
               src={process.env.PUBLIC_URL + item.images[0]}
               alt='productI item'
            />
         </Link>
         {specs.map((field, i) => (
            <span key={i}>
               <p>{item.specs[field] || '-'}</p>
            </span>
         ))}
      </div>
   )
}

export default ViewLargeSlideContent
