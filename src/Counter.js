import { useState } from "react";

export default function Counter({ count, setCount }) {
  // const [count, setCount] = useState(0);

  const handleCountDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountDown}>Count Down</button>
      <button onClick={() => setCount(count + 1)}>Count Up</button>
    </>
  );
}
