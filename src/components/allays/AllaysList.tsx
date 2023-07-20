import { FC } from "react";
import AllayItem from "./AllayItem";
import "./AllayList.css";

type allay = {
  key: string;
  city: string;
  image: string;
};

interface Props {
  allays: allay[];
}

const AllaysList: FC<Props> = ({ allays }): JSX.Element => {
  return (
    <div>
      {allays.map((allay) => (
        <AllayItem key={allay.key} id={allay.key} city={allay.city} image={allay.image} />
      ))}
    </div>
  );
};

export default AllaysList;
