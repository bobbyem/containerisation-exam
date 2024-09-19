import { useState } from "react";
import { Todont } from "./Todont";

export const Todontlist = () => {
  const [todonts, setTodonts] = useState(null);

  const getTodonts = async () => {
    try {
      await fetch("http://localhost:3000/todont")
        .then((res) => res.json())
        .then((data) => setTodonts(data));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button onClick={getTodonts}>Refresh</button>
      <ul>
        {todonts
          ? todonts.map((todont) => (
              <Todont
                key={todont._id}
                _id={todont._id}
                title={todont.title}
                done={todont.done}
              /> // Interpolera med {} och sätt en unik key
            ))
          : null}
      </ul>
    </>
  );
};
