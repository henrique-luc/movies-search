import { useEffect, useState } from "react";
import Routes from "./routes";
import api from "./services/api";
import { GlobalStyle } from "./style/global";

function App() {
  const [movies, set_movies] = useState([]);
  const [newSearch, setNewSearch] = useState({});

  useEffect(() => {
    api
      .get(`s=${newSearch.search}&type=${newSearch.select}&apikey=cfbeb247`)
      .then((response) => {
        set_movies(response.data.Search);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [newSearch]);

  return (
    <>
      <GlobalStyle />
      <Routes movies={movies} setNewSearch={setNewSearch} />
    </>
  );
}

export default App;
