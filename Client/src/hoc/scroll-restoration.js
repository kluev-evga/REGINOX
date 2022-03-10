import { useEffect } from 'react';

const srollRestoration = (WrappedComponent) => (props) => {
    useEffect(() => {window.scrollTo(0, 0)}, []);
    return <WrappedComponent {...props} />
};

export default srollRestoration;