import { useMediaQuery } from 'react-responsive'
import { useMatch } from 'react-router-dom'
import MainMenuContainer from './components/main-menu-container.component'
import MainMenu from '../main-menu/main-menu.component'
import FiltersMenuContainer from './components/filters-menu-container.component'
import Filters from '../filters/filters.component'


const MenuContainer = ({ children }) => {
   const isProductPage = Boolean(useMatch({path: '/products', end: false}))
   const isNotDesktop = useMediaQuery({ query: '(max-width: 1199.98px)' })

   return (
      <div id='outer-container'>
         <MainMenuContainer>
            <MainMenu />
         </MainMenuContainer>

         {isProductPage && isNotDesktop &&
               <FiltersMenuContainer>
                  <Filters />
               </FiltersMenuContainer>
         }

         {children}
      </div>
   )
}

export default MenuContainer