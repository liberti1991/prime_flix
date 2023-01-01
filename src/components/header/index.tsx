import { Link } from "react-router-dom";

import { ContainerHeader } from "./stylesHeader";

export const Header = () => {
  return (
    <ContainerHeader>
      <Link to="/">Prime Flix</Link>
      <Link to="/favorites">Meus Filmes</Link>
    </ContainerHeader>
  );
};
