import { saveToStorage, getFromStorage, addMovie } from "../helpers/SaveToStorage"
import propTypes from 'prop-types'
import Form from "./Form"
function Add({ setMovies }) {

    const getDataForm = (e) => {
        e.preventDefault()

        const target = e.target
        const title = target.title.value
        const description = target.description.value

        const movie = {
            id: new Date().getTime(),
            title,
            description
        }
        const newMovies = addMovie(movie)
        saveToStorage('movies', newMovies)
        setMovies(getFromStorage('movies'))
    }

    return (
        <div className="add">
            <h3 className="title">Añadir pelicula</h3>
            <Form onSubmit={getDataForm} />

        </div>

    )
}

Add.propTypes = {
    setMovies: propTypes.func.isRequired,
    movies: propTypes.array.isRequired
}

export default Add