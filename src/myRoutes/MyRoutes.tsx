import { Route, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { Filmes } from "../pages/filmes";
import { Home } from "../pages/home";

export const MyRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Filmes />} />
      </Routes>
    </>
  );
};
