import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/Mahasiswa";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (user !== "" && user.password !== "") {
      login(user.email, user.password).then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.accessToken);
          navigate("/home");
        } else {
          alert("Username atau Password salah");
        }
      });
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
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
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
