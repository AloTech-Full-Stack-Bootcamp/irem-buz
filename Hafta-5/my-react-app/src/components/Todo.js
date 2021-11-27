import React from "react";

const Todo = ({ todo, handleDestroy }) => {
  const onDestroy = () => {
    handleDestroy(todo.text);
  };
  return (
    <div className="view">
      <input property="done" className="toggle" type="checkbox" />
      <label property="text">{todo.text}</label>
      <button className="destroy" onClick={onDestroy}></button>
    </div>
  );
};

export default Todo;
