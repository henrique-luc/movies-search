import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SearchContainer } from "./style";

export default function Search({ setNewSearch }) {
  const schema = yup.object().shape({
    search: yup.string(),
    select: yup.string(),
  });

  const { handleSubmit, register } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (data) => {
    setNewSearch(data);
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <input
          placeholder="Pesquise filmes, séries e eps"
          {...register("search")}
        />
        <select {...register("select")}>
          <option value="movie">Filmes</option>
          <option value="series">Séries</option>
          <option value="episode">Séries</option>
        </select>
        <button type="submit">Pesquisar</button>
      </form>
    </SearchContainer>
  );
}
