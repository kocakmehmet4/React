import "./App.css";
import Form from "./components/Form";
import Footer from "./components/Footer";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [filter, setFilter] = useState("");

  return (
    <div className="todoapp">
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <List
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        filter={filter}
      />
      <Footer
        todos={todos}
        setTodos={setTodos}
        counter={counter}
        setCounter={setCounter}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
