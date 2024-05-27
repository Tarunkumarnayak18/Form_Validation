import React, { useState } from "react";

function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function ValidationForm() {
    if (firstname.trim() === "") {
      alert("First Name can not be empty");
      return;
    }

    if (lastname.trim() === "") {
      alert("Last Name can not be empty");
      return;
    }

    if (age === "") {
      alert("Age can not be empty");
      return;
    }

    if (mobile === "") {
      alert("Mobile Number can not be empty");
      return;
    }

    if (email.trim() === "") {
      alert("Email can not be empty");
      return;
    }

    if (password.length < 8) {
      alert("Password must contain greater than or equal to 8 character");
      return;
    }

    alert("Form is valid");
  }

  return (
    <div className="main">
      <h2>Form Validation</h2>
      <form>
        <label>Firstname:</label>
        <input
          type="text"
          name="Firstname"
          placeholder="Enter a First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Lastname:</label>
        <input
          type="text"
          name="Lastname"
          placeholder="Enter a Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />

        <label>Age:</label>
        <input
          type="number"
          name="Age"
          placeholder="Enter a Age"
          onChange={(e) => setAge(e.target.value)}
        />

        <label>Mobile:</label>
        <input
          type="mobile"
          name="Mobile"
          placeholder="Enter a Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          name="Email"
          placeholder="Enter a Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          name="Password"
          placeholder="Enter a Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          onClick={() => {
            ValidationForm();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
