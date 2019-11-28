import React, { useState } from 'react'

function ActorsForm() {

  const [actorName, setActorName] = useState('');
  const [actorRole, setActorRole] = useState('');
  
  const [actors, setActors] = useState([]);
  
  function handleOnClick(e) {

    e.preventDefault();
    
    setActors(() => {
      let arr = actors;
      let newActor = {
        role: actorRole,
        name: actorName
      }
      
      arr.push(newActor);

      setActors(arr);
    })

    setActorName('');
    setActorRole('');
  }

  return (
    <div className="form-element">
      <label htmlFor="actors">Actors</label>
      <div>
        {actors && actors.map(actor => {
          return <div className="form-field-info">{actor.name} <span className="as">as</span> {actor.role}</div>
        })}
      </div>
      <div className="actor-inputs">
        <input
          type="text"
          name="actor-name"
          id="actor-name"
          placeholder="insert actor real name"
          onChange={(e) => setActorName(e.target.value)}
          value={actorName}
        />
        <input
          type="text"
          name="actor-role"
          id="actor-role"
          placeholder="insert actor role"
          onChange={(e) => setActorRole(e.target.value)}
          value={actorRole}
        />
        <button onClick={handleOnClick} className="add-actor-btn">+</button>
      </div>
    </div>
  );
}

export default ActorsForm;