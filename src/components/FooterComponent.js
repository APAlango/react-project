import '../styles/FooterComponent.css'
import facebook from '../logos/facebook.png';
import twitter from '../logos/twitter.png';
import instagram from '../logos/instagram.png';
import googleplus from '../logos/google-plus.png';

const FooterComponent = () => {
    return (
        <div className="footer">
            <div className="footer-upper">
                <div className="brand">TravelWiser</div>
                <div className="footer-links">
                    <div className="footer-link">Home</div>
                    <div className="footer-link">Find your destination</div>
                    <div className="footer-link">Plan your trip</div>
                    <div className="footer-link">Blog</div>
                    <div className="footer-link">Community</div>
                    <div className="footer-link">About us</div>
                    <div className="footer-link">Privacy Policy</div>
                    <div className="footer-link">Careers</div>
                </div>
                <div className="socials">
                    <img src={facebook} alt="Facebook"/>
                    <img src={twitter} alt="Twitter"/>
                    <img src={instagram} alt="Instagram"/>
                    <img src={googleplus} alt="Google+"/>
                </div>
            </div>
            <div className="footer-lower">
                TravelWiser 2021. All rights reserved.
            </div>
        </div>
    );
}

export default FooterComponent;
