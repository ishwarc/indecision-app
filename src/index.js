import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './Components/IndecisionApp';



import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
registerServiceWorker();
