import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import reminders from "./reducers/"
import { Provider } from "react-redux";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(reminders, composeWithDevTools(applyMiddleware(logger)))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
