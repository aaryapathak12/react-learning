import React from 'react'

function Buttons({username}) {
  return (
    <>
          {username.map((username, index) => (
        <button key={index} className="btn btn-primary m-2">
          {username}
        </button>
      ))}
    {/* <button className="btn btn-success">{bname} {bno}</button> */}
    </>
  )
}

export default Buttons