import React from 'react'

function OscarsForm() {
  return (
    <div className="oscars-form form-element">
      <label htmlFor="oscars">Oscars</label>
      <input
        type="number"
        name="oscars"
        id="oscars"
        placeholder="number of oscars"
      />
    </div>
  );
}

export default OscarsForm;