import { useHistory, useParams } from "react-router-dom";
import { DetailsContainer } from "./style";

export default function Details({ movies }) {
  const history = useHistory();

  const { imdbID } = useParams();

  const backToHome = () => {
    history.push("/");
  };

  return (
    <DetailsContainer>
      <div className="details_container-button">
        <button onClick={() => backToHome()}>Voltar</button>
      </div>
      {movies
        .filter((movie) => movie.imdbID === imdbID)
        .map((filteredMovie) => {
          const { Title, Year, Poster } = filteredMovie;

          return (
            <div className="details_container-info">
              <figure>
                <img src={Poster} alt={Title} />
                <figcaption>{Title}</figcaption>
              </figure>
              <div>
                <h2>{Title}</h2>
                <p>{Year}</p>
              </div>
            </div>
          );
        })}
    </DetailsContainer>
  );
}
