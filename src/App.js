import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import StudentDashboard from "./components/StudentDashboard";
import FacultyDashboard from "./components/FacultyDashboard";
import Guide from "./pages/Guide";
import Request from "./pages/Request";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/faculty-login" element={<FacultyLogin />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/student-dashboard/guide" element={<Guide />} />
          <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
          <Route path="/faculty-dashboard/request" element={<Request />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
