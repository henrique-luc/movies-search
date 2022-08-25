import Search from "../../components/Search";
import Card from "../../components/Card";
import { HomeContainer } from "./style";

export default function Home({ movies, setNewSearch }) {
  return (
    <HomeContainer>
      <Search setNewSearch={setNewSearch} />
      {movies && movies.length > 0 ? (
        <h1>{movies.length} itens encontrados</h1>
      ) : (
        <h1>Nenhum item foi encontrado com o texto informado</h1>
      )}
      <ol>
        {movies &&
          movies.map((movie, index) => {
            return <Card key={`${index}-${movie.imdbID}`} movie={movie} />;
          })}
      </ol>
    </HomeContainer>
  );
}
