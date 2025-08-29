import { useState } from "react";
export default function useCustom() {
  const [data, setData] = useState([]);
  let statechange = (newData) => {
    // console.log(newData);
    setData(newData);
  };
  return { data, statechange };
}

// The reason your two React components don’t "share" the same data is because each 
// time you call your custom hook (useCustom) inside a component, 
// React creates a completely new independent state.

// So:

// ComponentA calls useCustom() → gets its own data and setData.

// ComponentB calls useCustom() → gets a different data and setData.