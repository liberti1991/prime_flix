import { Loading } from "./components/loading";
import { UseLoading } from "./context";
import { MyRoutes } from "./myRoutes/MyRoutes";
import GlobalStyle from "./styles/createGlobalStyles";

function App() {
  const { loading } = UseLoading();
  return (
    <>
      <GlobalStyle />
      <MyRoutes />
      {loading !== 0 && <Loading />}
    </>
  );
}

export default App;
