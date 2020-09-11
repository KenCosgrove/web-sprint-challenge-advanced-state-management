import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom'
import {rootReducer} from './store/reducers/rootReducer'
import "./index.css";
import App from "./components/App";


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
    <Router>
    <App />
    </Router>
</Provider>, document.getElementById("root"));