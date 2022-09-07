import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
