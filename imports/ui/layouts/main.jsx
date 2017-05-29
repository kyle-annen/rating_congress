import React from 'react';

import { Header } from '../components/header.jsx';
import { BreadCrumbs } from '../components/breadcrumbs.jsx';

export class Main extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <BreadCrumbs />
      </div>
    )
  }
}