import withtResults from "../mocks/results.json";
import withoutResults from "../mocks/no-results.json";
import { useState, useRef } from "react";
import { KEY } from '../constants.js'
import { getMovies } from "../services/getMovies.js";

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const previousMovieSearch = useRef(search)

  const searchMovies = async ( ) => {
    if (search === previousMovieSearch.current) return
    previousMovieSearch.current = search
    const newMovies = await getMovies({ search })
    setResponseMovies(newMovies)
  }
  return { movies: responseMovies, searchMovies }
}