import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/login";
import Register from "./views/register";
import ForgetPassword from "./views/forgetPassword";
import ResetPassword from "./views/resetPassword";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetPassword" element={<ForgetPassword/>} />
          <Route path="/resetPassword/:userId" element={<ResetPassword/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
