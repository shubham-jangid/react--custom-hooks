import { useState } from "react";

function useToggle(initialValue = false) {
  const [state, setstate] = useState(initialValue);

  let setToggle = (value = "") => {
    return value === "boolen" ? setstate(value) : setstate(!state);
  };

  return [state, setToggle];
}

export default useToggle;
