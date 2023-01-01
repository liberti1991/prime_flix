import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useFavorites } from "./services";

import { ContainerFavorites } from "./stylesFavorites";

import { IDetailsMovie } from "../movie/interfacesMovies";

export const Favorites = () => {
  const { findListMovies, deleteMovie } = useFavorites();
  const [listMovies, listMoviesSet] = useState<IDetailsMovie[]>([]);

  useEffect(() => {
    findListMovies({ listMoviesSet });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerFavorites>
      <h1>Meus Favoritos</h1>

      {listMovies.length === 0 && <span>Você não possui nenhum filme salvo :( </span>}

      <ul>
        {listMovies.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>

              <div>
                <Link to={`/movies/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => deleteMovie({ id: item.id, listMovies, listMoviesSet })}>
                  Excluir
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </ContainerFavorites>
  );
};
