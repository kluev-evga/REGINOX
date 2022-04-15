import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getTitle, productItem } from '../../redux/selectors'
import { useMediaQuery } from 'react-responsive'
import cn from 'classnames'
import Slider from './slider/slider.component'
import SliderPanel from './slider-panel/slider-panel.component'
import PhoneView from './phone-view/phone-view.component'
import TabsContainer from './tabs-container/tabs-container.component'
import SimilarProducts from './similar-products/similar-products.component'
import styles from './product.module.css'


const Product = () => {
   const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
   const ref = useRef()
   const { url, productUrl } = useParams()
   const { id, title, price, discount, specs, images, promo, newItem } = useSelector((state) => productItem(state, productUrl))
   const linkTitle = useSelector((state) => getTitle(state, url))

   useEffect(() => {ref.current.scrollIntoView({block: "start"})}, [])

   return (
      <div className='container' ref={ref}>
         <div className={'breadcrumbs ' + styles.breadcrumbs}>
            <Link to='/'>Главная</Link> / <Link to={`/products/${url}`}>{linkTitle}</Link> / <div>{title}</div>
         </div>

         <div className={styles.wrapper}>
            <Slider images={images} />
            <h1 className={styles.title}>
               {title}
               <i> </i>
               <span className={cn({ [styles.promo]: promo })}></span>
               <span className={cn({ [styles.new_item]: newItem })}></span>
            </h1>
            <SliderPanel id={id} price={price} discount={discount} />
            {isTablet ? <TabsContainer specs={specs} /> : <PhoneView specs={specs} />}
         </div>

         <div className={styles.container}>
            <SimilarProducts />
         </div>
      </div>
   )
}

export default Product