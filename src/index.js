import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

// Styles
import style from './scss/app.scss'

// Reducers
import appReducer from './reducers/index';
import App from './components/app';

// Creating store
let store = createStore(
    appReducer,
    compose (
        applyMiddleware(ReduxThunk)
    )
);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#swarmest')
);
