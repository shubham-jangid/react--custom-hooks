import { useEffect, useRef } from "react";

function useUpdateEffect(callback, dependency) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, [dependency]);
}

export default useUpdateEffect;
