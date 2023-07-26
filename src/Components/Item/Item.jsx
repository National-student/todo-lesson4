import React from "react";

export const Item = ({ todo, allTodo, todos }) => {
  const handleDelete = (item) => {
    const filterTodo = todos.filter((todo) => item.id !== todo.id);

    allTodo(filterTodo);
    localStorage.setItem("todo", JSON.stringify(filterTodo));
  };

  const handleEdit = (item1) => {
    const promptEdit = prompt("Edit Todo", item1.text);

    todos.forEach((element) => {
      if (element.id == item1.id) {
        item1.text = promptEdit;
        allTodo([...todos]);
        localStorage.setItem("todo", JSON.stringify([...todos]));
      }
    });
  };

  return (
    <li>
      <input type="checkbox" />
      <h2>{todo.text}</h2>
      <button onClick={() => handleEdit(todo)}>EDIT</button>
      <button onClick={() => handleDelete(todo)}>DELETE</button>
    </li>
  );
};
