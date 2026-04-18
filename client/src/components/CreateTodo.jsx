import React from "react";

const CreateTodo = ({ fetchTodos }) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      <button
        style={{ padding: 10, margin: 10 }}
        onClick={async () => {
          await fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              description: description,
            }),
          });

          fetchTodos(); // refresh UI
        }}
      >
        Add a todo
      </button>
    </div>
  );
};

export default CreateTodo;
