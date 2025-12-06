import { useEffect, useRef, useState } from "react";
import responseMovies from "./mocks/results.json";
import withoutResults from "./mocks/no-results.json";
import { ListOfMovies, NoResults, Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import "./App.css";

function usesearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isTheFirstInput = useRef(true);

  useEffect(() => {
    console.log("new search");

    if (isTheFirstInput.current) {
      isTheFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula solo con numeros");
      return;
    }
    if (search.length < 3) {
      setError("Nombre muy corto para buscar");
      return;
    }
    setError(null);
  }, [search]);

  return { search, error, updateSearch };
}

function App() {
  const inputRef = useRef("");
  const { mappedMovies } = useMovies();
  const { search, error, updateSearch } = usesearch();

  const handleSubmit = () => {
    event.preventDefault();
    console.log(search);
  };

  const handleChange = (event) => {
    const newsearch = event.target.value;
    updateSearch(newsearch);
  };
  return (
    <>
      <header>
        <h1>App para buscar peliculas</h1>
        <form onSubmit={handleSubmit} className="formulario">
          <input
            onChange={handleChange}
            name="search"
            ref={inputRef}
            type="text"
            className="buscador"
            placeholder="avengers, starwars...."
          />
          <button type="submit">Search movie</button>
        </form>
      </header>
      <main>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Movies movies={mappedMovies}></Movies>
      </main>
    </>
  );
}

export default App;
