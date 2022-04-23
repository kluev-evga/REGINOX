import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './app-styles/app.scss'

import Layout from '../layout/layout.component'
import Loader from '../loader/loader.coponent'
import ContainerMenu from '../menu-container/container-menu.component'
import Home from '../../pages/home/home.component'


const Article = lazy(()=> import('../../pages/article/article.component'))
const Articles = lazy(()=> import('../../pages/articles/articles.component'))
const Cart = lazy(()=> import('../../pages/cart/cart-container.component'))
const Catalogs = lazy(()=> import('../../pages/catalogs/catalogs.component'))
const Compare = lazy(()=> import('../../pages/compare/compare.compnent'))
const Contacts = lazy(()=> import('../../pages/contacts/contacts.component'))
const Delivery = lazy(()=> import('../../pages/delivery/delivery.component'))
const Error = lazy(()=> import('../../pages/error/error.component'))
const ForBuyers = lazy(()=> import('../../pages/for-buyers/for-buyers.component'))
const ForPartners = lazy(()=> import('../../pages/for-partners/for-partners.component'))
const Information = lazy(()=> import('../../pages/information/information.component'))
const NotFound = lazy(()=> import('../../pages/not-found/not-found.component'))
const Order = lazy(()=> import('../../pages/order/order.component'))
const Partners = lazy(()=> import('../../pages/partners/partners.component'))
const Policy = lazy(()=> import('../../pages/policy/policy.component'))
const Proudct = lazy(()=> import('../../pages/product/product-container.component'))
const Proudcts = lazy(()=> import('../../pages/products/products-container.component'))
const Sertificates = lazy(()=> import('../../pages/sertificates/sertificates.component'))
const Promo = lazy(()=> import('../../pages/promo/promo.component'))
const WhyUs = lazy(()=> import('../../pages/why-us/why-us.component'))


const App = () => (
   <ContainerMenu>
      <main id='page-wrap'>
      <Suspense fallback={<Loader/>}>
         <Routes>
            <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>} />

                  <Route path='products' element={<Navigate to='/' replace />} />
                  <Route path='products/:url' element={<Proudcts/>} />
                  <Route path='products/:url/:productUrl' element={<Proudct/>} />

                  <Route path='cart' element={<Cart/>} />
                  <Route path='cart/order' element={<Order/>} />
                  <Route path='compare' element={<Compare/>} />

                  <Route path='promo' element={<Promo/>} />
                  <Route path='latest' element={<Promo latest={true} />} />

                  <Route path='why-us' element={<WhyUs/>} />
                  <Route path='partners' element={<Partners/>} />
                  <Route path='sertificates' element={<Sertificates/>} />
                  <Route path='articles' element={<Articles/>} />
                  <Route path='/articles/:article' element={<Article/>} />
                  <Route path='information' element={<Information/>} />
                  <Route path='information/buyers' element={<ForBuyers/>} />
                  <Route path='information/partners' element={<ForPartners/>} />
                  <Route path='catalogs' element={<Catalogs/>} />
                  <Route path='delivery' element={<Delivery/>} />
                  <Route path='contacts' element={<Contacts/>} />

                  <Route path='policy' element={<Policy/>} />

                  <Route path='/error' element={<Error/>} />
                  <Route path='/*' element={<NotFound/>} />
                  </Route>
                  </Routes>
         </Suspense>
      </main>
   </ContainerMenu>
)

export default App
// import Article from '../../pages/article/article.component'
// import Articles from '../../pages/articles/articles.component'
// import CartContainer from '../../pages/cart/cart-container.component'
// import Catalogs from '../../pages/catalogs/catalogs.component'
// import Compare from '../../pages/compare/compare.compnent'
// import Contacts from '../../pages/contacts/contacts.component'
// import Delivery from '../../pages/delivery/delivery.component'
// import Error from '../../pages/error/error.component'
// import ForBuyers from '../../pages/for-buyers/for-buyers.component'
// import ForPartners from '../../pages/for-partners/for-partners.component'
// import Information from '../../pages/information/information.component'
// import NotFound from '../../pages/not-found/not-found.component'
// import Order from '../../pages/order/order.component'
// import Partners from '../../pages/partners/partners.component'
// import Policy from '../../pages/policy/policy.component'
// import ProductContainer from '../../pages/product/product-container.component'
// import ProductsContainer from '../../pages/products/products-container.component'
// import Sertificates from '../../pages/sertificates/sertificates.component'
// import Promo from '../../pages/promo/promo.component'
// import WhyUs from '../../pages/why-us/why-us.component'