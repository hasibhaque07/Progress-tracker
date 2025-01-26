import { React, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="container">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
