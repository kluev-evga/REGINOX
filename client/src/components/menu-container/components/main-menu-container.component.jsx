import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeMainMenu } from '../../../redux/actions'
import { mainMenuIsOpen } from '../../../redux/selectors'
import { useMediaQuery } from 'react-responsive'
import Menu from 'react-burger-menu/lib/menus/reveal'
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg'


const MainMenuContainer = ({ children }) => {
   const isPhone = useMediaQuery({ query: '(max-width: 767.98px)' })
   const isDesktop = useMediaQuery({ query: '(max-width: 1199.98px)' })
   const isOpen = useSelector(mainMenuIsOpen)
   const dispatch = useDispatch()

   useEffect(() => { isOpen && dispatch(closeMainMenu()) }, [isPhone, isDesktop]) //eslint-disable-line
   const handleMenuStateChange = useCallback( state => !state.isOpen && dispatch(closeMainMenu()), [isOpen] ) //eslint-disable-line

   return (
      <Menu
         outerContainerId='outer-container'
         pageWrapId='page-wrap'
         onStateChange={handleMenuStateChange}
         isOpen={isOpen}
         customBurgerIcon={false}
         customCrossIcon={<div><CrossIcon />Закрыть</div>}
         width={isPhone ? '100%' : '400px'}>

      {children}

      </Menu>
   )
}

export default MainMenuContainer