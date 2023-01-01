import { IDetailsMovie, IIdParams } from "../movie/interfacesMovies";

export interface IFindListMovies {
  listMoviesSet(myMovieList: IDetailsMovie[]): void;
}

export interface IDeleteMovie extends IIdParams {
  listMovies: IDetailsMovie[];
  listMoviesSet(filterFilmes: IDetailsMovie[]): void;
}
