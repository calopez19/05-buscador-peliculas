export function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={`poster de ${movie.Title}`} />
          </li>
        );
      })}
    </ul>
  );
}

export function NoResults() {
  return <p>no se encontraron peliculas</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoResults />;
}
