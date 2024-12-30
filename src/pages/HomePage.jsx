import React, { useState, useEffect } from "react";
import { getMovies, searchMovies } from "../Services/api";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import "../css/Favorite.css";
import Loading from "../components/Loading";
import Error from "../components/Error";

const HomePage = () => {

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true); // Best Practice nya jika kita berinteraksi dengan API gunakan dua state, yaitu state error dan loading.

  useEffect(() => {
    // Menampilkan data film populer ketika pertama kali halaman dimuat.
    const loadMovies = async () => {
      try {
        const popularMovies = await getMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError(<Error />);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();

  }, []);

 async function handleSearch(e) {
    e.preventDefault(); // ---> e.preventDefault() digunakan untuk mencegah default action dari suatu elemen HTML, dalam kasus ini yaitu form submission.

    if (!search.trim()) // ---> Memastikan inputan search tidak kosong atau hanya berisi spasi.
      return; 
    if (loading) // ---> Memastikan loading selesai sebelum melakukan search baru.
      return; 
    
     setLoading(true);
     setErrorMessage(""); // --> Menghapus pesan error ketika pengguna melakukan pencarian data film nya dengan sesuai.
    
    // Menampilkan data film berdasarkan inputan search dari pengguna.
      try {
          const movie = await searchMovies(search);
          if (movie.length === 0) { 
             setErrorMessage("Mohon maaf, film yang anda cari tidak ditemukan!")
             setMovies([]) // ---> Jika data film yang dicari tidak ditemukan, maka tidak ada data film yang ditampilkan.
          } else {
             setMovies(movie)
          }
      } catch (err) {
          console.log(err)
          setError(<Error />)
       } finally {
          setLoading(false) // ---> Setelah proses pencarian selesai, maka loading akan berhenti dan menampilkan hasil pencarian film yang telah diinputkan oleh user.
       }
  }

  return (
    <>
      <div className="home">

        <form onSubmit={handleSearch} action="" className="search-form">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="search-input"
            placeholder="Cari film favorit anda"
            value={search}
            required
          />
          {/* Jika elemen button berada di dalam elemen form maka tidak perlu menggunakan event onClick untuk memunculkan suatu interaksi, 
          cukup dengan event onSubmit saja dari elemen form, DENGAN CATATAN TYPE DARI ELEMEN BUTTON WAJIB "SUBMIT". */}
          <button type="submit" className="search-btn">
            Cari
          </button>
        </form>

         <p className="text">{search}</p>

         {errorMessage && <p className="pesan-error">{errorMessage}</p>}

          {loading ? (
          <Loading />
          ) : (
            <div className="movie-list">
              {movies.map((item) => (
                <MovieCard item={item} key={item.id} />
              ))}
            </div>
          )}

      </div>
    </>
  );
};

export default HomePage;
