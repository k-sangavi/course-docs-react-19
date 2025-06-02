export default function TaskList({ tasks, toggleTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} onClick={() => toggleTask(task.id)}>
          {task["text"]}
        </li>
      ))}
    </ul>
  );
}
