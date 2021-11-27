import React from "react";
import { useState } from "react";

const MainSectionHeader = ({ handleSubmit }) => {
  const [inputData, setInputData] = useState("");

  const onChangeInput = (e) => {
    e.preventDefault();

    setInputData(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(inputData);
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={onFormSubmit}>
          <input
            name="inputData"
            property="newTodo"
            className="new-todo"
            placeholder="What needs to be done?"
            value={inputData}
            onChange={onChangeInput}
            autofocus
          />
        </form>
      </header>
    </div>
  );
};

export default MainSectionHeader;
