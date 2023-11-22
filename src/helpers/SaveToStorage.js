export const saveToStorage = (key, item) => {
    const movies = JSON.parse(localStorage.getItem(key)) || []
    movies.push(item)
    localStorage.setItem(key, JSON.stringify(movies))
}