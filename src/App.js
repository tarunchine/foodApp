import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Details from "./components/Details/Details";
import { Home } from "./components/Home";
import store from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/details/:name' component={Details} />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
