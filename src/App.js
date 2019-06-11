import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Search } from "./components/Search";
import store from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <nav className='navigation'>
                        <ul>
                            <li>
                                <NavLink exact to='/'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/search'>Search</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Route exact path='/' component={Home} />
                    <Route path='/search' component={Search} />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
