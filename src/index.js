import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';
import Routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
	<BrowserRouter><Routes /></BrowserRouter>,
	document.getElementById('app')
);