import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/login";
import Register from "./views/register";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
