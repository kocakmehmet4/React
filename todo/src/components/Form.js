import React from "react";

function Form({ todos, setTodos, inputText, setInputText }) {
  const submitHandler = (e) => {
    if (String(inputText).trim() === "") {
      return false;
    }
    if (e.key === "Enter") {
      const newTodo = {
        inputText,
        id: Date.now(),
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      setInputText("");
    }
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <div>
          <input
            onKeyDown={submitHandler}
            className="new-todo"
            placeholder="What needs be done?"
            autoFocus
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
        </div>
      </header>
    </div>
  );
}

export default Form;
