import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { mainMenuIsOpen } from '../../../redux/selectors'
import { useMediaQuery } from 'react-responsive'
import Menu from 'react-burger-menu/lib/menus/reveal'
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';
import {action as toggleMenu} from 'redux-burger-menu';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg'


const MenuBody = reduxBurgerMenu(Menu, 'main')

const ContainerMainMenu = ({ children }) => {
   const isPhone = useMediaQuery({ query: '(max-width: 767.98px)' })
   const isDesktop = useMediaQuery({ query: '(max-width: 1199.98px)' })
   const isOpen = useSelector(mainMenuIsOpen)
   const dispatch = useDispatch()

   useEffect(() => { isOpen && dispatch(toggleMenu(false, 'main')) }, [isPhone, isDesktop]) //eslint-disable-line

   return (
      <MenuBody
         outerContainerId='outer-container'
         pageWrapId='page-wrap'
         customBurgerIcon={false}
         customCrossIcon={<div><CrossIcon />Закрыть</div>}
         width={isPhone ? '100%' : '400px'}
      >

      {children}

      </MenuBody>
   )
}

export default ContainerMainMenu