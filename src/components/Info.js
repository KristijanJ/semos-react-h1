import React from 'react'

function Info({ title, genres, duration, oscars }) {
  return (
    <>
      <h2 className="title">{title}</h2>
      <div className="genre">
        <h3>Genres</h3>
        {genres.map(genre => <span className="genre-item" key={genre}>{genre}</span>)}
      </div>
      <div className="duration">
        <h3>Length</h3>
        {duration}
      </div>
      {
        oscars > 0
        ?
        <div className="oscars"><h3>Oscars</h3> {oscars}</div>
        :
        <div className="oscars"><h3>Oscars</h3> none</div>
      }
    </>
  )
}

export default Info;