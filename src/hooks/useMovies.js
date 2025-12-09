import withtResults from "../mocks/results.json";
import withoutResults from "../mocks/no-results.json";
import { useState } from "react";
import {KEY} from '../constants.js'

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search;
  const mappedMovies = movies?.map(movie => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }})

  const getMovies = () => {
    if (search) {
      fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${search}`)
      .then((res) => res.json()).
      then((json) => {
        const newResult = json 
        setResponseMovies(newResult)
      })
      
    } else {
      setResponseMovies(withoutResults)
    }
  }
  return { movies: mappedMovies, getMovies }  
}