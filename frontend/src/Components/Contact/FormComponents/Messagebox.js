import React from 'react'

function Messagebox({}) {
    const inputStyle = {
        opacity: "0.85",
        border: "none"
    }


  return (
    <div class="field">
    <label>Message</label>
    <textarea rows="2" style={inputStyle}></textarea>
  </div>
  )
}

export default Messagebox