import { useState } from "react";
import "./App.css";
import Greeting from "./Greeting";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  const names = ["Nicole", "Julia", "Josh", "Lucy", "Pancho"];

  return (
    <div className="App">
      <header className="App-header">
      {count > 10 && <Greeting/>}
      {/* <ol>
        {names.map((name) => (
          <li>
            <Greeting name={name} />
          </li>
        ))}
      </ol> */}
      <Counter count={count} setCount={setCount} />
      </header>
    </div>
  );
}

export default App;
