import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';

const app = document.createElement("div");
document.body.appendChild(app);
ReactDom.render(<App />, app);