import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const selectedPizzas = (state = [], action) => {
    if (action.type === 'ADD_PIE') {
        console.log('the selected pizzas are', action.payload);
        return [...state, action.payload];
    // } else if (action.type === 'REMOVE_PIE') {
    //     return [...state, selectedPizzas.filter(action.payload)]
    }
    return state;
}


const menuList = (state = [], action) => {
    if (action.type === 'APPEND_MENU') {
        console.log('inside MenuList');
        return action.payload;
    }

    return state
}

const customerReducer = (state = [], action) => {
    if(action.type === 'ADD_CUSTOMER_INFO'){
        return (action.payload)
    }
    return state;
}





const storeInstance = createStore(
    combineReducers(
        {
        menuList,
        customerReducer
        }
    ),
    applyMiddleware(
        logger
    )

);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>
    , document.getElementById('root'));
