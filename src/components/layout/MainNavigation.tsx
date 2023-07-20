import { FC, useContext } from "react";
import { Link } from "react-router-dom";

import "./MainNavigation.css";
import FavoriteContext from "../../store/favorites-context";

const MainNavigation: FC = (): JSX.Element => {
    const favoriteCtx = useContext(FavoriteContext)

    return (
        <header className="header">
            <div className="logo">Strona z kręgielniami</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Lista kręgielni</Link>
                    </li>
                    <li>
                        <Link to="/add">Dodaj obiekt</Link>
                    </li>
                    <li>
                        <Link to="ulubione">Ulubione</Link>
                        <span className="badge">{favoriteCtx.totalFavorites}</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;