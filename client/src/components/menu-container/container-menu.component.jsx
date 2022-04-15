import { useMediaQuery } from 'react-responsive'
import { useMatch } from 'react-router-dom'
import ContainerMainMenu from './components/container-main-menu.component'
import ContainerFiltersMenu from './components/container-filters-menu.component'
import MenuMain from '../menu-main/menu-main.component'
import Filters from '../filters/filters.component'


const ContainerMenu = ({ children }) => {
   const isProductPage = Boolean(useMatch({path: '/products', end: false}))
   const isNotDesktop = useMediaQuery({ query: '(max-width: 1199.98px)' })

   return (
      <div id='outer-container'>
         <ContainerMainMenu>
            <MenuMain />
         </ContainerMainMenu>

         {isProductPage && isNotDesktop &&
            <ContainerFiltersMenu>
               <Filters />
            </ContainerFiltersMenu>
         }

         {children}
      </div>
   )
}

export default ContainerMenu