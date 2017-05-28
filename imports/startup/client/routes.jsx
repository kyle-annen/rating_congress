import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Index } from '../../ui/components/index.jsx';

Meteor.startup( () => {

    render(
        <BrowserRouter> 
            <Route path="/" component={ Index } />
        </BrowserRouter>,
        document.getElementById('react-root')
    );
})

