import { useEffect, useState } from "react";
import { getMahasiswa } from "../../services/Mahasiswa";

function Home() {
  const [Mahasiswa, setMahasiswa] = useState([]);
  const getMhs = () => {
    getMahasiswa().then((res) => {
      console.log(res.data);
      setMahasiswa(res.data.data);
    });
  };

  useEffect(() => {
    getMhs();
  }, []);

  return (
    <div className="min-h-[90vh] bg-slate-700 text-slate-200">
      <div className="p-4">
        <h1 className="text-xl text-center">List Mahasiswa</h1>
        <div className="flex justify-center mt-8">
          <table className="w-full sm:w-6/12 mb-4 text-left rounded-sm table-auto">
            <thead>
              <tr className="bg-slate-500">
                <th className="p-2">No</th>
                <th className="p-2">Name</th>
                <th className="p-2">Jenis Kelamin</th>
                <th className="p-2">Alamat</th>
                <th className="p-2">Detail</th>
              </tr>
            </thead>
            <tbody>
              {Mahasiswa.map((mhs, index) => (
                <tr className="even:bg-slate-600 odd:bg-slate-500">
                  <td className="p-2">
                    <span className="font-bold">{index + 1}</span>  
                  </td>
                  <td className="p-2">
                    <span className="font-bold">{mhs.nama}</span>
                  </td>
                  <td className="p-2">
                    <span className="font-bold">{mhs.jenis_kelamin}</span>
                  </td>
                  <td className="p-2">
                    <span className="font-bold">{mhs.alamat}</span>
                  </td>
                  <td className="p-2">
                    <span className="font-bold">{mhs.id}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
