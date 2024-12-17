import { useRef } from "react";

function UseRef() {
  const ref = useRef(0);
  const a = 96;
  function increment() {
    console.log(ref.current);
    ref.current++;
  }
  return (
    <div>
      <h1>Current count is: {ref.current}</h1>
      <h1>a: {a}</h1>
      <button onClick={increment}>Click me</button>
    </div>
  );
}

export default UseRef;
