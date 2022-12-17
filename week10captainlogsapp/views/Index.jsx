import React, { Component } from 'react'


class Index extends Component {
  render(){
    console.log(this.props.logs);
    const {logs} = this.props;
    return (
      <div>
        <nav>
            <a href="/logs/new">Create A New Log</a>
        </nav>
        <h1> Logs Index Page</h1>
        <ul>
            {logs.map((log)=>{
                return (
                    <li> the <a href={`/logs/${log.id}`}> {log.title} </a> matches {log.entry}
                    <br />
                    {log.shipIsBroken? `It is broken`:`It is not broken`}
                    <br />
                    <form action={`/logs/${log.id}?_method=DELETE`} method="POST">
                        <input type="submit" value='DELETE' />
                    </form>
                    <a href={`/logs/${log.id}/edit`}>Edit This Logs</a>

                    </li>
                )
            })}

        </ul>
     </div>
    )
  }
}


module.exports = Index;