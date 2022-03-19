import FooterLinks from './footer-links/footer-links.component';
import FooterBar from './footer-bar/footer-bar.component';


const Footer = ({ isNotFound, isError }) => (
    <footer className='footer'>
        {!isNotFound && !isError && <FooterLinks />}
        <FooterBar />
    </footer>
);

export default Footer;