import { useEffect } from "react";
import { getMahasiswa } from "../../services/Mahasiswa";

function Home() {

  const getMhs= () =>{
    getMahasiswa().then(res=>{
      console.log(res);
    });
  }

  // useEffect()

  getMhs();

    return (
      <div className="min-h-[90vh] bg-slate-700 text-slate-200">
        <div className="p-4">
          <h1 className="text-xl text-center">List Mahasiswa</h1>
          <div>

          </div>
        </div>
      </div>
    );
  }
  
  export default Home;