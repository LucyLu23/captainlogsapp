import React, { Component } from 'react';
const myStyle2={
  color: 'red',
  fontFamily: "cursive"
}

class Show extends Component {
  render() {
    const log = this.props.log;
    return (
      <div>
        <h1>Show Route</h1>
        <p style={myStyle2}>The {log.title} and {log.entry} </p>
        <p style={myStyle2}> The {log.shipIsBroken? `It is broken` : `It is not broken`} </p>
        <a href={"/logs"} style={{color:'green'}}> Log Home Page</a>


      </div>
    )
  }
}



export default Show;