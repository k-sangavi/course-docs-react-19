/*import { useState } from "react";
export default function TaskForm(addTask) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // preventdefault is using for 
    if (value.trim()) {
      // use of trim to remove empty space in the form
      console.log("Form Submitted!, value");
      // add task to list
      addTask(value);
      setValue("");
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="add-task-action">
        <input type="text" onChange={(e) => setValue(e.target.value)} placeholder="Add a Task" className="add-task-input" value={value} />
        <button type="submit" className="add-task-button">
          Add
        </button>
      </div>
    </form>
  );
}*/

import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim()) {
      console.log("Form Submitted!", value);
      addTask(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-task-action">
        <input type="text" onChange={(e) => setValue(e.target.value)} placeholder="Add a Task" className="add-task-input" value={value} />
        <button type="submit" className="add-task-button">Add</button>
      </div>
    </form>
  );
}
