import PropTypes from 'prop-types'
import { getFromStorage } from '../helpers/SaveToStorage'
function List({ movies, setMovies }) {
    const deleteMovie = (id) => {
        const moviesStorage = getFromStorage('movies')
        const newMovies = moviesStorage.filter((movie) => movie.id !== id)
        localStorage.setItem('movies', JSON.stringify(newMovies))
        setMovies(newMovies)
    }

    return (
        <>
            {
                movies.length === 0
                    ? <p>No hay peliculas</p>
                    : movies.map((movie) => (
                        <article className="peli-item" key={movie.id}>
                            <h3 className="title">{movie.title}</h3>
                            <p className="description">{movie.description}</p>

                            <button className="edit">Editar</button>
                            <button className="delete" onClick={() => deleteMovie(movie.id)}>Borrar</button>
                        </article>
                    ))
            }
        </>
    )
}

List.propTypes = {
    movies: PropTypes.array.isRequired,
    setMovies: PropTypes.func.isRequired
}

export default List