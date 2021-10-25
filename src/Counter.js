import { useState } from 'react';


const Counter = ({count, setCount}) => {
    // const [count, setCount] = useState(0);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Add one</button>
      <button onClick={() => setCount(count -1)}>Subtract one</button>
    </>
  );
};

export default Counter