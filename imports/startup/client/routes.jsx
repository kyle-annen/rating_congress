import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Index } from '../../ui/components/index.jsx';
import { Header } from '../../ui/layouts/header.jsx';

import { About } from '../../ui/pages/about.jsx';
import { Contact } from '../../ui/pages/contact.jsx';

Meteor.startup( () => {
	render(
		<BrowserRouter>
			<div>
				<Header />
				<div className="container">
					<Route exact path="/" component={ Index } />
					<Route path="/about" component={ About } />
					<Route path="/contact" component={ Contact } />
				</div>
			</div>
		</BrowserRouter>,
		document.getElementById('react-root')
	);
})

