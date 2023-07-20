import { FC, ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

type Allay = {
  key: string;
  city: string;
  image: string;
};

type Context = {
  favorites: Allay[];
  totalFavorites: number;
  addFavorites: (favoriteAllay: Allay) => void;
  removeFavorite: (favoriteKey: string) => void;
  itemFavorite: (favoriteKey: string) => boolean;
};

const FavoriteContext = createContext<Context>({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (favoriteAllay: Allay): void => {},
  removeFavorite: (favoriteKey: string): void => {},
  itemFavorite: (favoriteKey: string): boolean => false,
});

export const FavoriteContextProvider: FC<Props> = (props): JSX.Element => {
  const [userFavorites, setUserFavorites] = useState<Allay[]>([]);

  const addFavorites = (favoriteAllay: Allay) => {
    setUserFavorites((prev: Allay[]): Allay[] => {
      return prev.concat(favoriteAllay);
    });
  };
  const removeFavorite = (favoriteKey: string): void => {
    setUserFavorites((prev: Allay[]): Allay[] => {
      return prev.filter((allay: Allay) => allay.key !== favoriteKey);
    });
  };
  const itemFavorite = (favoriteKey: string): boolean => {
    return userFavorites.some((allay: Allay) => allay.key === favoriteKey);
  };
  const context: Context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavorites,
    removeFavorite: removeFavorite,
    itemFavorite: itemFavorite,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
