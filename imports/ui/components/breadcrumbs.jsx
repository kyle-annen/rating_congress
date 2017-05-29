import React from 'react';

export class BreadCrumbs extends React.Component {

  getBreadcrumbs(){
    const url = window.location.href; 
    const urlArr = url.split("/");
    let breadCrumbs = [];

    for (let i = 3; i < urlArr.length; i++) {
      if(i === 3) {
        breadCrumbs.push(["/", "Home"]);
      } else {
        const urlString = urlArr[i];
        const label = urlString.charAt(0).toUpperCase +
          urlString.slice(1, urlString.length);
        const linkPath = "/" + urlArr.slice(3, i).join("/");
        breadCrumbs.push( [linkPath, label] );
      }
    }

    return breadCrumbs;
  }

  render(){
    
    const breadCrumbs = JSON.stringify(this.getBreadcrumbs());

    return(
      <div className="container">
        <p>{ breadCrumbs }</p>
      </div>
    )
  }
}