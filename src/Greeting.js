import "./Greeting.css";
import { useState } from "react";


function Greeting() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    setName(event.target.name.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" />
        <button>Submit name</button>
      </form>
      <p className="name">Hello {name}!</p>
    </>
  );
}

export default Greeting;
