import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { appSearchIsOpen, appError } from '../../redux/selectors'
import Header from '../header/header.component'
import Footer from '../footer/footer.component'
import Search from '../search/search.component'


const Layout = () => {
   const searchIsOpen = useSelector(appSearchIsOpen)
   const appIsNotError = !useSelector(appError)

   return (
      <>
         {appIsNotError && <Header/>}
         {searchIsOpen && <Search /> }
         <Outlet />
         {appIsNotError && <Footer />}
      </>
   )
}

export default Layout