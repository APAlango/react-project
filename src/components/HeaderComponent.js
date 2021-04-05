import '../styles/HeaderComponent.css'
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="brand">
                    <Link to="/">TravelWiser</Link>
                </div>
            </div>
            <div className="navbar-right">
                <div className="navbar-list-item">
                    <Link to="/destination">Find destination</Link>
                </div>
                <div className="navbar-list-item">
                    <Link to="/planner">Plan your trip</Link>
                </div>
                <div className="navbar-list-item">Blog</div>
                <div id="community" className="navbar-list-item">Community</div>
                <button id="login-button">Login</button>
                <button className="button-pink">Sign up</button>
            </div>
        </div>
    );
}

export default HeaderComponent;
