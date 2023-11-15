function Searcher() {
    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            <form>
                <input type="text" id="search_field" placeholder="searcher" />
                <button id="search">Buscar</button>
            </form>
        </div>
    )
}

export default Searcher