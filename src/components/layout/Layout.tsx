import { FC, ReactNode } from "react";
import MainNavigation from "./MainNavigation";
import "./Layout.css";

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({children}): JSX.Element => {
    return <div>
        <MainNavigation />
        <main className="main">{children}</main>
    </div>
}

export default Layout;