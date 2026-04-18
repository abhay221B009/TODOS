import React from "react";

const Todos = ({ todos, fetchTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h2>{todo.title}</h2>
          <h3>{todo.description}</h3>

          <button
            onClick={async () => {
              await fetch("http://localhost:3000/completed", {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  id: todo._id,
                }),
              });

              fetchTodos();
            }}
          >
            {todo.completed ? "Completed" : "Mark as completed"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
