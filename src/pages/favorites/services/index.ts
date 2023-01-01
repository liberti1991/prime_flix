import { toast } from "react-toastify";

import { IDeleteMovie, IFindListMovies } from "../interfacesFavorites";

export const useFavorites = () => {
  const findListMovies = ({ listMoviesSet }: IFindListMovies) => {
    const myMovieList: any = localStorage.getItem("@MoviesList") || [];

    if (myMovieList === null) {
      return listMoviesSet([]);
    } else {
      listMoviesSet(JSON.parse(myMovieList));
    }
  };

  const deleteMovie = ({ id, listMovies, listMoviesSet }: IDeleteMovie) => {
    let filterFilmes = listMovies.filter((movie) => {
      return movie.id !== id;
    });

    listMoviesSet(filterFilmes);
    toast.success("Filme removido com sucesso!");

    localStorage.setItem("@MoviesList", JSON.stringify(filterFilmes));
  };

  return { findListMovies, deleteMovie };
};
