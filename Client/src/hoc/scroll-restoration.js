import { useEffect } from 'react';

const srollRestoration = (WrappedComponent, noScroll) => (props) => {
    useEffect(() => {window.scrollTo({top: 0, behavior: noScroll ? 'auto':'smooth'})}, []);
    return <WrappedComponent {...props} />
};

export default srollRestoration;