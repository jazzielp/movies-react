import propTypes from 'prop-types'
function Form ({ onSubmit }) {
    return(
        <div className="add">
        <h3 className="title">Añadir pelicula</h3>
        <form onSubmit={onSubmit}>
            <input type="text" id="title" placeholder="Titulo" />
            <textarea id="description" placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
    )
}

Form.propTypes = {
    onSubmit: propTypes.func.isRequired
}

export default Form