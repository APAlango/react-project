import '../styles/HomePage.css'
import TravelerCards from "./TravelerCards";

const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            <div className="section">
                <h1>Travel planner<br/>in your pocket</h1>
                <p>
                    TravelWiser is a new platform connecting the travel community &
                    all the functions you need from a travel app.
                </p>
                <button className="button-pink button-round white-font">
                    Find a destination
                </button>
                <button className="button-blue button-round white-font">
                    Plan your trip
                </button>
            </div>
            <div className="section right">
                <h1>Everything in one app</h1>
                <p>
                    Including finding inspiration for next adventures, we help with
                    planning and booking. After learning your travel interests and
                    hobbies, our large data bank and clever AI is putting together the
                    perfect trip.
                </p>
            </div>
            <div className="whatweoffer">
                <h1>What we can offer you</h1>
                <div className="valueboxes">
                    <div className="valuebox">
                        <h2>Inspiration</h2>
                        <p>
                            We want to inspire people to<br />
                            travel more and explore the<br />
                            beauty of earth!
                        </p>
                    </div>
                    <div className="valuebox">
                        <h2>Shared experiences</h2>
                        <p>
                            We are building a community<br />
                            where you can share your<br />
                            exploration.
                        </p>
                    </div>
                    <div className="valuebox">
                        <h2>Tailored travels</h2>
                        <p>
                            Everybody have their ideas of<br />
                            perfect travels and we help them<br />
                            happen!
                        </p>
                    </div>
                </div>
            </div>
            <div className="join-us">
                <h1>
                    Join our worldwide community<br/>
                    of travelers
                    <TravelerCards />
                </h1>
                <button className="button-blue button-round">Sign up</button>
            </div>
        </div>
    );
}

export default HomePage;
