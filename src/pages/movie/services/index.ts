import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../../api";
import { UseLoading } from "../../../context";
import { IDetailsMovie, ILoadMovie, ISaveMovie } from "../interfacesMovies";

export const useMovie = () => {
  const { startLoading, stopLoading } = UseLoading();
  const navigation = useNavigate();

  const loadMovie = async ({ id, detailsSet }: ILoadMovie) => {
    try {
      startLoading();

      const response = await api.get(`/movie/${id}`);

      if (response) {
        detailsSet(response.data);

        stopLoading();
      }
    } catch (error) {
      console.log(error);

      navigation("/", { replace: true });

      stopLoading();
    }
  };

  const saveMovie = ({ details }: ISaveMovie) => {
    const myMovieList: any = localStorage.getItem("@MoviesList");

    let savedMovies = JSON.parse(myMovieList) || [];

    console.log("details", details);

    console.log("savedMovies", savedMovies);

    // .some return true of false
    const hasMovie = savedMovies.some((savedMovie: IDetailsMovie) => savedMovie.id === details?.id);

    console.log("hasMovie", hasMovie);

    if (hasMovie) {
      toast.warn("Esse filme já esta na sua lista!");
      return;
    }

    savedMovies.push(details);

    localStorage.setItem("@MoviesList", JSON.stringify(savedMovies));
    toast.success("Filme salvo com Sucesso");
  };

  return { loadMovie, saveMovie };
};
