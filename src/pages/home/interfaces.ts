export interface ILoadFilmes {
  filmesSet(results: IFilmes[]): void;
}

export interface IFilmes {
  id: number;
  title: string;

  backdrop_path: string;
  poster_path: string;
}
