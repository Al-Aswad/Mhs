import { Route, Routes } from "react-router-dom";
import Login from "./components/Pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Register from "./components/Pages/Register";

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </div>
  );
}

export default App;
