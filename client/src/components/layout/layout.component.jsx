import { Outlet } from 'react-router-dom'
import Header from '../header/header.component'
import Footer from '../footer/footer.component'
// import Search from '../search/search.component'
// <Search />


const Layout = () => (
   <>
      <Header/>
      <Outlet />
      <Footer />
   </>
)

export default Layout