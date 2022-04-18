import { Routes, Route, Navigate } from 'react-router-dom'

import Layout from '../layout/layout.component'
import ContainerMenu from '../menu-container/container-menu.component'
import Cart from '../../pages/cart/cart.component'
import Order from '../../pages/order/order.component'
import Promo from '../../pages/promo/promo.component'
import Compare from '../../pages/compare/compare.compnent'
import Home from '../../pages/home/home.component'
import ProductsContainer from '../../pages/products/products-container.component'
import ProductContainer from '../../pages/product/product-container.component'
import WhyUs from '../../pages/why-us/why-us.component'
import Partners from '../../pages/partners/partners.component'
import Sertificates from '../../pages/sertificates/sertificates.component'
import Articles from '../../pages/articles/articles.component'
import Article from '../../pages/article/article.component'
import Information from '../../pages/information/information.component'
import ForBuyers from '../../pages/for-buyers/for-buyers.component'
import ForPartners from '../../pages/for-partners/for-partners.component'
import Catalogs from '../../pages/catalogs/catalogs.component'
import Delivery from '../../pages/delivery/delivery.component'
import Contacts from '../../pages/contacts/contacts.component'
import Policy from '../../pages/policy/policy.component'
import NotFound from '../../pages/not-found/not-found.component'
import Error from '../../pages/error/error.component'

import './app-styles/app.scss'


const App = () => (
   <ContainerMenu>
      <main id='page-wrap'>
         <Routes>
            <Route path="/" element={<Layout/>}>
               <Route index element={<Home/>} />

               <Route path='products' element={<Navigate to='/' replace />} />
               <Route path='products/:url' element={<ProductsContainer/>} />
               <Route path='products/:url/:productUrl' element={<ProductContainer/>} />

               <Route path='cart' element={<Cart/>} />
               <Route path='cart/order' element={<Order/>} />
               <Route path='compare' element={<Compare/>} />

               <Route path='promo' element={<Promo/>} />
               <Route path='latest' element={<Promo latest={true}/>} />

               <Route path='why-us' element={<WhyUs/>} />
               <Route path='partners' element={<Partners/>} />
               <Route path='sertificates' element={<Sertificates />} />
               <Route path='articles' element={<Articles />} />
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
      </main>
   </ContainerMenu>
)

export default App