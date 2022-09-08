import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../services/Mahasiswa";

function Detail() {
  const { id } = useParams();
  const [Mahasiswa, setMahasiswa] = useState([]);

  const getDetail = (id) => {
    getDetails(id).then((res) => {
      console.log(res.data.data);
      setMahasiswa(res.data.data);
    });
  };

  useEffect(() => {
    console.log(id);
    if (id) {
      getDetail(2);
    }
  }, [id]);

  return (
    <div className="min-h-[90vh] bg-slate-700 p-10 text-slate-300">
      <div>Detail Mahasiswa</div>
      <div className="flex ">
        <table>
          <tr>
            <td>Nama</td>
            <td>:</td>
            <td>{Mahasiswa.name}</td>
          </tr>

          <tr>
            <td>Jenis Kelamin</td>
            <td>:</td>
            <td>{Mahasiswa.jenis_kelamin}</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td>:</td>
            <td>{Mahasiswa.alamat}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Detail;
