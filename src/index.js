import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

let rootElement = document.getElementById('root');
let root2Element = document.getElementById('root2');

ReactDOM.render(<App/>, rootElement);
ReactDOM.render(<App/>, root2Element);

// <div id="root">
//   <App></App>
// </div>
// <div id="root2">
//   <App></App>
// </div>
