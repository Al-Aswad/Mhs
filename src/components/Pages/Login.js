import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (user !== "" && user.password !== "") {
      console.log(user);
      navigate("/");
    } else {
      alert("Username atau Password salah");
    }
  };

  return (
    <div>
      <div className="min-h-[90vh] bg-slate-700 justify-center items-center flex">
        <div className="bg-slate-600 p-6 rounded-md w-full sm:w-3/12 mx-4">
          <h1 className="text-white font-semibold text-xl mb-6">
            Silahkan Login
          </h1>
          <form action="">
            <div className="flex gap-4 flex-col mb-6">
              <input
                className="py-2 px-4 rounded-sm outline-none focus:ring-2 focus:ring-sky-400"
                type="text"
                placeholder="jhon@gmail.com"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <input
                className="py-2 px-4 rounded-sm outline-none focus:ring-2 focus:ring-sky-400"
                type="password"
                placeholder="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>

            <button
              className="bg-sky-700 text-white rounded-md py-2 px-4"
              onClick={(e) => {
                handleLogin(e);
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
