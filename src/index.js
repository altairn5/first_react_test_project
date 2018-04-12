import React from 'react';
import ReactDOM from 'react-dom';
// call boostrap before index.css to prevent index.css from being overwritten
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
