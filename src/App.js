import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Search from "./components/Search";
import RecommendCourt from "./components/RecommendCourt";
import SearchResults from "./components/SearchResults";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Stores from "./components/Stores";
import NewsPage from "./components/NewsPage";
import StoreDetail from "./components/StoreDetail";
import BookingPage from "./components/BookingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") !== null
  );

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={<Login onLogin={() => setIsLoggedIn(true)} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/stores"
            element={
              <>
                <header>
                  <Nav isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                  <Banner />
                </header>
                <Stores />
                <Footer />
              </>
            }
          />
          <Route
            path="/news"
            element={
              <>
                <header>
                  <Nav isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                  <Banner />
                </header>
                <NewsPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/booking/*"
            element={
              <>
                <header>
                  <Nav isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                  <Banner />
                </header>
                <BookingPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/storedetail/:id"
            element={
              <>
                <header>
                  <Nav isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                  <Banner />
                </header>
                <StoreDetail />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <header>
                  <Nav isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                  <Banner />
                </header>
                <Search onSearch={handleSearch} />
                {searchResults.length > 0 ? (
                  <SearchResults results={searchResults} />
                ) : (
                  <RecommendCourt />
                )}
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
