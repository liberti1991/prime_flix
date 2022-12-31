export interface ILoadFilmes {
  filmesSet(results: IFilmes[]): void;
}

export interface IFilmes {
  id: number;
  original_language: string;
  original_title: string;
  title: string;
  overview: string;
  popularity: number;
  release_date: string;
  genre_ids: number[];

  backdrop_path: string;
  poster_path: string;
}
