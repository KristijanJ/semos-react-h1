import React, { Component } from 'react'

class Poster extends Component {
  render() {
    return <img src={this.props.poster} alt="poster"/>
  }
}

export default Poster;