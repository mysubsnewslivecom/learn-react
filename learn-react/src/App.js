import React from "react";
//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Home from "./components/Home";

// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Route path='/:movieId' element={<Movie />} />
    <GlobalStyle />
  </Router>
);

export default App;
