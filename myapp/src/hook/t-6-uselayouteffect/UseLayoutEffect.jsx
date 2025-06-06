import { useLayoutEffect, useState } from "react";
export default function useLayoutEffectExample() {
  const [color, setColor] = useState("red");

  useLayoutEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <h1>UseLayoutEffect Example</h1>
      <button onClick={() => setColor("lightblue")}>Change BG Color</button>
    </div>
  );
}
