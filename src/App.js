import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMovies from "./Components/AllMovies/AllMovies";
import MovieDetails from "./Components/MovieDetails/MovieDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllMovies />} />
          <Route path="moviedetails/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
