import { FC, useContext } from "react";
import FavoriteContext from "../store/favorites-context";
import AllaysList from "../components/allays/AllaysList";

const FavoriteAllays: FC = (): JSX.Element => {
  const favoritesCtx = useContext(FavoriteContext)

  let el: JSX.Element = <p>Brak ulubionych</p>
  if(favoritesCtx.totalFavorites !== 0) el = <AllaysList allays={favoritesCtx.favorites} />

  return (
    <section>
      <h1>Ulubione kręgielnię</h1>
      {el}
    </section>
  );
};

export default FavoriteAllays;
