import React, { useState } from "react";

function App() {

  const [fname , setfName] = useState("");
  const [lname , setlName] = useState("");
 

  function handleFName(event){
    setfName(event.target.value)
  }
  function handleLName(event){
    setlName(event.target.value)
  }

  function handleClick(event){
    event.preventDefault(); 
  }

  return (
    <div className="container">
      <h1>Hello {fname} {lname}</h1>
      <form onSubmit={handleClick}>
        <input 
          name="fName" 
          onChange={handleFName} 
          placeholder="First Name"
          value = {fname} />
        <input 
          name="lName" 
          onChange={handleLName} 
          placeholder="Last Name"
          value = {lname} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
