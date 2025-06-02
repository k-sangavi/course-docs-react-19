import "../../App.css";
export default function JSXExample() {
  // embedded expressions
  const name = "Sangavi";
  return (
    <>
      {/* or return <div></div>  min one tag not needed above 1 tag needed one parent element like div, <>*/}
      <h1 className="bg-color">Hello {name}</h1>
      <p style={{ backgroundColor: "yellow", border: "1px solid black" }}>This is a sample</p>
    </>
  );
}
// css, and styles using
