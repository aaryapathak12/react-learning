import React from 'react';

function Button({ bnames, setbgc }) { // Receive setbgc from App
  
  function changee(clr) {
    setbgc(clr); // Directly set the background color here
  }

  return (
    <>
      {bnames.map((bname, index) => (
        <button key={index} onClick={() => changee(bname)}> {/* Wrap changee in arrow function */}
          {bname}
        </button>
      ))}
    </>
  );
}

export default Button;
