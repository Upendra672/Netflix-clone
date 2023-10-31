import "./App.scss";
import Banner from "./components/Banner";
import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import List from "./components/List";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomeBanner />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login page={true}/>
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Header />
              <Login page={false}/>
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Header/>
              <Banner/>
              <List title="Netflix Originals" param="originals"/>
              <List title="Trending Now" param="trending"/>
              <List title="Now Playing" param="now_playing"/>
              <List title="Popular" param="popular"/>
              <List title="Top Rated" param="top_rated"/>
              <List title="Upcoming" param="upcoming"/>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
