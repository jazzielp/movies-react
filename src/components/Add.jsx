import { saveToStorage } from "../helpers/SaveToStorage"
function Add() {

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

export default Add