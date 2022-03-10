import { useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import FooterLinks from '../footer-links/footer-links.component';
import FooterBar from '../footer-bar/footer-bar.component';


const Footer = () => {
    const routeMatch = useRouteMatch('/:slug?');

    const notFound = useMemo(() => routeMatch.params.slug === 'not-found', [routeMatch])

    return (
        <footer>
            {!notFound && <FooterLinks />}
            <FooterBar />
        </footer>
    );
};

export default Footer;