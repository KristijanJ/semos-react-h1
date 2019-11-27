import React, { Component } from 'react'

class Rating extends Component {
  render() {
    return (
      <span className="rating">
        <h3>Rating</h3>
        {this.props.rating}
      </span>
    )
  }
}

export default Rating;