import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from "./routes/Routes"
import "./index.css"
import './assets/semantic/dist/semantic.min.css';


ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

registerServiceWorker();
