import { useHistory } from "react-router-dom";
import { CardContainer } from "./style";

export default function Card({ movie }) {
  const { Title, Poster } = movie;
  const history = useHistory();

  const goToDetails = () => {
    history.push(`/${movie.imdbID}`);
  };

  return (
    <CardContainer>
      <figure>
        <img src={Poster} alt={Title} />
      </figure>
      <h2>{Title}</h2>
      <button onClick={() => goToDetails()}>+ Detalhes</button>
    </CardContainer>
  );
}
