import React, { Component } from 'react'

class Actors extends Component {
  render() {
    return (
      <span className="actors">
        <h3>Actors</h3> 
        <ul>
          {this.props.actors.map(actor => (
              <li key={actor.name}>
                {actor.name}
                <span className="as"> as </span>
                {actor.role}
              </li>
            ))}
        </ul>
      </span>
    )
  }
}

export default Actors;