import React from 'react'

function Field( { label, type } ) {
const inputStyle = {
    opacity: "0.8",
    border: "none"
}

  return (
    <div class="field">
    <label>{label}</label>
    <input type={type} name={label} style={inputStyle}/>
  </div>
  )
}

export default Field