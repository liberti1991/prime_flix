import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IDetailsMovie } from "../movie/interfacesMovies";

export const Favorites = () => {
  const [listMovies, listMoviesSet] = useState<IDetailsMovie[]>([]);

  useEffect(() => {
    const myMovieList: any = localStorage.getItem("@MoviesList") || [];

    listMoviesSet(JSON.parse(myMovieList) || []);
  }, []);

  console.log(listMovies);

  return (
    <div>
      <h1>Meus Favoritos</h1>

      <ul>
        {listMovies.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/movies/${item.id}`}>Ver detalhes</Link>
                <button>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
