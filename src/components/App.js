import '../styles/App.css';
import HeaderComponent from "./HeaderComponent";
import HomePage from "./HomePage";
import FooterComponent from "./FooterComponent";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Planner from "./Planner";
import Destination from "./Destination";

function App() {

    const routes = [
        {
            component: App,
            routes: [
                {
                    path: "/",
                    exact: true,
                    component: HomePage
                },
                {
                    path: "/planner",
                    component: Planner,
                },
                {
                    path: "/destination",
                    component: Destination
                }
            ]
        }
    ];

    return (
      <Router>
          <div className="app-wrapper">
              <HeaderComponent />
              {/*<Switch>*/}
              {/*    <Route exact path="/"><HomePage /><FooterComponent /></Route>*/}
              {/*    <Route path="/planner"><Planner /></Route>*/}
              {/*    <Route path="/destination"><Destination /></Route>*/}
              {/*</Switch>*/}
          </div>
      </Router>
    );
}

export default App;
