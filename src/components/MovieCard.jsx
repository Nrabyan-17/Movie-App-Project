import "../css/MovieCard.css";
import { useMovieContext } from "../Context/MovieContext";

 const MovieCard = ({ item }) => {

     const { addFavorite, removeFavorite, likeMovie } = useMovieContext();
     const favorit = likeMovie(item.id)

    function favoriteMovie(e) {
        e.preventDefault()
        if (!favorit) {
            addFavorite(item)
        } else {
            removeFavorite(item.id)
        }
    }

  return (
    <>
        <div className="movie-card">

            <div className="movie-image">
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="movie-card-component" />
                    <div className="movie-overlay">
                        <button className={`favorite-btn ${ favorit ? "active" : "" }`}  onClick={favoriteMovie}>♥</button>
                    </div>
            </div>

            <div className="movie-info">
                <h3 className="movie-title">{item.title}</h3>
                <p className="movie-date">{item.release_date}</p>
            </div>

        </div>
    </>
  )

}

export default MovieCard;
