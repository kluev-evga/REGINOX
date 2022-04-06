import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { closeMenu } from '../../redux/actions';
import { isMainMenu, menuIsOpen } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive';
import Menu from 'react-burger-menu/lib/menus/reveal';
import MainMenu from '../main-menu/main-menu.component';
import Filters from '../filters/filters.component';
import { ReactComponent as CrossIcon } from '../../assets/svg/cross.svg';
import './menu-container.css';


const MenuContainer = ({ children, isOpen, isMainMenu, closeMenu }) => {
    const isPhone = useMediaQuery({ query: '(max-width: 767.98px)' });
    const isDesktop = useMediaQuery({ query: '(max-width: 1199.98px)' });
    useEffect(() => { isOpen && closeMenu() }, [isPhone, isDesktop]);//eslint-disable-line
    const handleMenuStateChange = useCallback((state) => !state.isOpen && isOpen && closeMenu(), [isOpen]);//eslint-disable-line

    return (
        <div id="outer-container">
            <Menu
                outerContainerId={"outer-container"}
                pageWrapId={"page-wrap"}
                onStateChange={handleMenuStateChange}
                isOpen={isOpen}
                customBurgerIcon={false}
                customCrossIcon={<div><CrossIcon />Закрыть</div>}
                width={isPhone ? '100%' : '400px'}
                right={isMainMenu ? false : true}>

                {isMainMenu ? <MainMenu /> : <Filters />}

            </Menu>

            {children}

        </div>
    )
}

const mapStateToProps = (state) => ({
    isMainMenu: isMainMenu(state),
    isOpen: menuIsOpen(state)
})

export default connect(mapStateToProps, { closeMenu })(MenuContainer)