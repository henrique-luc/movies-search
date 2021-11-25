import { Title } from "./app.style";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [movies, set_movies] = useState([]);

  useEffect(() => {
    axios.get('https://www.omdbapi.com?s=avengers&type=movie&apikey=cfbeb247')
        .then((response) => {
            set_movies(response.data.Search);
        })
        .catch((error) => {
            console.warn(error);
        })
  }, [])

  return (
      <BrowserRouter>
        <Switch>
          <Route path="*">
            <Title>Live Coding - Pulsus</Title>
            <ol>
              {movies.map((movie, index) => {
                return (
                  <li key={`${index}-${movie.imdbID}`}>{movie.Title}</li>
                );
              })}
            </ol>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
