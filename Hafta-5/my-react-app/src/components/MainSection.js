import React, { useEffect, useState } from "react";

import MainSectionHeader from "./MainSectionHeader";
import MainSectionFooter from "./MainSectionFooter";
import Todo from "./Todo";

import { todo } from "../data";

const MainSection = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const initializeTodoList = async () => {
      setTodoList([...todo]);
    };
    initializeTodoList();
  }, []);

  const handleSubmit = (inputData) => {
    const newTodo = {
      text: inputData,
      done: false,
    };
    setTodoList((todos) => [...todos, newTodo]);
  };

  const handleDestroy = (text) => {
    const filteredTodoList = [...todoList].filter((todo) => todo.text !== text);
    setTodoList(filteredTodoList);
  };

  const onChecked = (e) => {
    /*
    let arr = [];
    todoList.map((e) => !(e.name === "") && arr.push(e));
    arr.forEach((element) => {
      if (
        element.name ===
        e.target.parentNode.parentNode.parentNode.childNodes["0"].childNodes[1]
          .innerText
      ) {
        element.checked ? (element.checked = false) : (element.checked = true);
      }
    });
    setTodoList(arr);
    */
  };

  return (
    <section
      mv-app="todoapp"
      className="todoapp"
      mv-bar="none"
      mv-storage="local"
      mv-autosave="3"
      mv-mode="edit"
      mv-init="#data"
    >
      <MainSectionHeader handleSubmit={handleSubmit} />
      {/* This section should be hidden by default and shown when there are todos */}
      <section className="main" hidden={todoList.length === 0 ? true : false}>
        <input
          property="toggleAll"
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked="[todoLeft = 0]"
          onClick={onChecked}
        />
        <label for="toggle-all" mv-action="set(done, !toggleAll)">
          Mark all as complete
        </label>

        <ul className="todo-list">
          {todoList.map((element, index) => (
            <li
              mv-multiple="todo"
              className={element.done ? "completed" : ""}
              key={index}
            >
              <Todo todo={element} handleDestroy={handleDestroy} />
            </li>
          ))}
        </ul>
      </section>
      {/* This footer should hidden by default and shown when there are todos */}
      <MainSectionFooter />
    </section>
  );
};

export default MainSection;
