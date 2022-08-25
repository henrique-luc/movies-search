import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  const [movies, set_movies] = useState([]);
  const [newSearch, setNewSearch] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://www.omdbapi.com?s=${newSearch.search}&type=${newSearch.select}&apikey=cfbeb247`
      )
      .then((response) => {
        set_movies(response.data.Search);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [newSearch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home movies={movies} setNewSearch={setNewSearch} />
        </Route>
        <Route exact path="/:imdbID">
          <Details movies={movies} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
