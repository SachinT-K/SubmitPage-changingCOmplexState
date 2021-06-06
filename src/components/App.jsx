import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    // name is event.target.name and value is event.target.value
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email"
          value={contact.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
