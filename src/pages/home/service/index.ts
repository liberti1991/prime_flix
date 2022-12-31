import { api } from "../../../api";

import { UseLoading } from "../../../context";

import { ILoadFilmes } from "../interfaces";

// loadFilmes https://api.themoviedb.org/3/movie/now_playing?api_key=802d7103051524abc7ca940155bfa4c1

export const useLoadingFilmes = () => {
  const { startLoading, stopLoading } = UseLoading();

  const loadFilmes = async ({ filmesSet }: ILoadFilmes) => {
    try {
      startLoading();

      const response = await api.get(`/movie/now_playing?page=1`);

      if (response) {
        filmesSet(response.data.results);
        stopLoading();
      }
    } catch (error) {
      console.log(error);
      stopLoading();
    }
  };

  return { loadFilmes };
};
