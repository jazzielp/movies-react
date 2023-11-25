import propTypes from 'prop-types'
function Form({ onSubmit }) {
    return (

        <form onSubmit={onSubmit}>
            <input type="text" id="title" placeholder="Titulo" />
            <textarea id="description" placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    )
}

Form.propTypes = {
    onSubmit: propTypes.func.isRequired
}

export default Form