import { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { homeAddressBar } from '../../redux/selectors';
import { useMediaQuery } from 'react-responsive'
import Tab from './tab/tab.component';
import { ReactComponent as Squares } from '../../assets/svg/squares.svg';
import styles from './address-bar.module.css';


const AdressBar = ({ addressBar }) => {
    const [activeId, setActiveId] = useState();
    const [interval, setInterval] = useState();
    const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' })

    const onLeave = useCallback(() => setInterval(setTimeout(() => (setActiveId(null)), 300)), [setActiveId]);
    const onEnter = useCallback(() => clearInterval(interval), [interval]);
    const toggleTab = useCallback((id) => (activeId === id) ? setActiveId(null) : setActiveId(id), [activeId]);

    return (
        <div
            className={styles.address}
            onMouseLeave={isDesktop ? onLeave : null}
            onMouseEnter={isDesktop ? onEnter : null}

        >
            <div className="container">
                <div className={styles.title} aria-hidden='true'>THE CROWN FOR YOUR KITCHEN</div>
                <ul className={styles.tabs_wrapper}>
                    {addressBar.map((data) =>
                        <Tab
                            key={data.id}
                            {...data}
                            toggleTab={toggleTab}
                            activeId={activeId}
                        />
                    )}
                </ul>
                <Squares className={styles.squares} />
            </div>
        </div >
    )
};

const mapStateToProps = (state) => ({
    addressBar: homeAddressBar(state)
});

export default connect(mapStateToProps)(AdressBar);