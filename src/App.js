import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/login";
import Register from "./views/register";
import ForgetPassword from "./views/forgetPassword";
import ResetPassword from "./views/resetPassword";
import AdmissionForm from "./views/form1";
import AcademicDetails from "./views/form2";
import EmploymentDetails from "./views/form3";
import PublicationDetails from "./views/form4";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetPassword" element={<ForgetPassword/>} />
          <Route path="/resetPassword/:userId" element={<ResetPassword/>} />
          <Route path="/form1/:userId" element={<AdmissionForm/>} />
          <Route path="/form2/:userId" element={<AcademicDetails/>} />
          <Route path="/form3/:userId" element={<EmploymentDetails/>} />
          <Route path="/form4/:userId" element={<PublicationDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
