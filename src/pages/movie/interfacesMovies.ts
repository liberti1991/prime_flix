export interface IIdParams {
  id: string | undefined;
}

export interface ILoadMovie extends IIdParams {
  detailsSet(data: IDetailsMovie): void;
}

export interface ISaveMovie {
  details: IDetailsMovie | undefined;
}

export interface IDetailsMovie {
  id: string;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: string;
}
