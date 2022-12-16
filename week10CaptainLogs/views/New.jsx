import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <div>
        <form action="/logs" method="POST">
            title: <input type="text" name="title" /> <br />
            entry: <input type="textarea" name="entry" /> <br />
            shipIsBroken: <input type="checkbox" />

        </form>




      </div>
    )
  }
}
