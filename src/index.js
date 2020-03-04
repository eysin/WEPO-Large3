import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import '../styles/site.css';
import '../styles/site.less';

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
