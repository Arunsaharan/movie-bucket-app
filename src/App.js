import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import TV from "./components/pages/TV";
import Trending from "./components/pages/Trending";
import Search from "./components/pages/Search";
import Popular from "./components/pages/Popular";
import SingleMovieDetails from "./components/pages/SingleMovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/popular" Component={Popular} />
        <Route path="/trending" Component={Trending} />
        <Route path="/tv shows" Component={TV} />
        <Route path="/search" Component={Search} />
        <Route path="/singlemovie/:id" Component={SingleMovieDetails} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
