const API_KEY = "94fa16954d8871d7c5a93266506b0f02";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getMovies() {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`) // ---> function fetch() digunakan untuk mengirim permintaan HTTP ke server.
    const data = await response.json()  // ---> function json() digunakan untuk mengubah data yang diterima dari server yaitu 'response' menjadi format JSON.
    return data.results; // ---> data.results adalah data yang akan diambil dari hasil akhir response.
};

export async function searchMovies(query) {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`); // --> query yang diinputkan oleh user pada komponen search bar akan di encode menggunakan function encodeURIComponent().
    const data = await response.json();
    return data.results;
};