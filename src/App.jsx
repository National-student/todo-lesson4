import { useState } from "react";
import "./App.css";
import { Item, List } from "./Components";

function App() {
  const localData = JSON.parse(localStorage.getItem("todo")) || [];

  const [todo, setTodo] = useState(localData);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (evt.target.value) {
      if (evt.keyCode === 13) {
        const object = {
          id: Math.round(Math.random() * 1000),
          text: evt.target.value,
          isComplated: false,
        };

        setTodo([object, ...todo]);
        localStorage.setItem("todo", JSON.stringify([object, ...todo]));
        evt.target.value = "";
      }
    } else {
      alert("Iltimos ma'lumot kiriting!!");
    }
  };

  return (
    <div>
      <h1>Todo Text</h1>

      <input onKeyUp={handleSubmit} type="text" placeholder="Add Todo" />

      {todo.length > 0 && (
        <List>
          {todo.map((item) => (
            <Item key={item.id} allTodo={setTodo} todos={todo} todo={item} />
          ))}
        </List>
      )}
    </div>
  );
}

export default App;
