import React from 'react'

function LengthForm() {
  return (
    <div className="length-form form-element">
      <label htmlFor="duration">Length</label>
      <div className="duration">
        <input type="number" name="duration" id="duration" placeholder="h" />
        <span className="double-dots">:</span>
        <input type="number" name="duration" id="duration" placeholder="m" />
        <span className="double-dots">:</span>
        <input type="number" name="duration" id="duration" placeholder="s" />
      </div>
    </div>
  )
}

export default LengthForm;