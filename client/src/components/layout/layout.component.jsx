import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { appSearchIsOpen } from '../../redux/selectors'
import Header from '../header/header.component'
import Footer from '../footer/footer.component'
import Search from '../search/search.component'


const Layout = () => {
   const searchIsOpen = useSelector(appSearchIsOpen)

   return (
      <>
         <Header/>
         {searchIsOpen && <Search /> }
         <Outlet />
         <Footer />
      </>
   )
}

export default Layout