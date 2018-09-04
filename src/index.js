import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from "./root";
import configureStore from "./store";
import registerServiceWorker from './registerServiceWorker';

let store = configureStore();
ReactDOM.render(<Root store={store} />, document.getElementById('root'));

registerServiceWorker();