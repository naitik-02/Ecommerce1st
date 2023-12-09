// App.js

import React from 'react';
import Navbar from './Components/Navbar';
import MainStore from './Components/MainStore';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>

      <Navbar />
      <Routes>
      <Route
            path="/science"
            element={ <MainStore />}
          />
      </Routes>

      <MainStore />
      <Footer />
      </Router>
    </div>
  );
};

export default App;
