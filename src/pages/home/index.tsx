import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useLoadingFilmes } from "./service";

import { Cards, ContainerHomePage } from "./stylesHome";

import { IFilmes } from "./interfaces";

export const Home = () => {
  const { loadFilmes } = useLoadingFilmes();

  const [filmes, filmesSet] = useState<IFilmes[]>([]);

  useEffect(() => {
    loadFilmes({ filmesSet });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerHomePage>
      <h1>home</h1>

      {filmes.map((filme) => {
        return (
          <Cards key={filme.id}>
            <h4>{filme.title}</h4>
            <img
              src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
              alt={`imagem do filme ${filme.title}`}
            />
            <Link to={`/movies/${filme.id}`}>Acessar</Link>
          </Cards>
        );
      })}
    </ContainerHomePage>
  );
};
