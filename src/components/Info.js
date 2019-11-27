import React, { Component } from 'react'

class Info extends Component {
  render() {
    const { title, genres, duration, oscars } = this.props;

    return (
      <>
        <h2 className="title">{title}</h2>
        <span className="genre">
          <h3>Genres</h3>
          {genres.map(genre => <span className="genre-item" key={genre}>{genre}</span>)}
        </span>
        <span className="duration">
          <h3>Length</h3>
          {duration}
        </span>
        {
          oscars > 0
          ?
          <span className="oscars"><h3>Oscars</h3> {oscars}</span>
          :
          <span className="oscars"><h3>Oscars</h3> none</span>
        }
      </>
    )
  }
}

export default Info;