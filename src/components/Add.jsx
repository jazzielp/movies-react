import { saveToStorage, getFromStorage } from "../helpers/SaveToStorage"
import propTypes from 'prop-types'
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
        saveToStorage('movies', movie)
        setMovies(getFromStorage('movies'))
    }

    return (

        <div className="add">
            <h3 className="title">Añadir pelicula</h3>
            <form onSubmit={getDataForm}>
                <input type="text" id="title" placeholder="Titulo" />
                <textarea id="description" placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>

    )
}

Add.propTypes = {
    setMovies: propTypes.func.isRequired
}

export default Add