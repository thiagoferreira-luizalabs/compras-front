import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from "./routes/Routes"
import 'semantic-ui-css/semantic.min.css';
import "./index.css"


ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

registerServiceWorker();
