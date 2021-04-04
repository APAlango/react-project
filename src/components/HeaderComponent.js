import '../styles/HeaderComponent.css'

const HeaderComponent = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="brand">TravelWiser</div>
            </div>
            <div className="navbar-right">
                <div className="navbar-list-item">Find destination</div>
                <div className="navbar-list-item">Plan your trip</div>
                <div className="navbar-list-item">Blog</div>
                <div id="community" className="navbar-list-item">Community</div>
                <button id="login-button">Login</button>
                <button className="button-pink">Sign up</button>
            </div>
        </div>
    );
}

export default HeaderComponent;
