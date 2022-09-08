import { Link } from "react-router-dom";

function Navbar() {
  

  return (
    <div className="w-full py-6 px-10 bg-slate-600">
      <div className="flex justify-between items-center">
            <Link className="text-3xl font-semibold text-white" to="/home">Unhas</Link>
            <div className="flex gap-4">
                <Link className="py-2 px-4 bg-slate-500 text-white rounded-md" to="/">Login</Link>
                <Link className="py-2 px-4 bg-sky-500 text-white rounded-md" to="/register">Register</Link>
            </div>
      </div>
    </div>
  );
}

export default Navbar;