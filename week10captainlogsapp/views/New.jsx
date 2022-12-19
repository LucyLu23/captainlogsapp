import React, { Component } from 'react'
const myStyle ={
    color: 'green',
    fontSize: 23
}
 class New extends Component {
  render() {
    return (
      <div>
        <h1>New Log page </h1>
        <form action="/logs" method="POST">
        Title: <input type="text" name='title' /> 
        <br />
        <br />
        Entry: <input type="textarea" name='entry' />
         <br />
         <br />
        shipIsBroken: <input type="checkbox" name='shipIsBroken' />
         <br />
         <br />
        <input type="submit" name=''  value="CreateNewLog" />
        </form>
        <br />
        <br />
        <a href="/logs" style ={myStyle} > I do want to create a new log</a>
        </div>
    )
  }
}



export default New;