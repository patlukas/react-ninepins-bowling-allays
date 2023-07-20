import { FC } from "react";
import AddAllyForm from "../components/allays/AddAllyForm";
import { useNavigate } from "react-router-dom";

const AddAlly: FC = (): JSX.Element => {
  const navigate = useNavigate();

  function onAddAlly(data: { city: string; image: string }) {
    fetch(
      "https://ninepins-bowling-allays-default-rtdb.firebaseio.com/allays.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h1>Dodaj kręgielnię</h1>
      <AddAllyForm onAddAlly={onAddAlly} />
    </section>
  );
};

export default AddAlly;
