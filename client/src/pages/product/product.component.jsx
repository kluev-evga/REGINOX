import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getTitle, productItem } from '../../redux/selectors'
import { useMediaQuery } from 'react-responsive'
import cn from 'classnames'
import Slider from './slider/slider.component'
import SliderPanel from './slider/slider-panel.component'
import TabsContainerLargeView from './tabs/tabs-container-large-view.component'
import TabsContainerPhoneView from './tabs/tabs-container-phone-view.component'
import SimilarProducts from './similar-products/similar-products.component'


const Product = () => {
   const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
   const ref = useRef()
   const { url, productUrl } = useParams()
   const { id, title, price, discount, specs, images, promo, newItem } = useSelector((state) => productItem(state, productUrl))
   const linkTitle = useSelector((state) => getTitle(state, url))

   useEffect(() => {ref.current.scrollIntoView({block: "start"})}, [])

   return (
      <div className='container product' ref={ref}>
         <div className='breadcrumbs product__breadcrumbs'>
            <Link to='/'>Главная</Link> / <Link to={`/products/${url}`}>{linkTitle}</Link> / <div>{title}</div>
         </div>

         <div className='product__slider-container'>
            <Slider images={images} />
            <h1 className='product__title'>
               {title}&nbsp;
               <span className={cn({ 'promo': promo })}></span>
               <span className={cn({ 'new-item': newItem })}></span>
            </h1>
            <SliderPanel id={id} price={price} discount={discount} />
            {isTablet ? <TabsContainerLargeView specs={specs} /> : <TabsContainerPhoneView specs={specs} />}
         </div>

         <div className='product__similar-products-container'>
            <SimilarProducts />
         </div>
      </div>
   )
}

export default Product