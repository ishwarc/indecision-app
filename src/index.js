import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './Counter';
import VisibilityToggle from './visibilitytoggle';
import IndecisionApp from './IndecisionApp';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
