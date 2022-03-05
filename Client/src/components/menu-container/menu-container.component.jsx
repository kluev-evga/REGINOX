import { useCallback, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { closeMenu } from '../../redux/actions';
import { menuMain, menuIsOpen } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive';

import Menu from 'react-burger-menu/lib/menus/reveal';

import MenuBlock from './menu/menu.component';
import Filters from '../filters/filters.component';

import { ReactComponent as CrossIcon } from '../../assets/svg/cross.svg';
import './menu-container.css';


const MenuContainer = ({ children, isOpen, mainMenu, closeMenu }) => {
    const isPhone = useMediaQuery({ query: '(max-width: 767.99px)' });
    const isDesktop = useMediaQuery({ query: '(max-width: 1200px)' });

    const menuIsOpen = useMemo(() => isOpen, [isOpen]);
    useEffect(() => { menuIsOpen && closeMenu() }, [isPhone, closeMenu, menuIsOpen]);
    useEffect(() => { menuIsOpen && closeMenu() }, [isDesktop, closeMenu, menuIsOpen]);

    const handleMenuStateChange = useCallback((state) => !state.isOpen && closeMenu(), [closeMenu]);

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
                right={mainMenu ? false : true}
            >

                {mainMenu ? <MenuBlock /> : <Filters />}

            </Menu>

            <main id="page-wrap">
                {children}
            </main>
        </div>
    );
};

const mapStateToProps = (state) => ({
    mainMenu: menuMain(state),
    isOpen: menuIsOpen(state)
});

const mapDispatchToProps = { closeMenu };

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);