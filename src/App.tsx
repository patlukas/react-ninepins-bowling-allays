import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllAllays from "./pages/AllAllays";
import Layout from "./components/layout/Layout";
import AddAlly from "./pages/AddAlly";
import FavoriteAllays from "./pages/FavoriteAllays";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllAllays />} />
        <Route path="/ulubione" element={<FavoriteAllays />} />
        <Route path="/add" element={<AddAlly />} />
      </Routes>
    </Layout>
  );
}

export default App;
