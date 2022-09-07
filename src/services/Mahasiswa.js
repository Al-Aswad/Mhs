import axios from "axios";

const base_url=process.env.REACT_APP_BASE_URL
console.log(base_url);

export const getMahasiswa=async()=>{
    const res =await axios.get(`${base_url}/api/surat`);
    console.log('get User');
    return res;
}

export const getDetailSurah=async(id)=>{
    const res =await axios.get(`${base_url}/api/surat/${id}`);
    return res;
}

export const getTafsirSurah=async(id)=>{
    const res =await axios.get(`${base_url}/api/tafsir/${id}`);
    return res;
}