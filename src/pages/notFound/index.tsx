import { Link } from "react-router-dom";
import { ContainerNotFound } from "./stylesNotFound";

export const Error = () => {
  return (
    <ContainerNotFound>
      <h1>404</h1>

      <p>Pagina não encontrada</p>

      <Link to="/"> Voltar pra Home!</Link>
    </ContainerNotFound>
  );
};
