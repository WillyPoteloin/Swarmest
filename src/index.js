import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// Styles
import style from './scss/app.scss'

// Reducers
import appReducer from './reducers/index';
import App from './components/app';

// Creating store
let store = createStore(appReducer);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#swarmest')
);
