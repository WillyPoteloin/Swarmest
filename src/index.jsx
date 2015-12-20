import React from 'react';
import App from './components/app';

const app = document.createElement("div");
document.body.appendChild(app);
React.render(<App />, app);