export function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={'movie'}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={`poster de ${movie.title}`} />
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
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoResults />;
}
