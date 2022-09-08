import { Route, Routes } from "react-router-dom";
import Login from "./components/Pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Register from "./components/Pages/Register";
import Detail from "./components/Pages/Detail";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users/:id" element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
