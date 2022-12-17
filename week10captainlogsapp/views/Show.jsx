import React, { Component } from 'react';

class Show extends Component {
  render() {
    const log = this.props.log;
    return (
      <div>
        <h1>Show Route</h1>
        <p>The {log.title} and {log.entry} </p>
        <p> The {log.shipIsBroken? `It is broken` : `It is not broken`} </p>
        <a href={"/logs"}> Log Home Page</a>


      </div>
    )
  }
}



export default Show;