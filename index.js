import BasePage from 'pages/BasePage.jsx';
import {HashRouter} from 'react-router-dom';

const React = require('react');
const ReactDOM = require('react-dom');

React.temp = 'TODO: Remove this hack to fix ESLint error';

ReactDOM.render((
  <HashRouter>
    <BasePage/>
  </HashRouter>
), document.getElementById('root'));
