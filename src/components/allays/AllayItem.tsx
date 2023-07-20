import { FC, useContext } from "react";
import "./AllayItem.css";
import Card from "../ui/Card";
import FavoriteContext from "../../store/favorites-context";

interface Props {
  id: string;
  city: string;
  image: string;
}

const AllayItem: FC<Props> = ({ id, city, image }): JSX.Element => {
  const favoritesCtx = useContext(FavoriteContext);
console.log(city, id, favoritesCtx.itemFavorite(id))
  const itemIsFavorite = favoritesCtx.itemFavorite(id);

  const toggleFavoriteStatusHandler = (): void => {
    if (itemIsFavorite) favoritesCtx.removeFavorite(id);
    else favoritesCtx.addFavorites({ key: id, city, image });
  };

  return (
    <div className="item">
      <Card>
        <div className="image">
          <img src={image} alt={city} />
        </div>
        <div className="content">
          <h3>{city}</h3>
        </div>
        <div className="actions">
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default AllayItem;
