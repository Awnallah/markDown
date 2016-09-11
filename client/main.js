import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';
import { Bins } from '../imports/collections/bins';

//routes: contains all mapping btw urls and components
const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={BinsList} />
			<Route path='bins' component={BinsMain} />
		</Route>
	</Router>

	);

Meteor.startup(() => {
	ReactDom.render(routes, document.querySelector('.render-target'))
});