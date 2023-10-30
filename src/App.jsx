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
              <Header />
              <Banner />
              <List />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
