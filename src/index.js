import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware} from 'redux';








const storeInstance = createStore(

    // combineReducers(
        // {

        // }
    // ),
    applyMiddleware(
        logger
    )

);

ReactDOM.render(
<Provider store= {storeInstance}>
    <App />
 </Provider>
, document.getElementById('root'));