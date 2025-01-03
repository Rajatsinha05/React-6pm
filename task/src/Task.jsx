import React, { useState } from "react";

const Task = () => {
  let [data, setData] = useState({
    task: "",
    date: "",
    isCompleted: false,
  });

  let [list, setList] = useState([]);
  const handleInput = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setList([...list, { ...data, id: Date.now() }]);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="task" onChange={handleInput} />
        <input type="date" name="date" onChange={handleInput} />
        <input type="submit" />
      </form>
      <hr />
      {list.map(({ task, date, isCompleted, id }) => (
        <div key={id}>
          <h3>{task}</h3>
          <p>due date: {date}</p>
          <button>{isCompleted ? "completed" : "pending"}</button>
        </div>
      ))}
    </div>
  );
};

export default Task;
