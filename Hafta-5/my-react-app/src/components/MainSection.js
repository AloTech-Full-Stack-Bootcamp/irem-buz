import React, { useEffect, useState } from "react";

import MainSectionHeader from "./MainSectionHeader";
import MainSectionFooter from "./MainSectionFooter";

import { todo } from "../data";

const MainSection = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const initializeTodoList = async () => {
      setTodoList([...todo]);
    };
    initializeTodoList();
  }, []);

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
      <MainSectionHeader />
      {/* This section should be hidden by default and shown when there are todos */}
      <section
        className="main"
        hidden={todoList.length === 0 ? true : false}
      >
        <input
          property="toggleAll"
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked="[todoLeft = 0]"
        />
        <label for="toggle-all" mv-action="set(done, !toggleAll)">
          Mark all as complete
        </label>

        <ul className="todo-list">
          {todoList.map((element, index) => (
            <li
              mv-multiple="todo"
              className={element.done && "completed"}
              key={index}
            >
              <div className="view">
                <input property="done" className="toggle" type="checkbox" />
                <label property="text">{element.text}</label>
                <button className="destroy" mv-action="delete(todo)"></button>
              </div>
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
