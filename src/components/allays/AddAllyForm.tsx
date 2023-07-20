import { FC, FormEvent, useRef } from "react";
import "./AllayItem.css";
import Card from "../ui/Card";
import "./AddAllyForm.css";

type Ally = {
  city: string;
  image: string;
};

interface Props {
  onAddAlly: (ally: Ally) => void;
}

const AddAllyForm: FC<Props> = ({ onAddAlly }): JSX.Element => {
  const cityInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !(
        cityInputRef &&
        cityInputRef.current &&
        imageInputRef &&
        imageInputRef.current
      )
    ) {
      console.log("Form fail");
      return;
    }

    const enteredCity = cityInputRef.current.value;
    const enteredImage = imageInputRef.current.value;

    const ally: Ally = {
      city: enteredCity,
      image: enteredImage,
    };

    onAddAlly(ally);
  };

  return (
    <Card>
      <form className="form" onSubmit={onSubmit}>
        <div className="control">
          <label htmlFor="city">Miasto</label>
          <input type="text" required id="city" ref={cityInputRef} />
        </div>
        <div className="control">
          <label htmlFor="image">Obraz</label>
          <input type="text" required id="image" ref={imageInputRef} />
        </div>
        <div className="actions">
          <button>Dodaj obiekt</button>
        </div>
      </form>
    </Card>
  );
};

export default AddAllyForm;
