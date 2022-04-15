import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filtersMenuIsOpen } from '../../../redux/selectors'
import Menu from 'react-burger-menu/lib/menus/reveal'
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';
import {action as toggleMenu} from 'redux-burger-menu';
import { useMediaQuery } from 'react-responsive'
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg'


const MenuBody = reduxBurgerMenu(Menu, 'filters')

const ContainerFiltersMenu = ({ children }) => {
   const isPhone = useMediaQuery({ query: '(max-width: 767.98px)' })
   const isDesktop = useMediaQuery({ query: '(max-width: 1199.98px)' })
   const isOpen = useSelector(filtersMenuIsOpen)
   const dispatch = useDispatch()

   useEffect(() => { isOpen &&  dispatch(toggleMenu(false, 'filters')) }, [isPhone, isDesktop]) //eslint-disable-line

   return (
      <MenuBody
         outerContainerId={'outer-container'}
         pageWrapId={'page-wrap'}
         customBurgerIcon={false}
         customCrossIcon={ <div><CrossIcon />Закрыть</div> }
         width={isPhone ? '100%' : '400px'}
         right
      >

      {children}

      </MenuBody>
   )
}

export default ContainerFiltersMenu