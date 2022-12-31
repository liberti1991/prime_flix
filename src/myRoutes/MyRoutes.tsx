import { Route, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { Favorites } from "../pages/favorites";
import { Home } from "../pages/home";
import { Movie } from "../pages/movie";
import { Error } from "../pages/notFound";

export const MyRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
