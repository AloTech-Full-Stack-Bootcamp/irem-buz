import React from "react";

const MainSectionHeader = () => {
  return (
    <div>
      <header class="header">
        <h1>todos</h1>
        <form mv-action="set(newTodo, newTodo.trim()), if(newTodo != '', add(newTodo, todo) & set(newTodo, ''))">
          <input
            property="newTodo"
            class="new-todo"
            placeholder="What needs to be done?"
            autofocus
          />
        </form>
      </header>
    </div>
  );
};

export default MainSectionHeader;
