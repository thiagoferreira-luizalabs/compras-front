import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from "./routes/Routes"
import "./index.css"
import './semantic/dist/semantic.min.css';


ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

registerServiceWorker();
