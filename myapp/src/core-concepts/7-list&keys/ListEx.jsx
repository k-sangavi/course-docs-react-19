import { useState } from "react";

export default function ListEx() {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <h1>List Example</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
