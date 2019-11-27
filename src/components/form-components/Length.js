import React from 'react'

export default function Length() {
  return (
    <div>
      <label htmlFor="duration">Length</label>
      <div className="duration">
        <input type="number" name="duration" id="duration" placeholder="hours" />
        <span className="double-dots">:</span>
        <input type="number" name="duration" id="duration" placeholder="minutes" />
        <span className="double-dots">:</span>
        <input type="number" name="duration" id="duration" placeholder="seconds" />
      </div>
    </div>
  )
}
