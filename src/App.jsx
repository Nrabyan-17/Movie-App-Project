import Navbar from "./components/Navbar";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritePage from "./pages/FavoritePage";
import { MovieProvider } from "./Context/MovieContext";

function App() {

  return (
  <>
    <MovieProvider>
      <div>
        <Navbar />
        <main className="main-content">
          <Routes>
             <Route path="/" element={<HomePage />} />
             <Route path="/favorite" element={<FavoritePage />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  </>
  );
  
}

export default App;
