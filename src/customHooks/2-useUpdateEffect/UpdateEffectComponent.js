import React, { useState } from "react";
import useUpdateEffect from "./useUpdateEffect";

function UpdateEffectComponent() {
  const [count, setCount] = useState(0);
  useUpdateEffect(() => alert(count), count);
  return (
    <div>
      <p>{count}</p>
      <div onClick={() => setCount(count + 1)} className="btn btn-primary">
        increment
      </div>
    </div>
  );
}

export default UpdateEffectComponent;
