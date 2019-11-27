import React, { Component } from 'react';
import getRating from '../getRating';

class Rating extends Component {

  stars = getRating(this.props.rating);

  render() {
    return (
      <span className="rating">
        <h3>Rating</h3>
        <div className="stars">
          {this.stars}
        </div>
      </span>
    )
  }
}

export default Rating;