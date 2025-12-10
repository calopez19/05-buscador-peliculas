import withtResults from "../mocks/results.json";
import withoutResults from "../mocks/no-results.json";
import { useState, useRef, useMemo } from "react";
import { KEY } from '../constants.js'
import { getMovies } from "../services/getMovies.js";

export function useMovies({ search, sort }) {
  const [responseMovies, setResponseMovies] = useState([])
  const previousMovieSearch = useRef(search)


  const searchMovies = async () => {
    if (search === previousMovieSearch.current) return
    previousMovieSearch.current = search
    const newMovies = await getMovies({ search })
    setResponseMovies(newMovies)
  }

  const sortedMovies = useMemo(() => {
        if (!responseMovies) return;
    return sort
      ? [...responseMovies].sort((a, b) => a.title.localeCompare(b.title))
      : responseMovies
  }, [sort, responseMovies])

  return { movies: sortedMovies, searchMovies }
}