import { Routes, Route, Navigate } from 'react-router-dom'

import Layout from '../layout/layout.component'
import Home from '../../pages/home/home.component'
// import ProductsRoutes from '../products-routes/products-routes.component'
import ProductsContainer from '../../pages/products/products.container'
// import Cart from '../../pages/Cart/cart.component'
// import Promo from '../../pages/promo/promo.component'
// import Compare from '../../pages/compare/compare.compnent'

import MenuContainer from '../menu-container/menu-container.component'


import WhyUs from '../../pages/why-us/why-us.component'
import Partners from '../../pages/partners/partners.component'
import LayoutSertificates from '../layout-sertificates/layout-sertificates.component'
import SertificatesPage from '../../pages/sertificates/sertificates-page/sertificates-page.component'
import SertificatePopUp from '../../pages/sertificates/sertificate-pop-up/sertificate-pop-up.component'
// import Articles from '../../pages/articles/articles.component'
// import Article from '../../pages/article/article.component'
// import Information from '../../pages/information/information.component'
// import ForBuyers from '../../pages/for-buyers/for-buyers.component'
// import ForPartners from '../../pages/for-partners/for-partners.component'
// import Catalogs from '../../pages/catalogs/catalogs.component'
// import Delivery from '../../pages/delivery/delivery.component'
// import Contacts from '../../pages/contacts/contacts.component'

// import Policy from '../../pages/policy/policy.component'

import NotFound from '../../pages/not-found/not-found.component'
// import Error from '../../pages/error/error.component'

import SwiperCore, { Pagination, Navigation, EffectCreative, A11y, Autoplay, Thumbs } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import 'swiper/css/effect-creative'
import 'swiper/scss/thumbs'
import 'swiper/scss/a11y'

import './global-styles/app.scss'

SwiperCore.use([Pagination, Navigation, EffectCreative, A11y, Autoplay, Thumbs])




const App = () => (
   <MenuContainer>
      <main id='page-wrap'>
         <Routes>
            <Route path="/" element={<Layout/>}>
               <Route index element={<Home/>} />
               <Route path='products' element={<Navigate to='/' replace />} />
               <Route path='products/:url' element={<ProductsContainer/>} />

               <Route path='why-us' element={<WhyUs/>} />
               <Route path='partners' element={<Partners/>} />

               <Route path='sertificates' element={<LayoutSertificates/>}>
                  <Route index element={<SertificatesPage />} />
               </Route>
            </Route>

            <Route path="/sertificates/:sertificateId" element={<LayoutSertificates/>}>
               <Route index element={<SertificatePopUp />} />
            </Route>

            <Route path='/not-found' element={<NotFound/>}/>
         </Routes>
      </main>
   </MenuContainer>
)

export default App


// const App = () => (
//    <Routes>
//       <Route path="/" element={<Layout/>}>
//          <Route index element={<Home/>} />
//          <Route path='products' element={<Navigate to='/' replace />} />
//          <Route path='products/:url' element={<ProductsContainer/>} />

//          <Route path='why-us' element={<WhyUs/>} />
//          <Route path='partners' element={<Partners/>} />

//          <Route path='/sertificates' element={<LayoutSertificates/>}>
//             <Route index element={<SertificatesPage />} />
//          </Route>
//       </Route>

//       <Route path="/sertificates/:sertificateId" element={<LayoutSertificates/>}>
//          <Route index element={<SertificatePopUp />} />
//       </Route>

//       <Route path='/not-found' element={<NotFound/>}/>
//    </Routes>
// )






















//             <Route exact path='/articles' component={Articles} />
//             <Route exact path='/articles/:article' component={Article} />
//             <Route exact path='/information' component={Information} />
//             <Route exact path='/information/buyers' component={ForBuyers} />
//             <Route exact path='/information/partners' component={ForPartners} />
//             <Route exact path='/catalogs' component={Catalogs} />
//             <Route exact path='/delivery' component={Delivery} />
//             <Route exact path='/contacts' component={Contacts} />


//             <Route exact path='/products/:url/:categoryUrl?/:productUrl?' component={ProductsRoutes} />
//             <Route exact path='/cart' component={Cart} />
//             <Route exact path='/promo' component={Promo} />
//             <Route exact path='/latest' render={() => <Promo latest={true} />} />
//             <Route exact path='/compare' component={Compare} />


//             <Route exact path='/policy' component={Policy} />

//             <Route exact path='/error' component={Error} />
//             <Route component={NotFound} />