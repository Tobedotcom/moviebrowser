import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../Components/MovieCard"


function Favorites () {
    const {favorites} = useMovieContext();

    if (favorites) {
        return 
    }
    return(
    <div className="favorites-empty">
        <h2>No favorite movies yet</h2>
        <p>start adding movies toyour favorites and they will appear here</p>
    </div>
    )
}

export default Favorites