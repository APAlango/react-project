import "../styles/Destination.css"

const Destination = () => {
    return (
        <div className="destination-wrapper">
            <div className="steps-display">
                <div className="step-1">
                    <p className="step-nr">Step 1</p>
                    <p className="step-name">Activities</p>
                </div>
                <div className="step-1">
                    <p className="step-nr">Step 1</p>
                    <p className="step-name">Activities</p>
                </div>
            </div>
            <div id="progress-bar" />

            <div className="question">
                What would you like to do on your next adventure?
            </div>

            <div className="option-box">
                <div className="option">Relaxation</div>
                <div className="option">Family & kids</div>
                <div className="option">Nature</div>
                <div className="option">Culture</div>
                <div className="option">Sports</div>
                <div className="option">Gastronomy</div>
                <div className="option">Extreme</div>
            </div>

            <button id="next-step" className="button-pink">Next step</button>
        </div>
    );
}

export default Destination;
