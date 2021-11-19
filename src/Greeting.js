import "./styles.css";
import { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); //prevents reloading of the page after clicking submit
    setName(event.target.name.value);
    console.log(event.target.name.value);
  };

  return (
    <>
      {name && <div>Hello {name}!</div>}
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Name:</label>
        <input id="name" name="name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Greeting;

