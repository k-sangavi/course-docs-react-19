// another format-export default function PropsExample(props) {
   export default function PropsExample(title, technology) {
  return (
    <>
      <h1>Props Example</h1>
      <p>{title}</p>
      <p>This tech stack is based on {technology}</p>
      {/* or <p>{props.title}</p> 
       we can send multiple props */}
    </>
  );
}
