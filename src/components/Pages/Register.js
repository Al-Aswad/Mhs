import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveMhs } from "../../services/Mahasiswa";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    jenis_kelamin: "",
    alamat: "",
    latitude: "",
    longitude: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    saveMhs(user).then((res) => {
      if (!res?.data?.success) {
        alert("Gagal");
      }

      return navigate("/login");
    });
  };

  return (
    <div>
      <div className="min-h-[90vh] bg-slate-700 justify-center items-center flex">
        <div className="bg-slate-600 p-6 rounded-md w-full sm:w-3/12 mx-4">
          <h1 className="text-white font-semibold text-xl mb-6 text-center">
            Silahkan Login
          </h1>
          <form action="" onSubmit={handelSubmit}>
            <div className="flex gap-4 flex-col mb-6">
              <input
                className="py-2 px-4 rounded-sm outline-none focus:ring-2 focus:ring-sky-400"
                type="text"
                placeholder="Jhon"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <input
                className="py-2 px-4 rounded-sm outline-none focus:ring-2 focus:ring-sky-400"
                type="email"
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
              <input
                className="py-2 px-4 rounded-sm outline-none focus:ring-2 focus:ring-sky-400"
                type="password"
                placeholder="confirm password"
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
              />
              <input
                className="py-2 px-4 rounded-sm outline-none focus:ring-2 focus:ring-sky-400"
                type="text"
                placeholder="alamat"
                value={user.alamat}
                onChange={(e) => setUser({ ...user, alamat: e.target.value })}
              />
              <select
                className="py-2 px-4 rounded-sm outline-none focus:ring-2 focus:ring-sky-400"
                value={user.jenis_kelamin}
                onChange={(e) =>
                  setUser({ ...user, jenis_kelamin: e.target.value })
                }
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-sky-700 text-white rounded-md py-2 px-4"
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
