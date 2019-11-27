import React, { Component } from 'react'
import Poster from './Poster';

class Info extends Component {
  render() {

    console.log('INFO PROPS:', this.props);

    return (
      <>
        <div className="poster">
          <Poster image={this.props.poster} />
        </div>
        <div className="details">
          
        </div>
      </>
    )
  }
}

export default Info;