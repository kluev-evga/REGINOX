import { Switch, Route, Redirect } from 'react-router-dom'

import MenuContainer from '../menu-container/menu-container.component'
import Header from '../header/header.component'
import Footer from '../footer/footer.component'
import Search from '../search/search.component'

import Home from '../../pages/home/home.component'
import ProductsRoutes from '../products-routes/products-routes.component'
import Cart from '../../pages/Cart/cart.component'
import Promo from '../../pages/promo/promo.component'
import Compare from '../../pages/compare/compare.compnent'

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

import SwiperCore, {
   Pagination,
   Navigation,
   A11y,
   Autoplay,
   Thumbs,
} from 'swiper'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import 'swiper/scss/thumbs'
import 'swiper/scss/a11y'

import './app.scss'

SwiperCore.use([Pagination, Navigation, A11y, Autoplay, Thumbs])

// <Search />



const App = () => (
   <MenuContainer>
      <main id='page-wrap'>
         <Header />

         <Switch>
            <Redirect exact from='/' to='/home' />
            <Redirect exact from='/products' to='/home' />

            <Route exact path='/home' component={Home} />

            <Route exact path='/products/:url/:categoryUrl?/:productUrl?' component={ProductsRoutes} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/promo' component={Promo} />
            <Route exact path='/latest' render={() => <Promo latest={true} />} />
            <Route exact path='/compare' component={Compare} />

            <Route exact path='/why-us' component={WhyUs} />
            <Route exact path='/partners' component={Partners} />
            <Route path='/sertificates' component={Sertificates} />
            <Route exact path='/articles' component={Articles} />
            <Route exact path='/articles/:article' component={Article} />
            <Route exact path='/information' component={Information} />
            <Route exact path='/information/buyers' component={ForBuyers} />
            <Route exact path='/information/partners' component={ForPartners} />
            <Route exact path='/catalogs' component={Catalogs} />
            <Route exact path='/delivery' component={Delivery} />
            <Route exact path='/contacts' component={Contacts} />

            <Route exact path='/policy' component={Policy} />

            <Route exact path='/error' component={Error} />
            <Route component={NotFound} />
         </Switch>

         <Footer />
      </main>
   </MenuContainer>
)

export default App
