import { KEY } from '../constants'


export const getMovies = async ({ search }) => {
    if (search === '') return null
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${search}`)
        const json = await response.json()
        const movies = json.Search

        return movies?.map(movie => {
            return {
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster
            }
        })
    } catch (e) {
        throw new Error('Error searching movies')
    }
}