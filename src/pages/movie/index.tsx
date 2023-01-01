import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useMovie } from "./services";

import { ContainerMovie } from "./stylesMovie";

import { IDetailsMovie } from "./interfacesMovies";

export const Movie = () => {
  const { id } = useParams();
  const { loadMovie, saveMovie } = useMovie();

  const [details, detailsSet] = useState<IDetailsMovie>();

  useEffect(() => {
    loadMovie({ id, detailsSet });

    // return () => console.log("retornei");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerMovie>
      <h1>{details?.title}</h1>
      <article>
        <img
          src={`https://image.tmdb.org/t/p/original/${details?.poster_path}`}
          alt={`imagem do filme ${details?.title}`}
        />

        <section>
          <div>
            <h3>Sinopse</h3>
            <span>{details?.overview}</span>
            <strong>Avaliação: {details?.vote_average} / 10</strong>
          </div>

          <div>
            <button onClick={() => saveMovie({ details })}>Salvar</button>

            <a
              href={`https://www.youtube.com/results?search_query=${details?.title} trailer`}
              target="blank"
              rel="external noreferrer"
            >
              Trailer
            </a>
          </div>
        </section>
      </article>
    </ContainerMovie>
  );
};
