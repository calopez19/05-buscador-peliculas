import { useEffect, useRef, useState } from "react";
import responseMovies from "./mocks/results.json";
import withoutResults from "./mocks/no-results.json";
import { ListOfMovies, NoResults, Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import "./App.css";

function App() {
  const inputRef = useRef("aaaa");
  const { mappedMovies } = useMovies();
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    event.preventDefault();
    const { query } = Object.fromEntries(new window.FormData(event.target));
    console.log(query);
  };

  useEffect(() => {
    if (query === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }
    if (query.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula solo con numeros");
      return;
    }
    if (query.length < 3) {
      setError("Nombre muy corto para buscar");
      return;
    }
    setError(null)
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <>
      <header>
        <h1>App para buscar peliculas</h1>
        <form onSubmit={handleSubmit} className="formulario">
          <input
            onChange={handleChange}
            name="query"
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
