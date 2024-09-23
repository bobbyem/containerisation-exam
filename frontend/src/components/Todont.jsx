export const Todont = ({ title, _id } = props) => {
  const updateTodont = async (id) => {
    try {
      await fetch("http://localhost:3000/todont", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <li onClick={() => updateTodont(_id)}>
      <p>{title}</p>
    </li>
  );
};
