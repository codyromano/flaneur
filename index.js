import BasePage from 'pages/BasePage.jsx';
import {HashRouter} from 'react-router-dom';

const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render((
  <HashRouter>
    <BasePage/>
  </HashRouter>
), document.getElementById('root'));
