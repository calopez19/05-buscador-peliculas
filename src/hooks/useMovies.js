import withtResults from "../mocks/results.json";
import withoutResults from "../mocks/no-results.json";
import { useState } from "react";
import {KEY} from '../constants.js'
import { getMovies } from "../services/getMovies.js";

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([])

  const searchMovies = async({search}) => {
    const newMovies = await getMovies({search})
    setResponseMovies(newMovies)
  }
  return { movies: responseMovies, searchMovies }  
}