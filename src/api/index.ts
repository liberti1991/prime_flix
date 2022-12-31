import axios from "axios";
// loadFilmes movie/550?api_key=802d7103051524abc7ca940155bfa4c1
// loadFilmes https://api.themoviedb.org/3/movie/now_playing?api_key=802d7103051524abc7ca940155bfa4c1

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "802d7103051524abc7ca940155bfa4c1",
    language: "pt-BR",
  },
});
