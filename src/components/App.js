import '../styles/App.css';
import HeaderComponent from "./HeaderComponent";
import HomePage from "./HomePage";
import FooterComponent from "./FooterComponent";

function App() {
  // Routeriga peaks olema siin vaid HeaderComponent ja siis routeri stackis pealmine
  return (
    <div className="app-wrapper">
        <HeaderComponent />
        <HomePage travelers={[]} />
        <FooterComponent />
    </div>
  );
}

export default App;
