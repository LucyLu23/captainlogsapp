import React, { Component } from 'react'
import Log from '../models/logs';

class Edit extends Component {
  render() {
    const {log} = this.props;
    console.log(log);

    return (
      <div>
        <nav>
            <a href="/logs"> Change My Mind</a>
        </nav>
        <h1 style={{color:"pink"}}> Edit Log</h1>
        <form action={`/logs/${this.props.log.id}?_method=PUT`} method='POST'>
            Title: <input type="text" name="title" defaultValue={log.title}  style={{background: 'lightblue', fontsize:16}}/>
            <br />
            Entry: <input type="textarea" name="entry" defaultValue={log.entry} />
            <br />
            IsShipBroken: {Log.shipIsBroken? ( 
                <input type="checkbox" name="shipIsBroken" />
             ):( <input type="checkbox" name="shipIsBroken" />)}
             <br />
             <input type="submit" value='submit changes' />

        </form>
      </div>
    )
  }
}




export default Edit;