export interface IChildren {
  children: React.ReactNode;
}

export interface ILoadingContext extends IFuncLoading {
  loading: number;
}

export interface IFuncLoading {
  startLoading(): void;
  stopLoading(): void;
}
