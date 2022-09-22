import { Switch, Route } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";

export default function Routes({ movies, setNewSearch }) {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home movies={movies} setNewSearch={setNewSearch} />
      </Route>
      <Route exact path="/:imdbID">
        <Details movies={movies} />
      </Route>
    </Switch>
  );
}
