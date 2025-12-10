import { useRef, useState } from "react";
import responseMovies from "./mocks/results.json";
import withoutResults from "./mocks/no-results.json";
import { ListOfMovies, NoResults, Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { usesearch } from "./hooks/usesearch";
import "./App.css";

function App() {
  const [sort, setSort] = useState(false)
  const inputRef = useRef("");
  const { search, error, updateSearch } = usesearch();
  const { movies, searchMovies } = useMovies({search, sort});

  const handleSort = () => {
    setSort(!sort)
  }
  const handleSubmit = () => {
    event.preventDefault();
    searchMovies({search});
  };

  const handleChange = (event) => {
    const newsearch = event.target.value;
    updateSearch(newsearch);
  };
  return (
    <div className="page">
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
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Search movie</button>
        </form>
      </header>
      <main>
        {error && <p style={{ color: "red" }}>{error}</p>}
        
        <Movies movies={movies}></Movies>
      </main>
    </div>
  );
}

export default App;
