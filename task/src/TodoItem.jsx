import React from "react";

const TodoItem = ({ task, date, isCompleted, id, onDelete }) => {
  return (
    <div>
      <h3>{task}</h3>
      <p>due:{date}</p>
      <button>{isCompleted ? "mark as  pending" : "mark as complete"}</button>
      <button>update</button>
      <button onClick={()=>onDelete(id)}>delete</button>
    </div>
  );
};

export default TodoItem;
