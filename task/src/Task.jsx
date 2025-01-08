import React, { useState } from "react";
import TodoItem from "./TodoItem";

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

    setList([...list, { ...data, id: Date.now() }]);

    setData({
      task: "",
      date: "",
      isCompleted: false,
    });
  };

  const handleDelete = (id) => {
    console.log("delete", id);
    let temp = list.filter((ele) => ele.id != id);
    setList(temp);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="task"
          onChange={handleInput}
          value={data.task}
        />
        <input
          type="date"
          name="date"
          onChange={handleInput}
          value={data.date}
        />
        <input type="submit" />
      </form>
      <hr />
      {list.map((ele) => (
        <TodoItem {...ele} key={ele.id} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Task;
