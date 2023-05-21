import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Movies from "./Pages/Movies/Movies";
import TV from "./Pages/TV/TV";
import "./css/style.css";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/details/:type/:id" element={<Details />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
