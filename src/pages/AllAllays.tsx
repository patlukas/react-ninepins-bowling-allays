import { FC, useState, useEffect } from "react";
import AllaysList from "../components/allays/AllaysList";

type Allay = {
  key: string;
  city: string;
  image: string;
};

type FirebaseEl = {
  [key: string]: {
    city: string;
    image: string;
  };
};

const AllAllays: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [loadedAllays, setLoadedAllays] = useState<Allay[]>([]);
  useEffect(() => {
    fetch(
      "https://ninepins-bowling-allays-default-rtdb.firebaseio.com/allays.json"
    )
      .then((response: Response) => {
        return response.json();
      })
      .then((data: FirebaseEl) => {
        console.log(data);
        const allays: Allay[] = [];
        for (const key in data) {
          const allay: Allay = {
            key: key,
            ...data[key],
          };
          allays.push(allay);
          setLoadedAllays(allays);
          setIsLoading(false);
        }
      });
  }, []);

  if (isLoading) return <p>Ładowanie</p>;
  return (
    <section>
      <h1>Lista kręgielni</h1>
      <AllaysList allays={loadedAllays} />
    </section>
  );
};

export default AllAllays;
