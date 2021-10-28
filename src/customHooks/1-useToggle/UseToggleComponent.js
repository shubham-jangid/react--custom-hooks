import React from "react";
import useToggle from "./useToggle";

function UseToggleComponent() {
  const [value, toggle] = useToggle();
  return (
    <div>
      <p className=" m-2">{value.toString()}</p>
      <button className="btn btn-primary mx-2" onClick={() => toggle(true)}>
        make true
      </button>
      <button className="btn btn-primary mx-2" onClick={() => toggle(false)}>
        make false
      </button>
      <button className="btn btn-primary mx-2" onClick={toggle}>
        toggle
      </button>
    </div>
  );
}

export default UseToggleComponent;
