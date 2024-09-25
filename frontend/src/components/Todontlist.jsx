import { useState } from "react";
import { Todont } from "./Todont";
import { URL } from "../configs/url";

export const Todontlist = () => {
  const [todonts, setTodonts] = useState(null);

  const getTodonts = async () => {
    try {
      await fetch(`${URL}/todont`)
        .then((res) => res.json())
        .then((data) => setTodonts(data));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <h2>Don´t</h2>
        <button onClick={getTodonts}>Refresh</button>
        <ul>
          {todonts
            ? todonts
                .filter((todont) => !todont.done)
                .map((todont) => (
                  <Todont
                    key={todont._id}
                    _id={todont._id}
                    title={todont.title}
                    done={todont.done}
                  /> // Interpolera med {} och sätt en unik key
                ))
            : null}
        </ul>
        <h2>But I still did</h2>
        <ul>
          {todonts
            ? todonts
                .filter((todont) => todont.done)
                .map((todont) => (
                  <Todont
                    key={todont._id}
                    _id={todont._id}
                    title={todont.title}
                    done={todont.done}
                  /> // Interpolera med {} och sätt en unik key
                ))
            : null}
        </ul>
      </div>
    </>
  );
};
