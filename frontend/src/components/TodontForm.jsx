import { useState } from "react";

export const TodontForm = () => {
  const [text, setText] = useState();

  const addTodont = (todont) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: todont }),
    };

    fetch("http://localhost:3000/todont", options)
      .then((resonse) => resonse.json())
      .then((data) => {
        console.log("From Backend ", data);
      });
  };

  return (
    <div>
      <p>Add something you shouldn&apos;t do</p>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          addTodont(text);
          setText("");
        }}
      >
        <input
          type="text"
          name="text-input"
          id="text-input"
          onInput={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
